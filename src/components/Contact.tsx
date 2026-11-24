import { Mail, MessageCircle, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";
import ContactForm from "./ContactForm";
import Reveal from "./Reveal";

export default function Contact() {
  const rows = [
    { icon: <Mail size={19} />, label: "Email", text: profile.email, href: `mailto:${profile.email}` },
    { icon: <MessageCircle size={19} />, label: "WhatsApp", text: `+${profile.whatsapp}`, href: `https://wa.me/${profile.whatsapp}` },
  ];
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-5 pb-16 pt-12 sm:pt-16">
      {/* CTA ব্যানার */}
      <Reveal>
        <div className="relative mb-12 overflow-hidden rounded-[2rem] bg-gradient-to-r from-brand to-accent p-8 text-center text-white shadow-2xl shadow-brand/20 sm:p-14">
          <div className="bg-grid absolute inset-0 opacity-30 [mask-image:none]" style={{ maskImage: "none", WebkitMaskImage: "none" }} />
          <div className="absolute -left-16 -top-16 h-56 w-56 animate-blob rounded-full bg-white/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-10 h-64 w-64 animate-blob rounded-full bg-black/20 blur-3xl [animation-delay:-6s]" />
          <div className="relative">
            <p className="eyebrow !border-white/30 !bg-white/15 !text-white">08 · Contact</p>
            <h2 className="heading mx-auto w-fit !text-white">Have a project in mind?<br className="hidden sm:block" /> Let’s build it together.</h2>
            <p className="mx-auto mt-3 max-w-xl opacity-90">I’m open to freelance projects and full-time opportunities. Send a message and I’ll reply within a day.</p>
          </div>
        </div>
      </Reveal>

      <div className="grid gap-6 md:grid-cols-[1fr_1.15fr]">
        <Reveal className="h-full">
          <div className="card flex h-full flex-col justify-evenly divide-y divide-slate-100 !p-10 dark:divide-white/10">
            {rows.map((r) => (
              <a key={r.label} href={r.href} target={r.label === "WhatsApp" ? "_blank" : undefined} rel="noopener noreferrer"
                className="group flex items-center gap-6 py-4 transition first:pt-0 last:pb-0">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand/15 to-accent/15 text-brand transition group-hover:scale-110">{r.icon}</span>
                <span><b className="block">{r.label}</b><span className="text-sm text-slate-500 dark:text-slate-400">{r.text}</span></span>
              </a>
            ))}
            <div className="flex items-center gap-6 py-4">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand/15 to-accent/15 text-brand"><MapPin size={19} /></span>
              <span><b className="block">Location</b><span className="text-sm text-slate-500 dark:text-slate-400">Bangladesh · Remote-friendly</span></span>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}><ContactForm /></Reveal>
      </div>
    </section>
  );
}
