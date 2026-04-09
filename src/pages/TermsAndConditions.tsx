import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, AlertCircle, CheckCircle, Scale, Phone, Mail } from "lucide-react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-amber-50/20 to-rose-50/10">
      <Navbar />

      <main className="flex-grow">
        {/* Header */}
        <div className="bg-gradient-to-br from-maroon/5 via-saffron/5 to-amber-50/30 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-maroon to-saffron mb-6">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-maroon to-saffron bg-clip-text text-transparent mb-4">
              Terms and Conditions
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          {/* Introduction */}
          <Card className="border-2 border-saffron/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-maroon flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-saffron" />
                Agreement to Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Welcome to My Pooja Seva. By accessing and using our website and services, you agree to be bound by these Terms and Conditions. Please read them carefully before using our services.
              </p>
              <p className="font-medium text-maroon">
                If you do not agree with any part of these terms, please do not use our services.
              </p>
            </CardContent>
          </Card>

          {/* Services */}
          <Card className="border-2 border-maroon/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-maroon">Services Provided</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                My Pooja Seva provides Hindu religious ceremony and ritual services, including but not limited to:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-saffron mt-0.5 flex-shrink-0" />
                  <span>Birth ceremonies and naming ceremonies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-saffron mt-0.5 flex-shrink-0" />
                  <span>Marriage rituals and wedding ceremonies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-saffron mt-0.5 flex-shrink-0" />
                  <span>Griha Pravesh (housewarming) ceremonies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-saffron mt-0.5 flex-shrink-0" />
                  <span>Homam and havan services</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-saffron mt-0.5 flex-shrink-0" />
                  <span>Spiritual guidance and consultation</span>
                </li>
              </ul>
              <p className="text-sm pt-2">
                All services are performed by qualified and experienced pandits following traditional Hindu scriptures and customs.
              </p>
            </CardContent>
          </Card>

          {/* Booking Terms */}
          <Card className="border-2 border-saffron/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-maroon">Booking Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">1. Booking Confirmation</h4>
                <p className="text-sm">
                  All bookings are subject to availability and confirmation. A booking is confirmed only after payment is received (for online payments) or booking details are verified (for COD bookings).
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">2. Accurate Information</h4>
                <p className="text-sm">
                  You must provide accurate and complete information during booking, including name, phone number, email, address, and service requirements. Incorrect information may result in service delays or cancellation.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">3. Service Scheduling</h4>
                <p className="text-sm">
                  Services must be scheduled at least 24 hours in advance. Last-minute bookings are subject to availability and may incur additional charges.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">4. Rescheduling</h4>
                <p className="text-sm">
                  Rescheduling requests must be made at least 24 hours before the scheduled service time. Rescheduling is subject to pandit availability.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Payment Terms */}
          <Card className="border-2 border-maroon/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-maroon">Payment Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Payment Methods</h4>
                <p className="text-sm mb-2">We accept the following payment methods:</p>
                <ul className="text-sm space-y-1 ml-6">
                  <li>• Online payment via Razorpay (Credit/Debit Cards, UPI, Net Banking)</li>
                  <li>• Cash on Delivery (COD) - payment on service day</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Payment Options</h4>
                <p className="text-sm mb-2">For online payments, you can choose:</p>
                <ul className="text-sm space-y-1 ml-6">
                  <li>• 30% Advance Payment - remaining balance due on service day</li>
                  <li>• 100% Full Payment - complete payment at booking</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">COD Terms</h4>
                <p className="text-sm">
                  For COD bookings, full payment must be made in cash to the pandit on the service day before the ceremony begins. Failure to pay may result in service cancellation.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Additional Costs</h4>
                <p className="text-sm">
                  Prices displayed are base prices. Additional costs may apply for special materials, extended services, or travel beyond our standard service area.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* User Responsibilities */}
          <Card className="border-2 border-saffron/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-maroon">User Responsibilities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>By using our services, you agree to:</p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-saffron mt-1">•</span>
                  <span className="text-sm">Provide a clean and appropriate space for the ceremony</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-saffron mt-1">•</span>
                  <span className="text-sm">Ensure availability of basic amenities (water, electricity, seating)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-saffron mt-1">•</span>
                  <span className="text-sm">Be present at the scheduled time and location</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-saffron mt-1">•</span>
                  <span className="text-sm">Treat our pandits and staff with respect</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-saffron mt-1">•</span>
                  <span className="text-sm">Inform us of any special requirements or allergies in advance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-saffron mt-1">•</span>
                  <span className="text-sm">Not use our services for any unlawful or inappropriate purposes</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Liability and Disclaimers */}
          <Card className="border-2 border-maroon/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-maroon flex items-center gap-2">
                <Scale className="h-6 w-6 text-saffron" />
                Liability and Disclaimers
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Service Limitations</h4>
                <p className="text-sm">
                  While we strive to provide authentic and high-quality religious services, we cannot guarantee specific spiritual outcomes or results. Our services are performed according to traditional Hindu practices and scriptures.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Force Majeure</h4>
                <p className="text-sm">
                  We are not liable for failure to perform services due to circumstances beyond our control, including but not limited to natural disasters, extreme weather, pandit illness, or government restrictions.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Property Damage</h4>
                <p className="text-sm">
                  We take utmost care during ceremonies. However, we are not responsible for any accidental damage to property unless caused by gross negligence on our part.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Limitation of Liability</h4>
                <p className="text-sm">
                  Our total liability for any claim arising from our services shall not exceed the amount paid for the specific service in question.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="border-2 border-saffron/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-maroon">Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p className="text-sm">
                All content on this website, including text, images, logos, graphics, and software, is the property of My Pooja Seva or its content suppliers and is protected by copyright and intellectual property laws.
              </p>
              <p className="text-sm">
                You may not reproduce, distribute, modify, or create derivative works from our content without explicit written permission.
              </p>
            </CardContent>
          </Card>

          {/* Privacy */}
          <Card className="border-2 border-maroon/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-maroon">Privacy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p className="text-sm">
                Your privacy is important to us. Please refer to our <a href="/privacy-policy" className="text-saffron hover:underline font-medium">Privacy Policy</a> for information on how we collect, use, and protect your personal data.
              </p>
            </CardContent>
          </Card>

          {/* Dispute Resolution */}
          <Card className="border-2 border-saffron/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-maroon">Dispute Resolution</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Governing Law</h4>
                <p className="text-sm">
                  These Terms and Conditions are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in [Your City/State].
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Complaint Resolution</h4>
                <p className="text-sm">
                  If you have any complaints or concerns about our services, please contact us first. We will make every effort to resolve the issue amicably within 7 business days.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Changes to Terms */}
          <Card className="border-2 border-maroon/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-maroon">Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p className="text-sm">
                We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting on this website. Your continued use of our services after changes are posted constitutes acceptance of the modified terms.
              </p>
              <p className="text-sm">
                We encourage you to review these terms periodically to stay informed of any updates.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="border-2 border-saffron/20 shadow-lg bg-gradient-to-br from-amber-50/50 to-white">
            <CardHeader>
              <CardTitle className="text-2xl text-maroon">Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 text-sm">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-10 h-10 rounded-full bg-saffron/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-maroon" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <a href="tel:+918608765113" className="text-saffron hover:underline text-sm">
                      +91 86087 65113
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-10 h-10 rounded-full bg-saffron/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-maroon" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a href="mailto:mypoojaseva@gmail.com" className="text-saffron hover:underline text-sm">
                      mypoojaseva@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Acceptance */}
          <Card className="border-2 border-maroon/20 shadow-lg bg-gradient-to-br from-maroon/5 to-saffron/5">
            <CardContent className="p-6">
              <p className="text-center text-gray-700 font-medium">
                By using My Pooja Seva's services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
