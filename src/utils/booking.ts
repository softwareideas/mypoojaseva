// Booking utility functions

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
  paymentType: "advance" | "full" | "cod";
  status: "pending" | "confirmed" | "cancelled";
  createdAt?: string;
}

export const storeBooking = async (
  bookingData: Omit<BookingData, "createdAt">
): Promise<string> => {
  try {
    const booking = {
      ...bookingData,
      createdAt: new Date().toISOString(),
    };

    // Store in localStorage for now
    const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");
    const bookingId = `BOOK-${Date.now()}`;
    bookings.push({ id: bookingId, ...booking });
    localStorage.setItem("bookings", JSON.stringify(bookings));

    // TODO: Send to backend API for email notifications
    // You can implement this later to send booking details to your backend
    console.log("Booking stored:", booking);

    return bookingId;
  } catch (error) {
    console.error("Error storing booking:", error);
    throw error;
  }
};
