# Razorpay Payment Gateway Setup Guide

## Prerequisites

1. Razorpay account (Sign up at https://razorpay.com)
2. Google Apps Script access
3. Firebase project with Firestore enabled

## Step 1: Get Razorpay API Keys

1. Log in to your Razorpay Dashboard: https://dashboard.razorpay.com
2. Go to **Settings** → **API Keys**
3. Generate **Test Keys** (for testing) or **Live Keys** (for production)
4. Copy your **Key ID** and **Key Secret**
   - Key ID: `rzp_test_xxxxx` (test) or `rzp_live_xxxxx` (live)
   - Key Secret: `xxxxx` (keep this secret!)

## Step 2: Configure Google Apps Script

1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1zB5THDGOa4qDo1u5BcDA-fU09iuPUjEtd91n2IX89_c/edit
2. Go to **Extensions** → **Apps Script**
3. Open the `google-apps-script.gs` file
4. Go to **Project Settings** (gear icon) → **Script Properties**
5. Add the following properties:
   - **Property**: `RAZORPAY_KEY_ID` → **Value**: Your Razorpay Key ID
   - **Property**: `RAZORPAY_KEY_SECRET` → **Value**: Your Razorpay Key Secret
6. Click **Save**

## Step 3: Update Google Apps Script Code

1. In Apps Script, replace the code with the updated `google-apps-script.gs` file
2. Click **Save** (floppy disk icon)
3. Click **Deploy** → **New deployment**
4. Select type: **Web app**
5. Configure:
   - Description: "Razorpay Payment Handler"
   - Execute as: **Me (your email)**
   - Who has access: **Anyone** (allows your website to call it)
6. Click **Deploy**
7. Copy the **Web app URL** - you'll need this in the next step

## Step 4: Configure Environment Variables

1. Create a `.env` file in your project root (or use your existing environment setup)
2. Add the following variables:

```env
VITE_RAZORPAY_KEY_ID=rzp_test_xxxxx
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
```

3. Replace:
   - `rzp_test_xxxxx` with your actual Razorpay Key ID
   - `https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec` with your Google Apps Script Web App URL

## Step 5: Enable Firebase Firestore

1. Go to Firebase Console: https://console.firebase.google.com
2. Select your project: `pooja-booking-e363a`
3. Go to **Firestore Database** → **Create database**
4. Start in **test mode** (for development) or **production mode** (for production)
5. Choose a location (e.g., `asia-south1` for India)
6. Click **Enable**

## Step 6: Set Up Firestore Security Rules

1. In Firestore, go to **Rules** tab
2. Update rules to allow authenticated users to write bookings:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow authenticated users to create bookings
    match /bookings/{bookingId} {
      allow create: if request.auth != null;
      allow read: if request.auth != null || resource.data.phone == request.auth.token.phone_number;
      allow update: if false; // Only create, no updates
      allow delete: if false; // No deletes
    }
  }
}
```

3. Click **Publish**

## Step 7: Test the Integration

1. Start your development server: `npm run dev`
2. Navigate to a booking page
3. Fill in the form and verify OTP
4. Select a payment option (30% Advance or 100% Full)
5. Click "Pay & Book"
6. Use Razorpay test cards:
   - **Card Number**: `4111 1111 1111 1111`
   - **CVV**: Any 3 digits (e.g., `123`)
   - **Expiry**: Any future date (e.g., `12/25`)
   - **Name**: Any name

## Test Cards

### Successful Payment

- Card: `4111 1111 1111 1111`
- CVV: Any 3 digits
- Expiry: Any future date

### Failed Payment

- Card: `4000 0000 0000 0002`
- CVV: Any 3 digits
- Expiry: Any future date

## Troubleshooting

### Payment Not Working

1. Check browser console for errors
2. Verify Razorpay Key ID is correct in `.env`
3. Verify Google Apps Script URL is correct
4. Check Google Apps Script execution logs (View → Executions)

### Order Creation Fails

1. Verify Razorpay credentials in Script Properties
2. Check Google Apps Script logs for errors
3. Ensure Web App is deployed with "Anyone" access

### Booking Not Stored

1. Check Firebase Firestore rules
2. Verify Firestore is enabled
3. Check browser console for Firestore errors
4. Verify user is authenticated (OTP verified)

## Production Checklist

- [ ] Switch to Razorpay Live Keys
- [ ] Update environment variables with live keys
- [ ] Update Firestore security rules for production
- [ ] Test with real payment (small amount)
- [ ] Set up Razorpay webhooks (optional, for additional verification)
- [ ] Configure email notifications for bookings
- [ ] Set up error monitoring

## Security Notes

1. **Never commit** `.env` file to git
2. **Never expose** Razorpay Key Secret in frontend code
3. Always verify payments on the backend (Google Apps Script)
4. Use HTTPS in production
5. Regularly rotate API keys

## Support

- Razorpay Documentation: https://razorpay.com/docs/
- Razorpay Support: support@razorpay.com
- Firebase Documentation: https://firebase.google.com/docs
