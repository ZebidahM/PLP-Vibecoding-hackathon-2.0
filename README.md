# 🔧 EventHub Kenya — Book Local Freelancers Fast

> **Find & book trusted local freelancers** — chefs, tutors, cleaners, fundis, and more — all in one place.

**EventHub Kenya** is a mobile-first web platform built to empower local service providers with visibility, booking tools, and digital payment options. Starting with the hospitality market (chefs, caterers, event planners), the platform is designed to scale across sectors like cleaning, tutoring, plumbing, and beyond.

---

## 🚀 Problem We Solve
> Fundis, cleaners, tutors, and other freelancers often miss out on clients because they lack digital visibility, booking tools, or trusted platforms to showcase their services.

**EventHub Kenya bridges that gap** by providing a simple, mobile-accessible space where clients can:
- Browse available service providers nearby
- Compare specialties
- Reach out directly via WhatsApp
- Book & pay with ease

---

## 🎯 Core Features

- 🔍 Search local vendors and freelancers
- 📄 View professional profiles with services & specialties
- 📱 Click-to-book via **WhatsApp** for direct communication
- 💸 Payments (M-Pesa + card) coming soon
- 🧾 Vendor dashboard (coming soon)

---

## 🛠️ Built With

| Layer         | Technology                            |
|--------------|----------------------------------------|
| Frontend     | [Next.js 14](https://nextjs.org/)      |
| Styling      | [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) |
| Backend API  | Next.js Route Handlers                 |
| Vendor DB    | [Supabase](https://supabase.com/)      |
| Messaging    | WhatsApp Web + Meta Cloud API (planned) |
| Payments     | Stripe + M-Pesa via Flutterwave (planned) |
| Hosting      | [Vercel](https://vercel.com/)          |

---

## 📦 Getting Started

1. **Clone the repo**
```bash
git clone https://github.com/yourusername/eventhub-kenya.git
cd eventhub-kenya
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment**
```bash
cp .env.example .env.local
# Add your Supabase keys to .env.local
```

4. **Run locally**
```bash
npm run dev
# Visit http://localhost:3000
```

---

## 🗂️ File Structure

```
├── app/
│   ├── page.tsx               → Homepage with vendor listing
│   ├── api/vendors/           → Fake API for demo vendors
│   ├── vendors/[id]/          → Vendor profile pages
├── components/ui/             → Buttons, cards
├── lib/                       → Supabase client setup
├── public/                    → (Optional) Static assets
├── .env.example               → Sample config for environment
└── README.md                  → You're here!
```

---

## ✅ Roadmap

- [x] Vendor list and profile pages
- [x] WhatsApp contact buttons
- [ ] Vendor signup & auth
- [ ] M-Pesa & card payments
- [ ] Admin dashboard for vendors
- [ ] WhatsApp bot integration (via Twilio / Meta API)

---

## 🤝 Contributing

We welcome collaborators from all backgrounds — especially developers and community leaders in East Africa. Start by forking the repo and sending a PR.

---

## 🔒 License

MIT License © 2025 [Your Name]

---

## 💬 Why It Matters

> Technology should unlock **dignity and opportunity** — not just convenience.

EventHub Kenya aims to uplift local freelancers — especially youth and women — by making it easier for them to **earn, grow, and be discovered** in a digital-first economy.
