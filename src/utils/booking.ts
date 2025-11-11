// Booking utility functions for Firebase Firestore

import { db } from "@/firebase/config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export interface BookingData {
  poojaName: string;
  poojaId?: string;
  date: string;
  timeSlot: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  specialRequest?: string;
  paymentId: string;
  orderId: string;
  signature: string;
  paymentAmount: number;
  totalAmount: number;
  paymentType: "advance" | "full";
  status: "pending" | "confirmed" | "cancelled";
  createdAt: any;
}

export const storeBooking = async (
  bookingData: Omit<BookingData, "createdAt">
): Promise<string> => {
  try {
    const bookingRef = await addDoc(collection(db, "bookings"), {
      ...bookingData,
      createdAt: serverTimestamp(),
    });
    return bookingRef.id;
  } catch (error) {
    console.error("Error storing booking:", error);
    throw error;
  }
};
