# Firebase Phone Authentication Setup

This guide will help you set up Firebase Phone Authentication for OTP verification in the booking flow.

## Prerequisites

- A Firebase project (already created: `pooja-booking-e363a`)
- Firebase configuration credentials (already configured in `src/firebase/config.ts`)

## Steps to Enable Phone Authentication

### 1. Enable Phone Authentication in Firebase Console

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `pooja-booking-e363a`
3. Navigate to **Authentication** > **Sign-in method**
4. Click on **Phone** provider
5. Enable the toggle switch
6. Click **Save**

### 2. Set up reCAPTCHA

Firebase uses reCAPTCHA for phone authentication. The app uses an invisible reCAPTCHA verifier.

**For Development:**

- reCAPTCHA is automatically handled by Firebase
- No additional setup required

**For Production:**

1. In Firebase Console, go to **Authentication** > **Settings** > **Authorized domains**
2. Add your production domain(s):
   - `yourdomain.com`
   - `www.yourdomain.com`
3. The `localhost` domain is already authorized for development

### 3. Set up billing (required for production)

Firebase Phone Authentication has free tier limits:

- **Free tier**: 10 verifications per month per phone number
- **Blaze plan**: Pay-as-you-go pricing

To use beyond the free tier:

1. Go to Firebase Console
2. Navigate to **Usage and billing**
3. Upgrade to the **Blaze plan**
4. Phone verification costs are based on country (India: ~$0.01 per verification)

### 4. Test Phone Numbers (Development Only)

For testing without sending real SMS:

1. Go to **Authentication** > **Sign-in method** > **Phone**
2. Scroll to **Test phone numbers**
3. Add test phone numbers:
   - Format: `+91XXXXXXXXXX`
   - Example: `+919876543210`
   - OTP will be: `123456` (for all test numbers)

**Important**: Test phone numbers only work in test mode. Switch off test mode for production.

### 5. Phone Number Format

The app expects Indian phone numbers in the following format:

- **Input**: 10 digits (e.g., `9876543210`)
- **Validation**: Must start with 6, 7, 8, or 9
- **Firebase**: Automatically prepends `+91` country code

### 6. Environment Variables (Optional)

For added security, you can move Firebase config to environment variables:

Create `.env.local`:

```env
VITE_FIREBASE_API_KEY=AIzaSyAF_gmydTUkkS5IeKnhQvm5BzL5I8qUBeQ
VITE_FIREBASE_AUTH_DOMAIN=pooja-booking-e363a.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=pooja-booking-e363a
VITE_FIREBASE_STORAGE_BUCKET=pooja-booking-e363a.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=1098459676179
VITE_FIREBASE_APP_ID=1:1098459676179:web:74d14be70978709fc709e6
VITE_FIREBASE_MEASUREMENT_ID=G-HHZYK8J9BP
```

Then update `src/firebase/config.ts` to use these variables.

## How It Works

1. **User enters phone number**: Validates Indian 10-digit format
2. **Click "Send OTP"**: Firebase sends SMS with 6-digit code
3. **User enters OTP**: Validates 6-digit code
4. **Click "Verify"**: Phone number is verified via Firebase
5. **Phone verified**: "Confirm Booking" button is enabled

## Troubleshooting

### OTP Not Received

1. Check if phone number is in correct format
2. Verify Firebase project has phone authentication enabled
3. Check browser console for errors
4. Ensure billing is set up (if exceeded free tier)

### reCAPTCHA Errors

1. Clear browser cache
2. Check authorized domains in Firebase Console
3. Ensure `recaptcha-container` div exists in the DOM

### Verification Failed

1. Ensure OTP is correct (6 digits)
2. OTP expires after a few minutes
3. Use "Resend OTP" to get a new code

## Security Considerations

1. **API Key**: The Firebase API key is public by design (client-side app)
2. **Firebase Security Rules**: Set up Firestore security rules to protect user data
3. **Rate Limiting**: Firebase has built-in rate limiting
4. **Domain Restrictions**: Configure authorized domains in production

## Production Checklist

- [ ] Enable Phone Authentication in Firebase Console
- [ ] Add production domains to authorized domains
- [ ] Upgrade to Blaze plan (if needed)
- [ ] Remove test phone numbers
- [ ] Set up Firebase Security Rules
- [ ] Test with real phone numbers
- [ ] Monitor usage and billing

## Resources

- [Firebase Phone Auth Documentation](https://firebase.google.com/docs/auth/web/phone-auth)
- [Firebase Pricing](https://firebase.google.com/pricing)
- [reCAPTCHA Documentation](https://developers.google.com/recaptcha)
