import { NextResponse } from "next/server";
import { getClient } from "@/lib/mongodb";

// স্প্যাম সুরক্ষা ১: একই IP থেকে ১০ মিনিটে সর্বোচ্চ ৩টা মেসেজ (সার্ভারলেসে মোটামুটি সুরক্ষা)
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const arr = (hits.get(ip) || []).filter((t) => now - t < 10 * 60 * 1000);
  arr.push(now);
  hits.set(ip, arr);
  return arr.length > 3;
}

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (limited(ip)) return NextResponse.json({ error: "Too many messages. Please try again later." }, { status: 429 });

    const { name, email, message, website, startedAt } = await req.json();
    // স্প্যাম সুরক্ষা ২ ও ৩: লুকানো honeypot ঘর এবং খুব দ্রুত সাবমিট — বট ধরা পড়লে চুপচাপ সফল দেখাই
    if (website || (typeof startedAt === "number" && Date.now() - startedAt < 2500)) return NextResponse.json({ ok: true });

    if (!name || !email || !message || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: "Please fill all fields with a valid email." }, { status: 400 });
    }
    const doc = { name: String(name).slice(0, 100), email: String(email).slice(0, 200), message: String(message).slice(0, 3000), createdAt: new Date() };
    const client = await getClient();
    await client.db(process.env.MONGODB_DB || "portfolio").collection("messages").insertOne(doc);

    // ইমেইল নোটিফিকেশন (ঐচ্ছিক): Resend API key থাকলে আপনার ইমেইলে মেসেজ চলে যাবে
    const key = process.env.RESEND_API_KEY, to = process.env.CONTACT_TO_EMAIL;
    if (key && to) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>",
          to: [to], reply_to: doc.email, subject: `New portfolio message from ${doc.name}`,
          text: `Name: ${doc.name}\nEmail: ${doc.email}\n\n${doc.message}`,
        }),
      }).catch((e) => console.error("Email notification failed", e));
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Could not send message. Please try again later." }, { status: 500 });
  }
}
