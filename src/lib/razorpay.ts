// Razorpay utility functions

declare global {
  interface Window {
    Razorpay: any;
  }
}

export interface RazorpayOptions {
  key: string;
  amount: number; // Amount in paise (smallest currency unit)
  currency: string;
  name: string;
  description: string;
  order_id?: string; // Optional - Razorpay will create order if not provided
  handler: (response: any) => void;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  theme: {
    color: string;
  };
  modal: {
    ondismiss: () => void;
  };
}

export const initializeRazorpay = (): boolean => {
  if (typeof window !== "undefined" && window.Razorpay) {
    return true;
  }
  return false;
};

export const openRazorpayCheckout = (options: RazorpayOptions): void => {
  if (!initializeRazorpay()) {
    throw new Error("Razorpay SDK not loaded. Please refresh the page.");
  }

  const razorpay = new window.Razorpay(options);
  razorpay.open();
};

export const formatAmount = (amount: number): number => {
  // Convert rupees to paise (multiply by 100)
  return Math.round(amount * 100);
};

export const calculateAdvanceAmount = (
  totalAmount: number,
  percentage: number = 30
): number => {
  return Math.round((totalAmount * percentage) / 100);
};
