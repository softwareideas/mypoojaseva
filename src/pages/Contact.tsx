import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Google Apps Script URL - Replace this with your Apps Script web app URL
// You'll get this URL after creating the Google Apps Script
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxLNaO6TNF51106cN-FWjwIP0pfUkQHSio0eP4GivdiQQC4T3HZhiKOAhPoTPLEG22u8A/exec";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  // Indian phone number validation
  const validateIndianPhone = (phone: string): boolean => {
    if (!phone) return false;
    const cleaned = phone.replace(/[\s\-\(\)\+]/g, "");
    const indianPhoneRegex = /^[6-9]\d{9}$/;
    return indianPhoneRegex.test(cleaned);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhoneError("");

    if (value === "") return;

    if (!validateIndianPhone(value)) {
      setPhoneError(
        "Please enter a valid Indian phone number (10 digits starting with 6-9)"
      );
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // Get form values
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    // Validate phone if provided
    if (phone && !validateIndianPhone(phone)) {
      toast({
        title: "Invalid Phone Number",
        description:
          "Please enter a valid Indian phone number (10 digits starting with 6-9).",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Prepare data for Google Sheets
      const data = {
        name: name,
        email: email,
        phone: phone || "",
        subject: subject,
        message: message,
        timestamp: new Date().toLocaleString("en-IN", {
          timeZone: "Asia/Kolkata",
        }),
      };

      // Send to Google Apps Script
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. We'll respond shortly.",
      });

      form.reset();
      setPhoneError("");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description:
          "Failed to send message. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Header */}
        <div className="bg-temple-pattern py-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-maroon/10"></div>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h1 className="text-4xl font-bold text-maroon mb-4">Contact Us</h1>
            <p className="text-xl text-gray-700">
              We're here to guide you on your spiritual journey. Reach out with
              any questions.
            </p>
          </div>
        </div>

        {/* Contact Form & Info */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold text-maroon mb-6">
                Get In Touch
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Full Name"
                      required
                      className="border-gold/20 focus-visible:ring-gold/30"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="email@example.com"
                      required
                      className="border-gold/20 focus-visible:ring-gold/30"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="9876543210"
                    pattern="[6-9]\d{9}"
                    className={`border-gold/20 focus-visible:ring-gold/30 ${
                      phoneError ? "border-red-500" : ""
                    }`}
                    required
                    onChange={handlePhoneChange}
                    disabled={isSubmitting}
                  />
                  {phoneError && (
                    <p className="text-sm text-red-500">{phoneError}</p>
                  )}
                  <p className="text-xs text-gray-500">
                    Enter 10-digit Indian mobile number starting with 6-9
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="How can we help you?"
                    required
                    className="border-gold/20 focus-visible:ring-gold/30"
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Please share details about your inquiry..."
                    className="min-h-[120px] border-gold/20 focus-visible:ring-gold/30"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-saffron to-gold text-white disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-maroon mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                <Card className="p-6 border-gold/20">
                  <div className="flex">
                    <div className="mr-4">
                      <div className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center">
                        <Phone className="h-5 w-5 text-gold" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-maroon mb-1">
                        Phone
                      </h3>
                      <p className="text-gray-600">+91 86087 65113</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-gold/20">
                  <div className="flex">
                    <div className="mr-4">
                      <div className="h-10 w-10 rounded-full bg-gold/10 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-gold" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-maroon mb-1">
                        Email
                      </h3>
                      <p className="text-gray-600">mypoojaseva@gmail.com</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 border-gold/20 mt-6">
                  <h3 className="text-lg font-medium text-maroon mb-3">
                    Support Response Time
                  </h3>
                  <div className="space-y-2">
                    <p className="text-gray-600 text-sm">
                      Book your pooja services online anytime, 24/7
                    </p>
                    <p className="text-gray-600 text-sm">
                      We typically respond to inquiries within 24 hours during
                      business days.
                    </p>
                    <p className="text-gray-600 text-sm mt-3">
                      For urgent bookings, please call or WhatsApp us directly.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
