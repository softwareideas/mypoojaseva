import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Lock, Eye, Database, UserCheck, Phone, Mail, AlertCircle } from "lucide-react";

const PrivacyPolicy = () => {
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
              Privacy Policy
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
                <Eye className="h-6 w-6 text-saffron" />
                Our Commitment to Privacy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                At My Pooja Seva, we are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, store, and protect your data when you use our website and services.
              </p>
              <p className="font-medium text-maroon">
                By using our services, you consent to the data practices described in this policy.
              </p>
            </CardContent>
          </Card>

          {/* Information We Collect */}
          <Card className="border-2 border-maroon/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-maroon flex items-center gap-2">
                <Database className="h-6 w-6 text-saffron" />
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Personal Information</h4>
                <p className="text-sm mb-2">When you book our services, we collect:</p>
                <ul className="text-sm space-y-1 ml-6">
                  <li>• Full name</li>
                  <li>• Phone number</li>
                  <li>• Email address (optional)</li>
                  <li>• Service address (where pooja will be performed)</li>
                  <li>• Special requests or requirements</li>
                  <li>• Preferred date and time for service</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Payment Information</h4>
                <p className="text-sm mb-2">For online payments, we collect:</p>
                <ul className="text-sm space-y-1 ml-6">
                  <li>• Payment method details (processed securely by Razorpay)</li>
                  <li>• Transaction IDs and payment status</li>
                  <li>• Billing information</li>
                </ul>
                <p className="text-sm mt-2 text-amber-700 bg-amber-50 p-3 rounded">
                  <AlertCircle className="h-4 w-4 inline mr-1" />
                  We do not store your credit card or debit card information. All payment processing is handled securely by Razorpay.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Automatically Collected Information</h4>
                <p className="text-sm mb-2">When you visit our website, we may automatically collect:</p>
                <ul className="text-sm space-y-1 ml-6">
                  <li>• Browser type and version</li>
                  <li>• Device information</li>
                  <li>• IP address</li>
                  <li>• Pages visited and time spent</li>
                  <li>• Referring website</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Information */}
          <Card className="border-2 border-saffron/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-maroon">How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p className="text-sm mb-2">We use the collected information for the following purposes:</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-saffron/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-maroon font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 text-sm">Service Delivery</h5>
                    <p className="text-sm">To process and fulfill your booking requests, schedule pandits, and perform the requested ceremonies.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-saffron/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-maroon font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 text-sm">Communication</h5>
                    <p className="text-sm">To contact you regarding your booking, send confirmations, reminders, and updates about your service.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-saffron/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-maroon font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 text-sm">Payment Processing</h5>
                    <p className="text-sm">To process payments, issue receipts, and handle refunds as per our refund policy.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-saffron/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-maroon font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 text-sm">Customer Support</h5>
                    <p className="text-sm">To respond to your inquiries, complaints, and provide customer support.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-saffron/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-maroon font-bold text-sm">5</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 text-sm">Service Improvement</h5>
                    <p className="text-sm">To analyze usage patterns, improve our website, and enhance our services.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-saffron/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-maroon font-bold text-sm">6</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 text-sm">Marketing (Optional)</h5>
                    <p className="text-sm">To send you promotional offers, festival reminders, and service updates (only if you opt-in).</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Storage */}
          <Card className="border-2 border-maroon/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-maroon flex items-center gap-2">
                <Lock className="h-6 w-6 text-saffron" />
                How We Store Your Data
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Local Storage</h4>
                <p className="text-sm">
                  Booking information is currently stored in your browser's local storage. This data remains on your device and is not automatically transmitted to our servers.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Data Security</h4>
                <p className="text-sm">
                  We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Data Retention</h4>
                <p className="text-sm">
                  We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, and resolve disputes.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Third-Party Services */}
          <Card className="border-2 border-saffron/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-maroon">Third-Party Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p className="text-sm">We use the following third-party services that may collect and process your data:</p>
              
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <h5 className="font-semibold text-blue-900 mb-1">Razorpay (Payment Gateway)</h5>
                <p className="text-sm text-blue-800">
                  Razorpay processes all online payments. They have their own privacy policy and security measures. We do not have access to your complete payment card details.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <h5 className="font-semibold text-green-900 mb-1">WhatsApp</h5>
                <p className="text-sm text-green-800">
                  When you use our WhatsApp contact feature, you are subject to WhatsApp's privacy policy and terms of service.
                </p>
              </div>

              <p className="text-sm pt-2">
                We are not responsible for the privacy practices of third-party services. We encourage you to review their privacy policies.
              </p>
            </CardContent>
          </Card>

          {/* Data Sharing */}
          <Card className="border-2 border-maroon/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-maroon">Data Sharing and Disclosure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p className="text-sm font-medium">We do not sell, trade, or rent your personal information to third parties.</p>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">We may share your information with:</h4>
                <ul className="text-sm space-y-2 ml-6">
                  <li>
                    <span className="font-medium">• Service Providers:</span> Our pandits and staff who need the information to perform the requested services.
                  </li>
                  <li>
                    <span className="font-medium">• Payment Processors:</span> Razorpay for processing online payments.
                  </li>
                  <li>
                    <span className="font-medium">• Legal Requirements:</span> When required by law, court order, or government regulation.
                  </li>
                  <li>
                    <span className="font-medium">• Business Transfers:</span> In the event of a merger, acquisition, or sale of assets.
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="border-2 border-saffron/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-maroon flex items-center gap-2">
                <UserCheck className="h-6 w-6 text-saffron" />
                Your Privacy Rights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p className="text-sm mb-2">You have the following rights regarding your personal data:</p>
              
              <div className="space-y-3">
                <div className="bg-gray-50 p-3 rounded">
                  <h5 className="font-semibold text-gray-900 text-sm mb-1">Right to Access</h5>
                  <p className="text-sm">You can request a copy of the personal data we hold about you.</p>
                </div>

                <div className="bg-gray-50 p-3 rounded">
                  <h5 className="font-semibold text-gray-900 text-sm mb-1">Right to Correction</h5>
                  <p className="text-sm">You can request correction of inaccurate or incomplete personal data.</p>
                </div>

                <div className="bg-gray-50 p-3 rounded">
                  <h5 className="font-semibold text-gray-900 text-sm mb-1">Right to Deletion</h5>
                  <p className="text-sm">You can request deletion of your personal data, subject to legal obligations.</p>
                </div>

                <div className="bg-gray-50 p-3 rounded">
                  <h5 className="font-semibold text-gray-900 text-sm mb-1">Right to Object</h5>
                  <p className="text-sm">You can object to processing of your personal data for marketing purposes.</p>
                </div>

                <div className="bg-gray-50 p-3 rounded">
                  <h5 className="font-semibold text-gray-900 text-sm mb-1">Right to Withdraw Consent</h5>
                  <p className="text-sm">You can withdraw consent for data processing at any time.</p>
                </div>
              </div>

              <p className="text-sm pt-2 text-amber-700">
                To exercise any of these rights, please contact us using the information provided below.
              </p>
            </CardContent>
          </Card>

          {/* Cookies */}
          <Card className="border-2 border-maroon/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-maroon">Cookies and Tracking</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p className="text-sm">
                Our website uses browser local storage to store booking information and improve user experience. We do not currently use cookies for tracking or advertising purposes.
              </p>
              <p className="text-sm">
                You can clear your browser's local storage at any time through your browser settings.
              </p>
            </CardContent>
          </Card>

          {/* Children's Privacy */}
          <Card className="border-2 border-saffron/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-maroon">Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p className="text-sm">
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
              </p>
            </CardContent>
          </Card>

          {/* Changes to Policy */}
          <Card className="border-2 border-maroon/20 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-maroon">Changes to This Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p className="text-sm">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the new policy on this page with an updated "Last updated" date.
              </p>
              <p className="text-sm">
                We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="border-2 border-saffron/20 shadow-lg bg-gradient-to-br from-amber-50/50 to-white">
            <CardHeader>
              <CardTitle className="text-2xl text-maroon">Contact Us About Privacy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 text-sm">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
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
              <p className="text-sm text-gray-600 mt-4 pt-4 border-t border-gray-200">
                We will respond to your privacy-related inquiries within 7 business days.
              </p>
            </CardContent>
          </Card>

          {/* Consent */}
          <Card className="border-2 border-maroon/20 shadow-lg bg-gradient-to-br from-maroon/5 to-saffron/5">
            <CardContent className="p-6">
              <p className="text-center text-gray-700 font-medium">
                By using My Pooja Seva's website and services, you acknowledge that you have read and understood this Privacy Policy and consent to the collection, use, and disclosure of your information as described herein.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
