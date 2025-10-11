# 📧 Email Setup Guide - Get Contact Form Submissions!

## 🎯 **What You Need to Do:**

### **Step 1: Get Resend API Key** (Free!)

1. **Go to [Resend.com](https://resend.com)**
2. **Sign up** (it's free!)
3. **Go to API Keys** section
4. **Create a new API key**
5. **Copy the key** (starts with `re_`)

### **Step 2: Set Up Environment Variables**

#### **For Local Development:**
1. **Create `.env.local` file** in your project root:
```bash
# Copy the example file
cp env.example .env.local
```

2. **Edit `.env.local`** and add your API key:
```bash
RESEND_API_KEY=re_your_actual_api_key_here
CONTACT_EMAIL=mohamedali200bu@gmail.com
```

#### **For Vercel Deployment:**
1. **Go to Vercel Dashboard**
2. **Select your project**
3. **Go to Settings → Environment Variables**
4. **Add these variables:**
   - `RESEND_API_KEY` = `re_your_actual_api_key_here`
   - `CONTACT_EMAIL` = `mohamedali200bu@gmail.com`

### **Step 3: Install Dependencies**
```bash
npm install
```

### **Step 4: Test Locally**

#### **Option A: Simple Test (No API Key Needed)**
```bash
npm run dev
```
- Form works with simulation
- Logs to console

#### **Option B: Full Test (With Email)**
```bash
npm run dev:full
```
- Runs both frontend and API server
- Sends real emails if API key is set

### **Step 5: Deploy to Vercel**
```bash
git add .
git commit -m "Add email functionality to contact form"
git push origin main
```

## 📧 **What You'll Receive:**

### **Email Format:**
- **Subject**: "New Contact Form Submission from [Name]"
- **Professional HTML design** with your portfolio branding
- **All form details**: Name, email, message, timestamp
- **Clickable email links** for easy replies

### **Email Content:**
```
New Contact Form Submission

Contact Details:
- Name: [Visitor's Name]
- Email: [Visitor's Email] (clickable)
- Submitted: [Date & Time]

Message:
[Visitor's Message]

---
This message was sent from your portfolio contact form.
```

## 🔧 **Troubleshooting:**

### **If emails aren't sending:**

1. **Check API Key**: Make sure it's correct in `.env.local`
2. **Check Console**: Look for error messages
3. **Verify Domain**: Resend might need domain verification
4. **Check Spam**: Emails might go to spam folder

### **Console Messages:**
- `✅ Email sent successfully` = Email was sent
- `❌ Email sending failed` = Check API key/domain
- `⚠️ RESEND_API_KEY not found` = Add API key to environment

## 🚀 **Quick Start:**

1. **Get Resend API key** (5 minutes)
2. **Add to `.env.local`** (1 minute)
3. **Run `npm run dev:full`** (1 minute)
4. **Test the form** (1 minute)
5. **Check your email!** 📧

## 💡 **Pro Tips:**

- **Resend is free** for up to 3,000 emails/month
- **No domain verification needed** for testing
- **Emails are delivered instantly**
- **Professional HTML templates** included
- **Mobile-friendly** email design

## 🎉 **You're All Set!**

Once configured, every contact form submission will be sent directly to your email inbox with a beautiful, professional format!
