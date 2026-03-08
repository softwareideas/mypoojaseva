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
  CreditCard,
  Sparkles,
  ChevronRight,
  Shield,
  Award,
} from "lucide-react";
import { format } from "date-fns";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  PhoneAuthProvider,
  signInWithCredential,
} from "firebase/auth";
import { auth } from "@/firebase/config";
import {
  openRazorpayCheckout,
  formatAmount,
  calculateAdvanceAmount,
} from "@/lib/razorpay";
import { storeBooking } from "@/utils/booking";

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
  const [currentStep, setCurrentStep] = useState(1);

  // OTP Verification States
  const [phoneError, setPhoneError] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [otpError, setOtpError] = useState("");

  // Payment States
  const [selectedPaymentOption, setSelectedPaymentOption] = useState<
    "advance" | "full" | null
  >(null);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

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

  // Calculate payment amounts
  const totalAmount = poojaData
    ? parseFloat(poojaData.price.toString().replace(/[^0-9.]/g, ""))
    : 0;
  const advanceAmount = calculateAdvanceAmount(totalAmount, 30);
  const paymentAmount =
    selectedPaymentOption === "advance" ? advanceAmount : totalAmount;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form with specific error messages
    if (!name) {
      toast({
        title: "Missing Information",
        description: "Please enter your name",
        variant: "destructive",
      });
      return;
    }

    if (!date) {
      toast({
        title: "Missing Information",
        description: "Please select a date for the pooja",
        variant: "destructive",
      });
      return;
    }

    if (!selectedSlot) {
      toast({
        title: "Missing Information",
        description: "Please select a time slot",
        variant: "destructive",
      });
      return;
    }

    if (!address) {
      toast({
        title: "Missing Information",
        description: "Please enter the address where pooja will be performed",
        variant: "destructive",
      });
      return;
    }

    if (!selectedPaymentOption) {
      toast({
        title: "Select Payment Option",
        description:
          "Please select a payment option (30% Advance or 100% Full Payment)",
        variant: "destructive",
      });
      return;
    }

    setIsProcessingPayment(true);

    try {
      const razorpayKeyId = import.meta.env.VITE_RAZORPAY_KEY_ID;

      if (!razorpayKeyId) {
        toast({
          title: "Configuration Error",
          description:
            "Razorpay Key ID is not configured. Please contact support.",
          variant: "destructive",
        });
        setIsProcessingPayment(false);
        return;
      }

      // Create Razorpay order via backend API (production)
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

      if (!apiBaseUrl) {
        // Fallback: Use direct Razorpay checkout without order_id
        // Razorpay will create the order automatically
        // Note: This is for testing only. In production, always use backend to create orders.

        const razorpayOptions: any = {
          key: razorpayKeyId,
          amount: formatAmount(paymentAmount),
          currency: "INR",
          name: "My Pooja Seva",
          description: `Payment for ${poojaData?.name || "Pooja Service"}`,
          // Don't include order_id - Razorpay will create order automatically
          prefill: {
            name: name,
            email: email || "",
            contact: `+91${phone}`,
          },
          theme: {
            color: "#FF8C00", // Gold color
          },
          handler: async (response: any) => {
            // Payment successful
            try {
              // Store booking in Firebase Firestore
              await storeBooking({
                poojaName: poojaData?.name || "Pooja Service",
                poojaId: poojaData?.id || id || "",
                date: format(date!, "yyyy-MM-dd"),
                timeSlot: selectedSlot,
                name: name,
                email: email || "",
                phone: phone,
                address: address,
                specialRequest: specialRequest || "",
                paymentId: response.razorpay_payment_id,
                orderId: response.razorpay_order_id || "",
                signature: response.razorpay_signature,
                paymentAmount: paymentAmount,
                totalAmount: totalAmount,
                paymentType: selectedPaymentOption,
                status: "confirmed",
              });

              toast({
                title: "Payment Successful!",
                description:
                  "Your booking has been confirmed. We will contact you soon.",
              });

              // Navigate to confirmation page or home
              setTimeout(() => {
                navigate("/");
              }, 2000);
            } catch (error) {
              console.error("Error storing booking:", error);
              toast({
                title: "Payment Successful",
                description:
                  "Payment completed but there was an error saving your booking. Please contact support with payment ID: " +
                  response.razorpay_payment_id,
                variant: "destructive",
              });
            } finally {
              setIsProcessingPayment(false);
            }
          },
          modal: {
            ondismiss: () => {
              setIsProcessingPayment(false);
              toast({
                title: "Payment Cancelled",
                description: "You cancelled the payment. You can try again.",
              });
            },
          },
        };

        openRazorpayCheckout(razorpayOptions);
        return;
      }

      // Create order via backend
      const orderResponse = await fetch(`${apiBaseUrl}/create-order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "create_order",
          amount: formatAmount(paymentAmount),
          currency: "INR",
        }),
      });

      if (!orderResponse.ok) {
        throw new Error("Failed to create payment order");
      }

      const orderData = await orderResponse.json();

      if (orderData.error) {
        throw new Error(orderData.error);
      }

      // Initialize Razorpay checkout with order
      openRazorpayCheckout({
        key: razorpayKeyId,
        amount: formatAmount(paymentAmount),
        currency: "INR",
        name: "My Pooja Seva",
        description: `Payment for ${poojaData?.name || "Pooja Service"}`,
        order_id: orderData.orderId,
        prefill: {
          name: name,
          email: email || "",
          contact: `+91${phone}`,
        },
        theme: {
          color: "#FF8C00", // Gold color
        },
        handler: async (response: any) => {
          // Payment successful - verify with backend
          try {
            const verifyResponse = await fetch(`${apiBaseUrl}/verify-payment`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                action: "verify_payment",
                paymentId: response.razorpay_payment_id,
                orderId: response.razorpay_order_id,
                signature: response.razorpay_signature,
              }),
            });

            const verifyData = await verifyResponse.json();

            if (verifyData.verified) {
              // Store booking in Firebase Firestore
              await storeBooking({
                poojaName: poojaData?.name || "Pooja Service",
                poojaId: poojaData?.id || id || "",
                date: format(date!, "yyyy-MM-dd"),
                timeSlot: selectedSlot,
                name: name,
                email: email || "",
                phone: phone,
                address: address,
                specialRequest: specialRequest || "",
                paymentId: response.razorpay_payment_id,
                orderId: response.razorpay_order_id,
                signature: response.razorpay_signature,
                paymentAmount: paymentAmount,
                totalAmount: totalAmount,
                paymentType: selectedPaymentOption,
                status: "confirmed",
              });

              toast({
                title: "Payment Successful!",
                description:
                  "Your booking has been confirmed. We will contact you soon.",
              });

              setTimeout(() => {
                navigate("/");
              }, 2000);
            } else {
              throw new Error("Payment verification failed");
            }
          } catch (error) {
            console.error("Error verifying payment:", error);
            toast({
              title: "Payment Verification Error",
              description:
                "Payment completed but verification failed. Please contact support with payment ID: " +
                response.razorpay_payment_id,
              variant: "destructive",
            });
          } finally {
            setIsProcessingPayment(false);
          }
        },
        modal: {
          ondismiss: () => {
            setIsProcessingPayment(false);
            toast({
              title: "Payment Cancelled",
              description: "You cancelled the payment. You can try again.",
            });
          },
        },
      });
    } catch (error: any) {
      console.error("Error initiating payment:", error);
      toast({
        title: "Payment Error",
        description:
          error.message || "Failed to initiate payment. Please try again.",
        variant: "destructive",
      });
      setIsProcessingPayment(false);
    }
  };

  // Calculate step completion
  const steps = [
    { number: 1, title: "Date & Time", completed: !!date && !!selectedSlot },
    { number: 2, title: "Contact Info", completed: !!name && !!phone && !!address && isPhoneVerified },
    { number: 3, title: "Payment", completed: !!selectedPaymentOption },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-amber-50/20 to-rose-50/10">
      <Navbar />

      <main className="flex-grow">
        {/* Enhanced Header */}
        <div className="bg-gradient-to-br from-maroon/5 via-saffron/5 to-amber-50/30 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,#FFD8A8,transparent_50%),radial-gradient(circle_at_bottom_left,#FF9933,transparent_50%)]"></div>
          <div className="max-w-7xl mx-auto relative z-10">
            <Button
              variant="ghost"
              onClick={() => navigate(-1)}
              className="mb-6 text-maroon hover:text-maroon/80 hover:bg-maroon/10 rounded-lg transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Details
            </Button>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-maroon to-saffron flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-maroon to-saffron bg-clip-text text-transparent">
                  Complete Your Booking
                </h1>
                <p className="text-lg text-gray-600 mt-1">
                  Just a few steps to secure your divine ceremony
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left Column - Booking Form */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="border-none shadow-2xl bg-gradient-to-br from-white to-amber-50/30 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-saffron/10 rounded-full blur-3xl" />
                <CardHeader className="relative">
                  <CardTitle className="text-2xl font-bold text-maroon flex items-center gap-2">
                    <CalendarIcon className="h-6 w-6 text-saffron" />
                    Booking Details
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-2">Fill in the required information to complete your booking</p>
                </CardHeader>
                <CardContent className="relative">
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
                            <CalendarIcon className="h-5 w-5 text-saffron" />
                            <span className="font-medium text-lg">
                              Choose Date
                            </span>
                          </div>
                          <div className="border-2 border-saffron/20 rounded-lg p-3 sm:p-6 bg-gradient-to-br from-white to-softSaffron/5 shadow-sm flex items-center justify-center overflow-x-auto">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              disabled={(date) => date < new Date()}
                              className="rounded-md"
                              classNames={{
                                months:
                                  "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                                month: "space-y-3 sm:space-y-4",
                                caption:
                                  "flex justify-center pt-1 relative items-center mb-3 sm:mb-4",
                                caption_label:
                                  "text-sm sm:text-base font-semibold text-maroon",
                                nav: "space-x-1 flex items-center",
                                nav_button:
                                  "h-7 w-7 md:h-8 md:w-8 bg-transparent p-0 opacity-50 hover:opacity-100 hover:bg-saffron/10 rounded",
                                table: "w-full border-collapse space-y-1",
                                head_row: "flex mb-1 sm:mb-2",
                                head_cell:
                                  "text-gray-600 rounded-md w-9 md:w-12 font-semibold text-xs md:text-sm",
                                row: "flex w-full mt-1 sm:mt-2",
                                cell: "h-9 w-9 md:h-12 md:w-12 text-center text-xs md:text-sm p-0 relative rounded-md [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-saffron/10 [&:has([aria-selected])]:bg-saffron/20 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                                day: "h-9 w-9 md:h-12 md:w-12 p-0 font-medium aria-selected:opacity-100 rounded-md flex items-center justify-center text-xs md:text-sm",
                                day_selected:
                                  "bg-saffron text-white hover:bg-saffron hover:text-white focus:bg-saffron focus:text-white font-bold shadow-md",
                                day_today:
                                  "bg-saffron/20 text-maroon font-bold border-2 border-saffron",
                                day_outside: "text-gray-400 opacity-50",
                                day_disabled: "text-gray-300",
                                day_range_middle:
                                  "aria-selected:bg-saffron/10 aria-selected:text-gray-900",
                                day_hidden: "invisible",
                              }}
                            />
                          </div>
                        </div>

                        {/* Time Slot Selection */}
                        <div className="lg:col-span-2 space-y-3">
                          <div className="flex items-center gap-2 text-gray-700 mb-3">
                            <Clock className="h-5 w-5 text-saffron" />
                            <span className="font-medium text-lg">
                              Choose Time
                            </span>
                          </div>
                          <div className="space-y-2 max-h-[400px] overflow-y-auto pr-2">
                            {timeSlots.map((slot) => (
                              <div
                                key={slot}
                                className={`flex items-center space-x-3 border-2 rounded-lg p-4 hover:border-saffron/50 hover:bg-saffron/5 transition-all cursor-pointer ${
                                  selectedSlot === slot
                                    ? "border-saffron bg-saffron/10"
                                    : "border-gray-200"
                                }`}
                                onClick={() => {
                                  // Toggle selection - if already selected, deselect
                                  setSelectedSlot(
                                    selectedSlot === slot ? "" : slot
                                  );
                                }}
                              >
                                <div
                                  className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                                    selectedSlot === slot
                                      ? "border-saffron bg-saffron"
                                      : "border-gray-300"
                                  }`}
                                >
                                  {selectedSlot === slot && (
                                    <div className="w-2 h-2 rounded-full bg-white"></div>
                                  )}
                                </div>
                                <Label className="text-sm cursor-pointer font-medium flex items-center flex-1">
                                  <Clock
                                    className={`h-4 w-4 mr-2 ${
                                      selectedSlot === slot
                                        ? "text-saffron"
                                        : "text-gray-400"
                                    }`}
                                  />
                                  {slot}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Pooja Information */}
                    {poojaData && (
                      <div className="bg-saffron/5 rounded-lg p-4 border border-saffron/20">
                        <h3 className="font-medium text-maroon mb-2">
                          {poojaData.name}
                        </h3>
                        <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                          <p className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-saffron" />
                            Duration: {poojaData.duration}
                          </p>
                          <p className="flex items-center">
                            <User className="h-4 w-4 mr-2 text-saffron" />
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
                                className="bg-gradient-to-r from-saffron to-saffron text-white whitespace-nowrap"
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
                                  className="bg-gradient-to-r from-saffron to-saffron text-white whitespace-nowrap"
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

                    {/* Payment Options - Always visible, disabled until OTP verified */}
                    <div className="bg-saffron/5 border-2 border-saffron/20 rounded-lg p-6 space-y-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <CreditCard className="h-5 w-5 text-saffron" />
                          <Label className="text-lg font-semibold text-gray-900">
                            Select Payment Option{" "}
                            <span className="text-red-500">*</span>
                          </Label>
                        </div>
                        {!isPhoneVerified && (
                          <span className="text-xs text-amber-700 bg-amber-100 px-2 py-1 rounded">
                            Verify phone to enable payment
                          </span>
                        )}
                      </div>
                      <div
                        className={
                          isPhoneVerified
                            ? ""
                            : "opacity-50 pointer-events-none"
                        }
                      >
                        <RadioGroup
                          value={selectedPaymentOption || ""}
                          onValueChange={(value) => {
                            if (!isPhoneVerified) return;
                            setSelectedPaymentOption(
                              value as "advance" | "full"
                            );
                          }}
                        >
                          <div className="space-y-3">
                            {/* 30% Advance Payment */}
                            <label
                              htmlFor="advance"
                              className={`flex items-center justify-between border-2 rounded-lg p-4 cursor-pointer transition-all ${
                                selectedPaymentOption === "advance"
                                  ? "border-saffron bg-saffron/10"
                                  : "border-gray-200 hover:border-saffron/50"
                              }`}
                            >
                              <div className="flex items-center space-x-3 flex-1">
                                <RadioGroupItem value="advance" id="advance" />
                                <div className="flex flex-col flex-1">
                                  <span className="text-base font-medium">
                                    30% Advance Payment
                                  </span>
                                  <span className="text-sm text-gray-600">
                                    Pay now, rest on service day
                                  </span>
                                </div>
                              </div>
                              <div className="text-right">
                                <span className="text-lg font-bold text-maroon">
                                  ₹{advanceAmount.toFixed(0)}
                                </span>
                              </div>
                            </label>

                            {/* 100% Full Payment */}
                            <label
                              htmlFor="full"
                              className={`flex items-center justify-between border-2 rounded-lg p-4 cursor-pointer transition-all ${
                                selectedPaymentOption === "full"
                                  ? "border-saffron bg-saffron/10"
                                  : "border-gray-200 hover:border-saffron/50"
                              }`}
                            >
                              <div className="flex items-center space-x-3 flex-1">
                                <RadioGroupItem value="full" id="full" />
                                <div className="flex flex-col flex-1">
                                  <span className="text-base font-medium">
                                    100% Full Payment
                                  </span>
                                  <span className="text-sm text-gray-600">
                                    Complete payment now
                                  </span>
                                </div>
                              </div>
                              <div className="text-right">
                                <span className="text-lg font-bold text-maroon">
                                  ₹{totalAmount.toFixed(0)}
                                </span>
                              </div>
                            </label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex gap-4">
                      <Button
                        type="submit"
                        className="flex-1 bg-gradient-to-r from-saffron to-saffron text-white"
                        disabled={
                          !isPhoneVerified ||
                          !selectedPaymentOption ||
                          isProcessingPayment
                        }
                      >
                        {isProcessingPayment
                          ? "Processing Payment..."
                          : isPhoneVerified && selectedPaymentOption
                          ? `Pay ₹${paymentAmount.toFixed(0)} & Book`
                          : isPhoneVerified
                          ? "Select Payment Option"
                          : "Verify Phone to Continue"}
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => navigate(-1)}
                        disabled={isProcessingPayment}
                      >
                        Cancel
                      </Button>
                    </div>
                    {!isPhoneVerified && (
                      <p className="text-sm text-gray-600 text-center">
                        Please verify your phone number before submitting
                      </p>
                    )}
                    {isPhoneVerified && !selectedPaymentOption && (
                      <p className="text-sm text-amber-600 text-center">
                        Please select a payment option to continue
                      </p>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Booking Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <Card className="border-none shadow-2xl bg-gradient-to-br from-white to-amber-50/50 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-saffron/10 rounded-full blur-3xl" />
                  <CardHeader className="relative">
                    <CardTitle className="text-2xl font-bold text-maroon flex items-center gap-2">
                      <Sparkles className="h-6 w-6 text-saffron" />
                      Booking Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 relative">
                  {poojaData && (
                    <>
                      <div className="bg-white rounded-xl p-4 border-2 border-maroon/10">
                        <h4 className="font-bold text-lg text-maroon mb-3">
                          {poojaData.name}
                        </h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600 flex items-center gap-2">
                              <Clock className="h-4 w-4 text-saffron" />
                              Duration
                            </span>
                            <span className="font-semibold text-gray-900">{poojaData.duration}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-gray-600 flex items-center gap-2">
                              <User className="h-4 w-4 text-saffron" />
                              Pandits
                            </span>
                            <span className="font-semibold text-gray-900">{poojaData.pandits}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm pt-2 border-t border-gray-200">
                            <span className="text-gray-600 font-medium">Base Price</span>
                            <span className="font-bold text-lg text-maroon">₹{poojaData.price}</span>
                          </div>
                        </div>
                      </div>
                      {isPhoneVerified && selectedPaymentOption && (
                        <div className="bg-gradient-to-br from-maroon/5 to-saffron/5 rounded-xl p-4 border-2 border-maroon/20">
                          <div className="space-y-3">
                            <div className="flex justify-between items-center text-sm">
                              <span className="text-gray-600">Payment Option:</span>
                              <span className="font-semibold text-maroon">
                                {selectedPaymentOption === "advance"
                                  ? "30% Advance"
                                  : "100% Full Payment"}
                              </span>
                            </div>
                            <div className="flex justify-between items-center pt-3 border-t border-maroon/20">
                              <span className="text-lg font-bold text-gray-900">Amount to Pay</span>
                              <span className="text-2xl font-extrabold bg-gradient-to-r from-maroon to-saffron bg-clip-text text-transparent">
                                ₹{paymentAmount.toFixed(0)}
                              </span>
                            </div>
                            {selectedPaymentOption === "advance" && (
                              <p className="text-xs text-gray-600 pt-2 border-t border-maroon/10">
                                Remaining ₹{(totalAmount - advanceAmount).toFixed(0)} to be paid on service day
                              </p>
                            )}
                          </div>
                        </div>
                      )}
                    </>
                  )}

                  {(date || selectedSlot) && (
                    <div className="bg-white rounded-xl p-4 border-2 border-gray-200">
                      <h5 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wider">Selected Schedule</h5>
                      <div className="space-y-3">
                        {date && (
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-maroon/10 to-saffron/10 flex items-center justify-center flex-shrink-0">
                              <CalendarIcon className="h-5 w-5 text-maroon" />
                            </div>
                            <div>
                              <p className="text-xs text-gray-500">Date</p>
                              <p className="font-semibold text-gray-900">{format(date, "PPP")}</p>
                            </div>
                          </div>
                        )}
                        {selectedSlot && (
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-saffron/10 to-maroon/10 flex items-center justify-center flex-shrink-0">
                              <Clock className="h-5 w-5 text-saffron" />
                            </div>
                            <div>
                              <p className="text-xs text-gray-500">Time Slot</p>
                              <p className="font-semibold text-gray-900">{selectedSlot}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
              
              {/* Trust Badges */}
              <Card className="border-none shadow-lg bg-white">
                <CardContent className="p-6 space-y-4">
                  <h5 className="font-semibold text-gray-900 text-sm uppercase tracking-wider mb-4">Why Book With Us</h5>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <Shield className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-sm">Secure Payment</p>
                        <p className="text-xs text-gray-600">100% safe & encrypted</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                        <Award className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-sm">Verified Pandits</p>
                        <p className="text-xs text-gray-600">Experienced & authentic</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-sm">Easy Cancellation</p>
                        <p className="text-xs text-gray-600">Free up to 24 hours</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Booking;
