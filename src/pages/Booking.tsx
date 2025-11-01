import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import {
  ArrowLeft,
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  User,
  Phone,
  Mail,
  CheckCircle,
} from "lucide-react";
import { format } from "date-fns";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  PhoneAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import { auth } from "@/firebase/config";

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const poojaData = location.state?.poojaData || null;
  const { toast } = useToast();

  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedSlot, setSelectedSlot] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");

  // OTP Verification States
  const [phoneError, setPhoneError] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [otpError, setOtpError] = useState("");

  // Cleanup reCAPTCHA on unmount
  useEffect(() => {
    return () => {
      if (window.recaptchaVerifier) {
        try {
          window.recaptchaVerifier.clear();
        } catch (e) {
          // Ignore cleanup errors
        }
        delete window.recaptchaVerifier;
      }
    };
  }, []);

  // Available time slots
  const timeSlots = [
    "6:00 AM - 8:00 AM",
    "8:00 AM - 10:00 AM",
    "10:00 AM - 12:00 PM",
    "12:00 PM - 2:00 PM",
    "2:00 PM - 4:00 PM",
    "4:00 PM - 6:00 PM",
    "6:00 PM - 8:00 PM",
  ];

  // Phone Number Validation
  const validateIndianPhone = (phone: string): boolean => {
    const cleaned = phone.replace(/[\s\-\(\)\+]/g, "");
    return /^[6-9]\d{9}$/.test(cleaned);
  };

  const handlePhoneChange = (value: string) => {
    const numericValue = value.replace(/\D/g, "").slice(0, 10);
    setPhone(numericValue);

    if (numericValue.length === 10) {
      if (validateIndianPhone(numericValue)) {
        setPhoneError("");
      } else {
        setPhoneError("Please enter a valid 10-digit Indian mobile number");
      }
    } else {
      setPhoneError("");
    }

    // Reset OTP states if phone changes
    if (otpSent) {
      setOtpSent(false);
      setOtp("");
      setIsPhoneVerified(false);
    }
  };

  // Setup reCAPTCHA - Only create once like OtpLogin.jsx
  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            console.log("reCAPTCHA solved:", response);
          },
          "expired-callback": () => {
            console.warn("reCAPTCHA expired. Please try again.");
            toast({
              title: "reCAPTCHA Expired",
              description: "Please try again",
              variant: "destructive",
            });
          },
        }
      );
    }
  };

  // Send OTP
  const handleSendOtp = async () => {
    if (!validateIndianPhone(phone)) {
      setPhoneError("Please enter a valid 10-digit Indian mobile number");
      return;
    }

    setIsVerifying(true);
    setOtpError("");

    try {
      setupRecaptcha();

      const appVerifier = window.recaptchaVerifier;
      const phoneNumber = `+91${phone}`;

      const confirmationResult = await signInWithPhoneNumber(
        auth,
        phoneNumber,
        appVerifier
      );
      setVerificationId(confirmationResult.verificationId);
      setOtpSent(true);

      toast({
        title: "OTP Sent!",
        description: `OTP has been sent to +91 ${phone}`,
      });
    } catch (error: any) {
      console.error("Error sending OTP:", error);

      // Handle specific Firebase errors
      if (error.code === "auth/billing-not-enabled") {
        toast({
          title: "SMS Quota Exceeded",
          description:
            "New projects have a 10 SMS/day quota. Add billing in Firebase Console to increase. See FIREBASE_BILLING_FIX.md",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: error.message || "Failed to send OTP. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsVerifying(false);
    }
  };

  // Verify OTP
  const handleVerifyOtp = async () => {
    if (otp.length !== 6) {
      setOtpError("Please enter a 6-digit OTP");
      return;
    }

    setIsVerifying(true);
    setOtpError("");

    try {
      const credential = PhoneAuthProvider.credential(verificationId, otp);
      await signInWithCredential(auth, credential);

      setIsPhoneVerified(true);

      toast({
        title: "Phone Verified!",
        description: "Your phone number has been verified successfully",
      });
    } catch (error: any) {
      console.error("Error verifying OTP:", error);
      setOtpError("Invalid OTP. Please check and try again.");
      toast({
        title: "Invalid OTP",
        description: "Please enter the correct OTP",
        variant: "destructive",
      });
    } finally {
      setIsVerifying(false);
    }
  };

  // Resend OTP
  const handleResendOtp = async () => {
    setOtp("");
    setOtpError("");
    await handleSendOtp();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
    alert("Booking submitted successfully! We will contact you soon.");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gold/5">
      <Navbar />

      <main className="flex-grow">
        {/* Header */}
        <div className="bg-temple-pattern py-12 px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-maroon/10"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="mb-4 text-gold"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <h1 className="text-4xl font-bold text-maroon mb-2">
              Book Your Pooja
            </h1>
            <p className="text-xl text-gray-700">
              Select date, time, and provide your details to complete the
              booking
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Booking Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-maroon">Booking Details</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Date and Time Selection */}
                    <div>
                      <Label className="text-lg font-semibold text-gray-900 mb-4 block">
                        Select Date & Time{" "}
                        <span className="text-red-500">*</span>
                      </Label>

                      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                        {/* Date Selection */}
                        <div className="lg:col-span-3 space-y-3">
                          <div className="flex items-center gap-2 text-gray-700 mb-3">
                            <CalendarIcon className="h-5 w-5 text-gold" />
                            <span className="font-medium text-lg">
                              Choose Date
                            </span>
                          </div>
                          <div className="border-2 border-gold/20 rounded-lg p-6 bg-gradient-to-br from-white to-gold/5 shadow-sm flex items-center justify-center">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              disabled={(date) => date < new Date()}
                              className="rounded-md"
                              classNames={{
                                months:
                                  "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                                month: "space-y-4",
                                caption:
                                  "flex justify-center pt-1 relative items-center mb-4",
                                caption_label:
                                  "text-base font-semibold text-maroon",
                                nav: "space-x-1 flex items-center",
                                nav_button:
                                  "h-8 w-8 bg-transparent p-0 opacity-50 hover:opacity-100 hover:bg-gold/10 rounded",
                                table: "w-full border-collapse space-y-1",
                                head_row: "flex mb-2",
                                head_cell:
                                  "text-gray-600 rounded-md w-12 font-semibold text-sm",
                                row: "flex w-full mt-2",
                                cell: "h-12 w-12 text-center text-sm p-0 relative rounded-md [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gold/10 [&:has([aria-selected])]:bg-gold/20 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                                day: "h-12 w-12 p-0 font-medium aria-selected:opacity-100 rounded-md flex items-center justify-center",
                                day_selected:
                                  "bg-gold text-white hover:bg-gold hover:text-white focus:bg-gold focus:text-white font-bold shadow-md",
                                day_today:
                                  "bg-gold/20 text-maroon font-bold border-2 border-gold",
                                day_outside: "text-gray-400 opacity-50",
                                day_disabled: "text-gray-300",
                                day_range_middle:
                                  "aria-selected:bg-gold/10 aria-selected:text-gray-900",
                                day_hidden: "invisible",
                              }}
                            />
                          </div>
                        </div>

                        {/* Time Slot Selection */}
                        <div className="lg:col-span-2 space-y-3">
                          <div className="flex items-center gap-2 text-gray-700 mb-3">
                            <Clock className="h-5 w-5 text-gold" />
                            <span className="font-medium text-lg">
                              Choose Time
                            </span>
                          </div>
                          <RadioGroup
                            value={selectedSlot}
                            onValueChange={setSelectedSlot}
                          >
                            <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
                              {timeSlots.map((slot) => (
                                <div
                                  key={slot}
                                  className={`flex items-center space-x-3 border-2 rounded-lg p-4 hover:border-gold/50 hover:bg-gold/5 transition-all cursor-pointer ${
                                    selectedSlot === slot
                                      ? "border-gold bg-gold/10"
                                      : "border-gray-200"
                                  }`}
                                  onClick={() => setSelectedSlot(slot)}
                                >
                                  <RadioGroupItem value={slot} id={slot} />
                                  <Label
                                    htmlFor={slot}
                                    className="text-sm cursor-pointer font-medium flex items-center flex-1"
                                  >
                                    <Clock
                                      className={`h-4 w-4 mr-2 ${
                                        selectedSlot === slot
                                          ? "text-gold"
                                          : "text-gray-400"
                                      }`}
                                    />
                                    {slot}
                                  </Label>
                                </div>
                              ))}
                            </div>
                          </RadioGroup>
                        </div>
                      </div>
                    </div>

                    {/* Pooja Information */}
                    {poojaData && (
                      <div className="bg-gold/5 rounded-lg p-4 border border-gold/20">
                        <h3 className="font-medium text-maroon mb-2">
                          {poojaData.name}
                        </h3>
                        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                          <p className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-gold" />
                            Duration: {poojaData.duration}
                          </p>
                          <p className="flex items-center">
                            <User className="h-4 w-4 mr-2 text-gold" />
                            Pandits: {poojaData.pandits}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Contact Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        Contact Information
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">
                            Full Name <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            required
                          />
                        </div>
                        <div className="md:col-span-2">
                          <Label htmlFor="phone">
                            Phone Number <span className="text-red-500">*</span>
                          </Label>
                          <div className="flex gap-2">
                            <Input
                              id="phone"
                              type="tel"
                              value={phone}
                              onChange={(e) =>
                                handlePhoneChange(e.target.value)
                              }
                              onBlur={() => {
                                if (
                                  phone.length === 10 &&
                                  validateIndianPhone(phone) &&
                                  !otpSent
                                ) {
                                  // Optionally auto-send OTP on blur if valid
                                }
                              }}
                              placeholder="9876543210"
                              className="flex-1"
                              pattern="[6-9]\d{9}"
                              maxLength={10}
                              disabled={isPhoneVerified}
                            />
                            {!otpSent && !isPhoneVerified && (
                              <Button
                                type="button"
                                onClick={handleSendOtp}
                                disabled={
                                  !validateIndianPhone(phone) || isVerifying
                                }
                                className="bg-gradient-to-r from-gold to-saffron text-white whitespace-nowrap"
                              >
                                {isVerifying ? "Sending..." : "Send OTP"}
                              </Button>
                            )}
                          </div>
                          {phoneError && (
                            <p className="text-red-500 text-sm mt-1">
                              {phoneError}
                            </p>
                          )}
                          {isPhoneVerified && (
                            <p className="text-green-600 text-sm mt-1 flex items-center gap-1">
                              <CheckCircle className="h-4 w-4" />
                              Phone verified
                            </p>
                          )}
                        </div>
                      </div>

                      {/* OTP Verification Section */}
                      {otpSent && !isPhoneVerified && (
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-3">
                            <Phone className="h-5 w-5 text-blue-600" />
                            <Label className="text-blue-900 font-semibold">
                              OTP sent to +91 {phone}
                            </Label>
                          </div>
                          <div className="space-y-3">
                            <div>
                              <Label htmlFor="otp">Enter OTP</Label>
                              <div className="flex gap-2">
                                <Input
                                  id="otp"
                                  type="text"
                                  placeholder="Enter 6-digit OTP"
                                  value={otp}
                                  onChange={(e) => {
                                    const value = e.target.value
                                      .replace(/\D/g, "")
                                      .slice(0, 6);
                                    setOtp(value);
                                    if (otpError) setOtpError("");
                                  }}
                                  disabled={isVerifying || isPhoneVerified}
                                  className="text-center text-2xl tracking-widest font-semibold"
                                  maxLength={6}
                                />
                                <Button
                                  type="button"
                                  onClick={handleVerifyOtp}
                                  disabled={otp.length !== 6 || isVerifying}
                                  className="bg-gradient-to-r from-gold to-saffron text-white whitespace-nowrap"
                                >
                                  {isVerifying ? "Verifying..." : "Verify"}
                                </Button>
                              </div>
                              {otpError && (
                                <p className="text-red-500 text-sm mt-1">
                                  {otpError}
                                </p>
                              )}
                            </div>
                            <div className="text-center">
                              <button
                                type="button"
                                onClick={handleResendOtp}
                                disabled={isVerifying}
                                className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                              >
                                Resend OTP
                              </button>
                            </div>
                          </div>
                        </div>
                      )}

                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                        />
                      </div>

                      <div>
                        <Label htmlFor="address">
                          Address <span className="text-red-500">*</span>
                        </Label>
                        <Textarea
                          id="address"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder="Enter complete address where pooja will be performed"
                          rows={3}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="request">Special Requests</Label>
                        <Textarea
                          id="request"
                          value={specialRequest}
                          onChange={(e) => setSpecialRequest(e.target.value)}
                          placeholder="Any special requests or additional information"
                          rows={3}
                        />
                      </div>
                    </div>

                    {/* reCAPTCHA Container */}
                    <div id="recaptcha-container"></div>

                    {/* Submit Button */}
                    <div className="flex gap-4">
                      <Button
                        type="submit"
                        className="flex-1 bg-gradient-to-r from-gold to-saffron text-white"
                        disabled={!isPhoneVerified}
                      >
                        {isPhoneVerified
                          ? "Confirm Booking"
                          : "Verify Phone to Continue"}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => navigate(-1)}
                      >
                        Cancel
                      </Button>
                    </div>
                    {!isPhoneVerified && (
                      <p className="text-sm text-gray-600 text-center">
                        Please verify your phone number before submitting
                      </p>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Booking Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="text-maroon">Booking Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {poojaData && (
                    <>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">
                          {poojaData.name}
                        </h4>
                        <div className="space-y-1 text-sm text-gray-600">
                          <p>
                            <span className="font-medium">Price:</span> ₹
                            {poojaData.price}
                          </p>
                          <p>
                            <span className="font-medium">Duration:</span>{" "}
                            {poojaData.duration}
                          </p>
                          <p>
                            <span className="font-medium">Pandits:</span>{" "}
                            {poojaData.pandits}
                          </p>
                        </div>
                      </div>
                      <div className="border-t pt-4">
                        <div className="flex justify-between items-center text-lg font-bold text-maroon">
                          <span>Total</span>
                          <span>₹{poojaData.price}</span>
                        </div>
                      </div>
                    </>
                  )}

                  {date && (
                    <div className="border-t pt-4 space-y-2">
                      <p className="text-sm text-gray-600 flex items-center">
                        <CalendarIcon className="h-4 w-4 mr-2 text-gold" />
                        <span className="font-medium">Date:</span>{" "}
                        {format(date, "PPP")}
                      </p>
                      {selectedSlot && (
                        <p className="text-sm text-gray-600 flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-gold" />
                          <span className="font-medium">Time:</span>{" "}
                          {selectedSlot}
                        </p>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Booking;
