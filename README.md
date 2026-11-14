# Rokon Sarker — Portfolio (Next.js 14 + TypeScript + Tailwind CSS + MongoDB)

## ১. চালানোর নিয়ম (VS Code টার্মিনালে)
```bash
npm install
cp .env.example .env.local     # Windows CMD: copy .env.example .env.local
npm run dev                    # http://localhost:3000
```
প্রোডাকশন টেস্ট: `npm run build` তারপর `npm start`

## ২. ফোল্ডার কাঠামো
```
src/
  data/portfolio.ts        ← ✏️ সব কনটেন্ট (নাম, About, স্কিল, প্রজেক্ট, রিভিউ...) এখানে
  app/
    layout.tsx             ← পুরো সাইটের কাঠামো, SEO/শেয়ার প্রিভিউ, থিম স্ক্রিপ্ট, ফুটার
    page.tsx               ← হোম পেজে সেকশনের ক্রম
    globals.css            ← সাধারণ স্টাইল (.card, .btn, .tag), টাইপিং কার্সর
    projects/[slug]/page.tsx ← প্রজেক্ট ডিটেইলস পেজ
    api/contact/route.ts   ← Contact ফর্ম API (MongoDB, স্প্যাম সুরক্ষা, ইমেইল)
    sitemap.ts, robots.ts  ← SEO
  components/
    Navbar.tsx             ← নাভবার, মোবাইল মেনু, active লিংক
    ThemeToggle.tsx        ← ডার্ক/লাইট বাটন
    Hero.tsx, Typing.tsx   ← হিরো সেকশন, টাইপিং ইফেক্ট, কাউন্টার
    Sections.tsx           ← About, Services, Skills, Education, Experience, Projects, Gallery, Reviews
    SkillBar.tsx           ← স্কিল বার অ্যানিমেশন
    Reveal.tsx             ← স্ক্রলে ধীরে ধীরে আসার অ্যানিমেশন
    BeforeAfter.tsx        ← before/after স্লাইডার
    Contact.tsx, ContactForm.tsx
public/
  images/rokon.jpg         ← আপনার ছবি
  projects/p1..p3.jpg      ← প্রজেক্ট স্ক্রিনশট
  gallery/                 ← রিটাচিং before/after ছবি
```

## ৩. কী বদলাতে চাইলে কোন ফাইল
| কাজ | ফাইল ও জায়গা |
|---|---|
| নাম, পদবি, ইন্ট্রো, ফোন, ইমেইল, সোশ্যাল লিংক | `portfolio.ts` → `profile` |
| টাইপিং ইফেক্টের লেখা | `profile.roles` |
| হিরোর কাউন্টার (12+ Years ...) | `profile.stats` |
| About Me, শখ | `profile.about`, `profile.interests` |
| স্কিল ও শতকরা | `skills` |
| শিক্ষা / অভিজ্ঞতা | `education` / `experience` |
| প্রজেক্ট | `projects` (নিচে দেখুন) |
| সার্ভিস | `services` |
| before/after গ্যালারি | `gallery` + ছবি `public/gallery/` |
| ক্লায়েন্ট রিভিউ | `testimonials` |
| রেজিউমে | PDF-টা `public/Rokon_Sarker_Resume.pdf` নামে রাখুন |
| মূল রঙ (indigo/cyan) | `Sections.tsx`, `Hero.tsx`, `globals.css`-এ `indigo` → `emerald`, `rose` ইত্যাদি (Ctrl+Shift+H দিয়ে Find & Replace) |
| সেকশনের ক্রম | `page.tsx` |
| নাভবারের লিংক | `Navbar.tsx` → `links` |

### নতুন প্রজেক্ট যোগ
`portfolio.ts`-এর `projects` অ্যারেতে একটা অবজেক্ট যোগ করুন (`slug` অনন্য হতে হবে)। স্ক্রিনশট `public/projects/`-এ রাখুন। বাড়তি ছবি দেখাতে `gallery: ["/projects/x-2.jpg", ...]` দিন।

