import Image from "next/image";
import { Github, Linkedin, Twitter, Facebook, ArrowDown, FileDown, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import Typing from "./Typing";
import CountUp from "./CountUp";

const chips = [
  { t: "React", pos: "left-0 top-6", d: "0s" }, { t: "Next.js", pos: "-right-6 top-20", d: "-1.5s" },
  { t: "TypeScript", pos: "-left-8 bottom-28", d: "-3s" }, { t: "Tailwind", pos: "right-0 bottom-10", d: "-2s" },
  { t: "MongoDB", pos: "left-12 -bottom-4", d: "-4s" },
];

const socialIcons: Record<string, React.ReactNode> = {
  GitHub: <Github size={18} />, LinkedIn: <Linkedin size={18} />,
  Twitter: <Twitter size={18} />, Facebook: <Facebook size={18} />,
};

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[60vh] flex-col overflow-hidden">
      {/* premium mesh ব্যাকগ্রাউন্ড */}
      <div className="hero-mesh animate-pulse-glow absolute inset-0 -z-10" />
      <div className="bg-grid absolute inset-0 -z-10" />
      {/* উপরে সরু আলোর রেখা — navbar-এর নিচে crisp সীমানা */}
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent" />
      <div className="grain absolute inset-0 -z-10" />
      {/* নিচের দিকে পেজের রঙে smooth fade */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-28 bg-gradient-to-b from-transparent to-slate-100 dark:to-[#0a0a17]" />

      <div className="mx-auto grid w-full max-w-6xl flex-1 items-center gap-14 px-5 pb-10 pt-28 md:grid-cols-[1.15fr_.85fr] md:pt-32">
        <div className="order-2 text-center md:order-1 md:text-left">
          <span className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-sm font-semibold">
            <span className="relative flex h-2.5 w-2.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" /><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" /></span>
            Available for work
          </span>

          <h1 className="mt-6 font-display font-bold tracking-tight">
            <span className="block text-2xl font-semibold text-slate-700 dark:text-slate-300 sm:text-3xl lg:text-4xl">Hi, I&apos;m</span>
            <span className="gradient-text mt-1 block whitespace-nowrap text-4xl leading-[1.05] sm:text-7xl lg:text-[5rem]">{profile.name}</span>
          </h1>
          <p className="mt-4 font-display text-xl font-semibold text-slate-700 dark:text-slate-300 sm:text-2xl">
            <Typing words={profile.roles} />
          </p>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-500 dark:text-slate-400 md:mx-0">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3 md:justify-start">
            <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" download className="btn btn-primary"><FileDown size={18} /> Download Resume</a>
            <a href="#projects" className="btn">View My Work</a>
            <a href={`mailto:${profile.email}`} className="btn btn-glass hidden sm:inline-flex"><Mail size={17} /> Say Hello</a>
          </div>

          <div className="mt-7 flex flex-wrap justify-center gap-2.5 md:justify-start">
            {profile.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                className="glass grid h-11 w-11 place-items-center rounded-xl text-slate-600 transition hover:-translate-y-1 hover:text-brand hover:shadow-lg hover:shadow-brand/20 dark:text-slate-300 dark:hover:text-white">
                {socialIcons[s.label] ?? s.label}
              </a>
            ))}
          </div>

          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-3">
            {profile.stats.map(([n, l]) => (
              <div key={l} className="card !rounded-2xl !p-4 text-center md:text-left">
                <dt className="gradient-text font-display text-3xl font-extrabold"><CountUp value={n} /></dt>
                <dd className="mt-0.5 text-xs font-medium text-slate-500 dark:text-slate-400">{l}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* ছবি + ভাসমান ট্যাগ */}
        <div className="relative order-1 mx-auto w-64 sm:w-80 md:order-2">
          <div className="absolute inset-0 -z-10 animate-pulse-glow rounded-[2.5rem] bg-gradient-to-br from-brand to-accent opacity-30 blur-2xl" />
          <div className="relative rounded-[2.5rem] bg-gradient-to-br from-brand to-accent p-1 shadow-2xl shadow-brand/30">
            <Image src={profile.photo} alt={`Portrait of ${profile.name}`} width={320} height={320} priority
              className="aspect-square w-full rounded-[2.3rem] object-cover" />
          </div>
          <div className="absolute -bottom-3 -right-3 glass grid h-16 w-16 place-items-center rounded-2xl font-display text-2xl font-extrabold text-brand">12<span className="text-sm">y+</span></div>
          {chips.map((c) => (
            <span key={c.t} style={{ animationDelay: c.d }}
              className={`glass absolute hidden animate-float rounded-xl px-3.5 py-1.5 text-sm font-bold shadow-md sm:block ${c.pos}`}>{c.t}</span>
          ))}
        </div>
      </div>

      <a href="#about" aria-label="Scroll down" className="mx-auto mb-5 hidden w-fit shrink-0 text-slate-400 transition hover:text-brand md:block">
        <ArrowDown size={22} className="animate-bounce" />
      </a>
    </section>
  );
}
