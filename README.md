# AI Workspace — Frontend

AI Workspace is an AI-powered web application that provides tools for **AI Blog Generation** and **Resume-based Interview Q&A**. The frontend is built with Next.js and provides a responsive workspace for users to generate, manage, and download AI-generated content.

## 🚀 Live Demo

[AI Workspace](https://ai-assistant-frontend-alpha.vercel.app/)

## 📂 Backend Repository

[AI Workspace Backend](https://github.com/only-abhay/AI-Assistant-backend)

## ✨ Features

* User registration and login
* OTP-based email verification
* Protected routes
* AI Blog Generator
* Resume Q&A Generator
* Resume upload with Job Description
* Blog and Resume history
* Free and Unlimited plans
* Razorpay payment integration
* Download generated blogs and resume Q&A
* Responsive UI
* Toast notifications
* User authentication using cookies/JWT

## 🤖 AI Features

### AI Blog Generator

Users can provide:

* Blog title
* Keywords
* Description

The application generates a complete blog using the **Groq API**.

### Resume Q&A Generator

Users can upload their resume and provide a job description.

The application analyzes the resume and job description and generates interview questions and answers using **Google Gemini**.

## 💳 Plans

### Free Plan

* Up to 10 blog generations
* Resume Q&A generation
* Usage limit management

### Unlimited Plan

* Unlimited blog generation
* Resume Q&A generation
* Razorpay-powered payment

## 🛠️ Tech Stack

* Next.js
* React.js
* JavaScript
* Tailwind CSS
* Axios
* Redux Toolkit
* Sonner
* Lucide React
* Razorpay
* HTML2PDF

## 📁 Project Structure

```text
src/
├── app/
├── components/
├── services/
├── redux/
├── hooks/
└── utils/
```

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/only-abhay/AI-Assistant-frontend.git
```

Go to the project directory:

```bash
cd AI-Assistant-frontend
```

Install dependencies:

```bash
npm install
```

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=your_backend_url
NEXT_PUBLIC_ROZARPAY_KEY_ID=your_razorpay_key
```

Run the development server:

```bash
npm run dev
```

The application will run on:

```text
http://localhost:3000
```

## 🔐 Authentication

The frontend communicates with the backend for:

* Registration
* Login
* OTP verification
* Logout
* Protected user data
* Authentication state

Authentication is handled using JWT-based cookies.

## 💰 Payment Integration

Razorpay is integrated for purchasing the Unlimited plan.

The frontend:

1. Requests a Razorpay order from the backend.
2. Opens the Razorpay checkout.
3. Receives the payment response.
4. Sends payment details to the backend for verification.
5. Updates the user's plan after successful verification.

## 📱 Responsive Design

The application is designed to work across:

* Desktop
* Tablet
* Mobile

## 🔮 Future Improvements

* More AI tools
* Advanced resume analysis
* AI-powered cover letter generation
* More subscription plans
* Improved dashboard analytics
* Export options for additional formats

## 👨‍💻 Author

**Abhay Shaw**

Full Stack Developer
