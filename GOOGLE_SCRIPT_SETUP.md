# Google Sheets Integration Setup Guide

## Step 1: Create a Google Apps Script

1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1zB5THDGOa4qDo1u5BcDA-fU09iuPUjEtd91n2IX89_c/edit
2. Go to **Extensions** → **Apps Script**
3. Delete the default code and paste the code from `google-apps-script.gs` file
4. Click the **Save** icon (floppy disk)
5. Click **Deploy** → **New deployment**
6. Click the gear icon ⚙️ next to "Select type" and choose **Web app**
7. Configure:
   - Description: "Contact Form Handler"
   - Execute as: **Me (your email)**
   - Who has access: **Anyone** (this allows your website to submit data)
8. Click **Deploy**
9. Click **Authorize access** and grant the necessary permissions
10. Copy the **Web app URL** - you'll need this in the next step

## Step 2: Update Your React App

1. Open `src/pages/Contact.tsx`
2. Find the line: `const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL";`
3. Replace `YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL` with the URL you copied from Step 1
4. Save the file

## Step 3: Set Up Your Google Sheet Headers

Make sure your Google Sheet has the following column headers in Row 1:

| Name | Email | Phone | Subject | Message | Timestamp |
| ---- | ----- | ----- | ------- | ------- | --------- |

## Testing

1. Fill out the contact form on your website
2. Click "Send Message"
3. Check your Google Sheet - the data should appear automatically!

## Troubleshooting

- If data isn't appearing, make sure the Web app is deployed and has "Anyone" access
- Check the browser console for any errors
- Verify that the sheet name is correct in the Apps Script code
