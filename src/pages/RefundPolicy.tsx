import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Clock, AlertCircle, CheckCircle, Phone, Mail } from "lucide-react";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-amber-50/20 to-rose-50/10">
      <Navbar />

      <main className="flex-grow">
        {/* Header */}
        <div className="bg-gradient-to-br from-maroon/5 via-saffron/5 to-amber-50/30 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-maroon to-saffron mb-6">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-maroon to-saffron bg-clip-text text-transparent mb-4">
              Refund & Cancellation Policy
            </h1>
            <p className="text-lg text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
          {/* Overview */}
          <Card className="border-2 border-saffron/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-maroon flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-saffron" />
                Policy Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                At My Pooja Seva, we understand that circumstances may change. This refund and cancellation policy outlines the terms and conditions for cancellations and refunds for our pooja and ritual services.
              </p>
              <p className="font-medium text-maroon">
                Please read this policy carefully before making a booking.
              </p>
            </CardContent>
          </Card>

          {/* Cancellation Policy */}
          <Card className="border-2 border-maroon/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-maroon flex items-center gap-2">
                <Clock className="h-6 w-6 text-saffron" />
                Cancellation Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-green-900 mb-1">
                        Free Cancellation (More than 48 hours before service)
                      </h3>
                      <p className="text-green-800 text-sm">
                        100% refund if cancelled more than 48 hours (2 days) before the scheduled pooja date and time.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-yellow-900 mb-1">
                        Partial Refund (24-48 hours before service)
                      </h3>
                      <p className="text-yellow-800 text-sm">
                        50% refund if cancelled between 24 to 48 hours before the scheduled pooja date and time.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-red-900 mb-1">
                        No Refund (Less than 24 hours before service)
                      </h3>
                      <p className="text-red-800 text-sm">
                        No refund if cancelled less than 24 hours before the scheduled pooja date and time, as pandits and materials would have already been arranged.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Refund Process */}
          <Card className="border-2 border-saffron/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-maroon">Refund Process</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-saffron/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-maroon font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Request Cancellation</h4>
                    <p className="text-sm">Contact us via phone or email to request cancellation of your booking.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-saffron/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-maroon font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Verification</h4>
                    <p className="text-sm">We will verify your booking details and cancellation eligibility.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-saffron/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-maroon font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Refund Processing</h4>
                    <p className="text-sm">Eligible refunds will be processed within 5-7 business days to the original payment method.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-saffron/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-maroon font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Confirmation</h4>
                    <p className="text-sm">You will receive a confirmation email once the refund is processed.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Special Cases */}
          <Card className="border-2 border-maroon/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-maroon">Special Cases</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Cash on Delivery (COD) Bookings</h4>
                  <p className="text-sm">
                    For COD bookings, no advance payment is collected. Cancellations can be made free of charge up to 24 hours before the service. Cancellations within 24 hours may result in a nominal cancellation fee.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Service Provider Cancellation</h4>
                  <p className="text-sm">
                    If we need to cancel due to unavailability of pandits or unforeseen circumstances, you will receive a 100% refund or the option to reschedule at no additional cost.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Weather or Emergency</h4>
                  <p className="text-sm">
                    In case of extreme weather conditions or emergencies, we offer flexible rescheduling options without any additional charges.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Advance vs Full Payment</h4>
                  <p className="text-sm">
                    • <strong>30% Advance Payment:</strong> Refund applies only to the advance amount paid.<br />
                    • <strong>100% Full Payment:</strong> Refund applies to the full amount as per the cancellation timeline.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="border-2 border-saffron/20 shadow-lg bg-gradient-to-br from-amber-50/50 to-white">
            <CardHeader>
              <CardTitle className="text-2xl text-maroon">Need Help?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                For cancellation requests or questions about our refund policy, please contact us:
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-10 h-10 rounded-full bg-saffron/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-maroon" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Phone</p>
                    <a href="tel:+919876543210" className="text-saffron hover:underline">
                      +91 98765 43210
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <div className="w-10 h-10 rounded-full bg-saffron/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-maroon" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a href="mailto:support@mypoojaseva.com" className="text-saffron hover:underline">
                      support@mypoojaseva.com
                    </a>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4 pt-4 border-t border-gray-200">
                Our customer support team is available Monday to Saturday, 9:00 AM to 6:00 PM IST.
              </p>
            </CardContent>
          </Card>

          {/* Important Notes */}
          <Card className="border-2 border-maroon/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-maroon">Important Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-saffron mt-1">•</span>
                  <span>All refund requests must be made in writing via email or through our customer support.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-saffron mt-1">•</span>
                  <span>Refunds will be processed to the original payment method used during booking.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-saffron mt-1">•</span>
                  <span>Bank processing times may vary and are not included in our refund timeline.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-saffron mt-1">•</span>
                  <span>We reserve the right to modify this policy at any time. Changes will be effective immediately upon posting.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-saffron mt-1">•</span>
                  <span>For any disputes, the decision of My Pooja Seva management will be final.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RefundPolicy;
