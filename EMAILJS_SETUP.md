# EmailJS Setup Guide

Follow these steps to configure your contact form to send emails to `vickamau20@gmail.com`:

## 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service
1. After logging in, go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose **Gmail** (or your preferred email service)
4. Connect your Gmail account (`vickamau20@gmail.com`)
5. Give it a name (e.g., "Portfolio Contact")
6. Click **Create Service**

## 3. Create Email Template
1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use these settings:
   - **Template Name**: Portfolio Contact Form
   - **Subject**: New Contact Form Message: {{subject}}
   - **Email Content** (HTML format):
   ```html
   <p>You have received a new message from your portfolio contact form:</p>
   
   <h3>Contact Details:</h3>
   <p><strong>Name:</strong> {{from_name}}</p>
   <p><strong>Email:</strong> {{from_email}}</p>
   <p><strong>Subject:</strong> {{subject}}</p>
   
   <h3>Message:</h3>
   <p>{{message}}</p>
   
   <hr>
   <p><small>This message was sent from your portfolio website.</small></p>
   ```

4. Click **Save Template**

## 4. Get Your Credentials
1. Go to **Account** → **API Keys**
2. Copy your **Public Key**
3. Go to **Email Services** and copy your **Service ID**
4. Go to **Email Templates** and copy your **Template ID**

## 5. Configure Environment Variables
1. Create a file named `.env.local` in your project root
2. Add your credentials:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```
3. Replace the placeholder values with your actual credentials

## 6. Test Your Contact Form
1. Run your development server: `npm run dev`
2. Go to the contact section
3. Fill out the form and submit
4. Check your Gmail inbox for the test email

## Important Notes:
- The free EmailJS plan allows 200 emails per month
- Emails will be sent from your connected Gmail account
- Make sure your Gmail account allows less secure apps or use an app password
- Test thoroughly before deploying to production

## Alternative: Use Resend (Recommended for Production)
For better deliverability and more professional setup, consider using [Resend](https://resend.com/):
1. Sign up for Resend
2. Verify your domain
3. Use their API instead of EmailJS
4. Update the email sending logic in `lib/email.ts`

## Troubleshooting:
- If emails don't arrive, check your spam folder
- Ensure all environment variables are set correctly
- Verify your EmailJS service is properly connected
- Check browser console for any error messages
