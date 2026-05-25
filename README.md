# Aether AI

Aether AI is a modern AI-powered screen sharing assistant that helps users navigate and control their screen safely using natural language.

The AI can analyze a shared screen, suggest actions, and assist users while preventing risky or sensitive operations.

---

## Features

- Safe AI screen assistance
- Screen sharing support
- AI action confirmation system
- OpenRouter free model integration
- Multiple AI speed modes
- Supabase authentication
- Email OTP login system
- Multilingual UI
  - English
  - Italian
  - Spanish
  - French
- Mobile-friendly interface
- Sensitive prompt detection
- AI safety moderation with OpenRouter
- Modern rounded UI

---

## Tech Stack

- React
- TailwindCSS
- Framer Motion
- Supabase
- OpenRouter API
- Lucide Icons

---

## Authentication

Aether AI uses passwordless authentication powered by Supabase.

Users receive a verification code by email to log in securely.

---

## AI Safety

Aether AI blocks dangerous or sensitive requests such as:

- Password requests
- OTP / verification codes
- Payment information
- Credit cards
- API keys
- Dangerous device actions

The app also supports AI-powered moderation using OpenRouter models.

---

## OpenRouter

This project supports free OpenRouter models.

Recommended moderation model:

```txt
google/gemma-3-27b-it:free