## ৪. ফিচার কীভাবে কাজ করে
- **ডার্ক/লাইট থিম:** `tailwind.config.ts`-এ `darkMode: "class"`। বাটন `<html>`-এ `dark` ক্লাস বসায় ও `localStorage`-এ সেভ করে। প্রথমবার ডিভাইসের সেটিং দেখে। `layout.tsx`-এর `themeScript` পেজ লোডের আগেই থিম বসায়।
- **স্ক্রল অ্যানিমেশন:** `Reveal.tsx` IntersectionObserver দিয়ে দেখে কখন সেকশন স্ক্রিনে আসে। `delay` দিয়ে ক্রমে আনা যায়। বন্ধ করতে `Reveal` ট্যাগ সরিয়ে দিন।
- **Active নাভ লিংক:** `Navbar.tsx` প্রতিটা সেকশন `id` ধরে পর্যবেক্ষণ করে।
- **Before/After:** `BeforeAfter.tsx`-এ অদৃশ্য range স্লাইডার ছবির কাটা অংশ (clipPath) বদলায়, মাউস ও টাচ দুটোতেই চলে।
- **SEO:** `layout.tsx`-এ title, description, Open Graph, Twitter কার্ড; `sitemap.ts` ও `robots.ts` স্বয়ংক্রিয়। `NEXT_PUBLIC_SITE_URL` deploy-এর পর সত্যিকারের ঠিকানা দিন।
- **Contact ফর্ম:** মেসেজ MongoDB-র `portfolio.messages`-এ জমা হয়। স্প্যাম সুরক্ষা: (১) লুকানো honeypot ঘর, (২) ২.৫ সেকেন্ডের কম সময়ে সাবমিট আটকানো, (৩) একই IP থেকে ১০ মিনিটে সর্বোচ্চ ৩ মেসেজ।
- **ইমেইল নোটিফিকেশন:** resend.com-এ ফ্রি অ্যাকাউন্ট খুলে API key নিয়ে `.env.local`-এ `RESEND_API_KEY` ও `CONTACT_TO_EMAIL` দিন। (Resend-এর টেস্ট প্রেরক শুধু আপনার নিজের অ্যাকাউন্টের ইমেইলে পাঠাতে পারে।)

## ৫. MongoDB Atlas সেটআপ
1. mongodb.com/atlas-এ ফ্রি ক্লাস্টার খুলুন।
2. Database Access-এ ইউজার বানান; Network Access-এ `0.0.0.0/0` যোগ করুন (Vercel-এর জন্য)।
3. Connect → Drivers থেকে connection string কপি করে `.env.local`-এর `MONGODB_URI`-তে বসান (`<password>` বদলে)।

## ৬. Deploy (Vercel)
1. কোড GitHub-এ push করুন।
2. vercel.com → Add New Project → repo import।
3. Environment Variables-এ `.env.local`-এর সব মান বসান (`NEXT_PUBLIC_SITE_URL`-এ Vercel-এর লিংক)।
4. Deploy। লাইভ লিংক কাজ করছে কিনা খুলে দেখুন।

## ৭. সাধারণ সমস্যা
- **ছবি দেখা যাচ্ছে না:** ফাইলের নাম ও বড়/ছোট হাতের অক্ষর `portfolio.ts`-এর পথের সাথে মেলান।
- **ফর্ম সাবমিটে এরর:** `.env.local`-এ `MONGODB_URI` ঠিক আছে কিনা দেখুন, তারপর `npm run dev` আবার চালান।
- **.env বদলানোর পর কাজ করছে না:** ডেভ সার্ভার বন্ধ করে (`Ctrl+C`) আবার চালান।

## ৮. নতুন ডিজাইনের অংশ ও কোথায় বদলাবেন
| অংশ | ফাইল | কী বদলানো যায় |
|---|---|---|
| পুরো সাইটের রঙ | `src/app/globals.css` (উপরের `--brand`, `--accent`) | R G B সংখ্যা বদলালেই সব জায়গায় রঙ বদলায়। লাইট = `:root`, ডার্ক = `.dark` |
| হিরো (ব্যাকগ্রাউন্ড, "Available for work", ভাসমান ট্যাগ) | `src/components/Hero.tsx` | `chips` তালিকায় ট্যাগের নাম ও জায়গা; "Available for work" লেখা |
| স্ক্রল হওয়া টেক ব্যান্ড | `src/components/Marquee.tsx` | `items` তালিকা |
| হিরোর কাউন্টার | `portfolio.ts` → `profile.stats` | সংখ্যা ও লেখা |
| Quick Facts (About-এর পাশে) | `portfolio.ts` → `profile.facts` | আইকন ও লেখা |
| প্রজেক্ট কার্ড (প্রথমটা বড়/Featured) | `src/components/Sections.tsx` → `Projects` | প্রথম প্রজেক্টই Featured হয়, ক্রম বদলাতে `projects` অ্যারের ক্রম বদলান |
| Hire/CTA ব্যানার | `src/components/Contact.tsx` | ব্যানারের লেখা |
| ফুটার | `src/components/Footer.tsx` | লিংক ও লেখা |
| স্ক্রল প্রগ্রেস বার ও ↑ বাটন | `src/components/ScrollUI.tsx` | — |
| অ্যানিমেশনের গতি | `tailwind.config.ts` → `animation` | `35s` (marquee), `5s` (float), `12s` (blob) |

রঙের উদাহরণ: সবুজ থিম চাইলে `--brand: 5 150 105; --accent: 132 204 22;`, গোলাপি থিম চাইলে `--brand: 225 29 72; --accent: 249 115 22;`
এই ডিজাইনে সেকশনের ক্রম: Hero → Tech ব্যান্ড → About → Skills → Projects → Services → Experience → Education → Reviews → Contact।
