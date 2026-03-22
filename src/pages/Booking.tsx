import React, { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import {
  ArrowLeft,
  Calendar as CalendarIcon,
  Clock,
  User,
  Phone,
  CheckCircle,
  CreditCard,
  Sparkles,
  Shield,
  Award,
  Banknote,
} from "lucide-react";
import { format } from "date-fns";
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
  const [phoneError, setPhoneError] = useState("");

  // Payment States
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    "online" | "cod" | null
  >(null);
  const [selectedPaymentOption, setSelectedPaymentOption] = useState<
    "advance" | "full" | null
  >(null);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

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

    // Validate form
    if (!name) {
      toast({
        title: "Missing Information",
        description: "Please enter your name",
        variant: "destructive",
      });
      return;
    }

    if (!phone || !validateIndianPhone(phone)) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid 10-digit Indian mobile number",
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

    if (!selectedPaymentMethod) {
      toast({
        title: "Select Payment Method",
        description: "Please select a payment method (Online Payment or Cash on Delivery)",
        variant: "destructive",
      });
      return;
    }

    if (selectedPaymentMethod === "online" && !selectedPaymentOption) {
      toast({
        title: "Select Payment Option",
        description: "Please select a payment option (30% Advance or 100% Full Payment)",
        variant: "destructive",
      });
      return;
    }

    // Handle COD booking
    if (selectedPaymentMethod === "cod") {
      setIsProcessingPayment(true);
      try {
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
          paymentId: "COD",
          orderId: `COD-${Date.now()}`,
          signature: "",
          paymentAmount: 0,
          totalAmount: totalAmount,
          paymentType: "cod" as any,
          status: "pending",
        });

        toast({
          title: "Booking Confirmed!",
          description: "Your booking has been confirmed. Payment will be collected on service day. We will contact you soon.",
        });

        setTimeout(() => {
          navigate("/");
        }, 2000);
      } catch (error) {
        console.error("Error storing booking:", error);
        toast({
          title: "Booking Error",
          description: "Failed to confirm your booking. Please try again or contact support.",
          variant: "destructive",
        });
      } finally {
        setIsProcessingPayment(false);
      }
      return;
    }

    // Handle Online Payment
    setIsProcessingPayment(true);

    try {
      const razorpayKeyId = import.meta.env.VITE_RAZORPAY_KEY_ID;

      if (!razorpayKeyId) {
        toast({
          title: "Configuration Error",
          description: "Razorpay Key ID is not configured. Please contact support.",
          variant: "destructive",
        });
        setIsProcessingPayment(false);
        return;
      }

      const razorpayOptions: any = {
        key: razorpayKeyId,
        amount: formatAmount(paymentAmount),
        currency: "INR",
        name: "My Pooja Seva",
        description: `Payment for ${poojaData?.name || "Pooja Service"}`,
        prefill: {
          name: name,
          email: email || "",
          contact: `+91${phone}`,
        },
        theme: {
          color: "#FF8C00",
        },
        handler: async (response: any) => {
          try {
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
              description: "Your booking has been confirmed. We will contact you soon.",
            });

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
    } catch (error: any) {
      console.error("Error initiating payment:", error);
      toast({
        title: "Payment Error",
        description: error.message || "Failed to initiate payment. Please try again.",
        variant: "destructive",
      });
      setIsProcessingPayment(false);
    }
  };

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
                        Select Date & Time <span className="text-red-500">*</span>
                      </Label>

                      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                        {/* Date Selection */}
                        <div className="lg:col-span-3 space-y-3">
                          <div className="flex items-center gap-2 text-gray-700 mb-3">
                            <CalendarIcon className="h-5 w-5 text-saffron" />
                            <span className="font-medium text-lg">Choose Date</span>
                          </div>
                          <div className="border-2 border-saffron/20 rounded-lg p-3 sm:p-6 bg-gradient-to-br from-white to-softSaffron/5 shadow-sm flex items-center justify-center overflow-x-auto">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              disabled={(date) => date < new Date()}
                              className="rounded-md"
                              classNames={{
                                months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                                month: "space-y-3 sm:space-y-4",
                                caption: "flex justify-center pt-1 relative items-center mb-3 sm:mb-4",
                                caption_label: "text-sm sm:text-base font-semibold text-maroon",
                                nav: "space-x-1 flex items-center",
                                nav_button: "h-7 w-7 md:h-8 md:w-8 bg-transparent p-0 opacity-50 hover:opacity-100 hover:bg-saffron/10 rounded",
                                table: "w-full border-collapse space-y-1",
                                head_row: "flex mb-1 sm:mb-2",
                                head_cell: "text-gray-600 rounded-md w-9 md:w-12 font-semibold text-xs md:text-sm",
                                row: "flex w-full mt-1 sm:mt-2",
                                cell: "h-9 w-9 md:h-12 md:w-12 text-center text-xs md:text-sm p-0 relative rounded-md",
                                day: "h-9 w-9 md:h-12 md:w-12 p-0 font-medium aria-selected:opacity-100 rounded-md flex items-center justify-center text-xs md:text-sm",
                                day_selected: "bg-saffron text-white hover:bg-saffron hover:text-white focus:bg-saffron focus:text-white font-bold shadow-md",
                                day_today: "bg-saffron/20 text-maroon font-bold border-2 border-saffron",
                                day_outside: "text-gray-400 opacity-50",
                                day_disabled: "text-gray-300",
                                day_hidden: "invisible",
                              }}
                            />
                          </div>
                        </div>

                        {/* Time Slot Selection */}
                        <div className="lg:col-span-2 space-y-3">
                          <div className="flex items-center gap-2 text-gray-700 mb-3">
                            <Clock className="h-5 w-5 text-saffron" />
                            <span className="font-medium text-lg">Choose Time</span>
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
                                onClick={() => setSelectedSlot(selectedSlot === slot ? "" : slot)}
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
                                      selectedSlot === slot ? "text-saffron" : "text-gray-400"
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
                        <h3 className="font-medium text-maroon mb-2">{poojaData.name}</h3>
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
                      <h3 className="text-lg font-medium text-gray-900">Contact Information</h3>

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
                        <div>
                          <Label htmlFor="phone">
                            Phone Number <span className="text-red-500">*</span>
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={phone}
                            onChange={(e) => handlePhoneChange(e.target.value)}
                            placeholder="9876543210"
                            pattern="[6-9]\d{9}"
                            maxLength={10}
                            required
                          />
                          {phoneError && (
                            <p className="text-red-500 text-sm mt-1">{phoneError}</p>
                          )}
                        </div>
                      </div>

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

                    {/* Payment Method Selection */}
                    <div className="bg-gradient-to-br from-saffron/5 to-amber-50/50 border-2 border-saffron/20 rounded-lg p-6 space-y-4">
                      <div className="flex items-center gap-2 mb-2">
                        <CreditCard className="h-5 w-5 text-saffron" />
                        <Label className="text-lg font-semibold text-gray-900">
                          Select Payment Method <span className="text-red-500">*</span>
                        </Label>
                      </div>
                      <RadioGroup
                        value={selectedPaymentMethod || ""}
                        onValueChange={(value) => {
                          setSelectedPaymentMethod(value as "online" | "cod");
                          if (value === "cod") {
                            setSelectedPaymentOption(null);
                          }
                        }}
                      >
                        <div className="space-y-3">
                          {/* Online Payment */}
                          <label
                            htmlFor="online"
                            className={`flex items-center justify-between border-2 rounded-lg p-4 cursor-pointer transition-all ${
                              selectedPaymentMethod === "online"
                                ? "border-saffron bg-saffron/10"
                                : "border-gray-200 hover:border-saffron/50"
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <RadioGroupItem value="online" id="online" />
                              <div className="flex flex-col">
                                <span className="text-base font-medium flex items-center gap-2">
                                  <CreditCard className="h-4 w-4" />
                                  Online Payment
                                </span>
                                <span className="text-sm text-gray-600">
                                  Pay securely via Razorpay
                                </span>
                              </div>
                            </div>
                          </label>

                          {/* Cash on Delivery */}
                          <label
                            htmlFor="cod"
                            className={`flex items-center justify-between border-2 rounded-lg p-4 cursor-pointer transition-all ${
                              selectedPaymentMethod === "cod"
                                ? "border-saffron bg-saffron/10"
                                : "border-gray-200 hover:border-saffron/50"
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <RadioGroupItem value="cod" id="cod" />
                              <div className="flex flex-col">
                                <span className="text-base font-medium flex items-center gap-2">
                                  <Banknote className="h-4 w-4" />
                                  Cash on Delivery (COD)
                                </span>
                                <span className="text-sm text-gray-600">
                                  Pay on service day
                                </span>
                              </div>
                            </div>
                          </label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Payment Options - Only for Online Payment */}
                    {selectedPaymentMethod === "online" && (
                      <div className="bg-white border-2 border-gray-200 rounded-lg p-6 space-y-4">
                        <div className="flex items-center gap-2 mb-2">
                          <CreditCard className="h-5 w-5 text-saffron" />
                          <Label className="text-lg font-semibold text-gray-900">
                            Select Payment Option <span className="text-red-500">*</span>
                          </Label>
                        </div>
                        <RadioGroup
                          value={selectedPaymentOption || ""}
                          onValueChange={(value) =>
                            setSelectedPaymentOption(value as "advance" | "full")
                          }
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
                                  <span className="text-base font-medium">30% Advance Payment</span>
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
                                  <span className="text-base font-medium">100% Full Payment</span>
                                  <span className="text-sm text-gray-600">Complete payment now</span>
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
                    )}

                    {/* Submit Button */}
                    <div className="flex gap-4">
                      <Button
                        type="submit"
                        className="flex-1 bg-gradient-to-r from-saffron to-saffron text-white"
                        disabled={isProcessingPayment}
                      >
                        {isProcessingPayment
                          ? "Processing..."
                          : selectedPaymentMethod === "cod"
                          ? "Confirm Booking (COD)"
                          : selectedPaymentOption
                          ? `Pay ₹${paymentAmount.toFixed(0)} & Book`
                          : "Select Payment Option"}
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
                          <h4 className="font-bold text-lg text-maroon mb-3">{poojaData.name}</h4>
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

                        {selectedPaymentMethod && (
                          <div className="bg-gradient-to-br from-maroon/5 to-saffron/5 rounded-xl p-4 border-2 border-maroon/20">
                            <div className="space-y-3">
                              <div className="flex justify-between items-center text-sm">
                                <span className="text-gray-600">Payment Method:</span>
                                <span className="font-semibold text-maroon">
                                  {selectedPaymentMethod === "cod" ? "Cash on Delivery" : "Online Payment"}
                                </span>
                              </div>
                              {selectedPaymentMethod === "online" && selectedPaymentOption && (
                                <>
                                  <div className="flex justify-between items-center text-sm">
                                    <span className="text-gray-600">Payment Option:</span>
                                    <span className="font-semibold text-maroon">
                                      {selectedPaymentOption === "advance" ? "30% Advance" : "100% Full Payment"}
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
                                </>
                              )}
                              {selectedPaymentMethod === "cod" && (
                                <div className="flex justify-between items-center pt-3 border-t border-maroon/20">
                                  <span className="text-lg font-bold text-gray-900">Total Amount</span>
                                  <span className="text-2xl font-extrabold bg-gradient-to-r from-maroon to-saffron bg-clip-text text-transparent">
                                    ₹{totalAmount.toFixed(0)}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </>
                    )}

                    {(date || selectedSlot) && (
                      <div className="bg-white rounded-xl p-4 border-2 border-gray-200">
                        <h5 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wider">
                          Selected Schedule
                        </h5>
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
                    <h5 className="font-semibold text-gray-900 text-sm uppercase tracking-wider mb-4">
                      Why Book With Us
                    </h5>
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
