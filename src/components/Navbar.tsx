"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Rocket } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "Home", id: "home" }, { label: "About", id: "about" }, { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" }, { label: "Services", id: "services" }, { label: "Experience", id: "experience" },
  { label: "Education", id: "education" }, { label: "Reviews", id: "testimonials" }, { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 10);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;
    const els = links.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-40% 0px -55% 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className={`w-full border-b px-4 py-3 transition-all duration-300 ${scrolled ? "glass border-slate-200/80 dark:border-white/10" : "border-transparent bg-white/40 backdrop-blur-md dark:bg-slate-950/40"}`}>
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand to-accent font-display text-lg font-bold text-white shadow-lg shadow-brand/30">R</span>
          <span className="font-display text-lg font-bold leading-none">Rokon<span className="text-brand">Sarker</span><small className="block text-[11px] font-medium text-slate-500 dark:text-slate-400">Front-End Developer</small></span>
        </Link>

        {/* ডেস্কটপ মেনু */}
        <ul className="hidden items-center gap-0.5 lg:flex">
          {links.map((l) => (
            <li key={l.id}>
              <a href={`/#${l.id}`}
                className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${active === l.id && pathname === "/" ? "bg-brand text-white shadow-md shadow-brand/30" : "text-slate-600 hover:bg-brand/10 hover:text-brand dark:text-slate-400 dark:hover:text-white"}`}>{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href="/#contact" className="btn-primary hidden items-center gap-1.5 rounded-full !px-4 !py-2 text-sm font-semibold !text-white sm:inline-flex">
            <Rocket size={15} /> Hire Me
          </a>
          <ThemeToggle />
          <button aria-label="Toggle menu" aria-expanded={open} className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 dark:border-white/10 lg:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        </div>
      </div>

      {/* মোবাইল মেনু */}
      <div className={`mx-auto max-w-6xl overflow-hidden rounded-b-2xl transition-all duration-300 lg:hidden ${open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"}`}>
        <ul className="glass flex flex-col gap-1 rounded-b-2xl border-t-0 p-4">
          {links.map((l) => (
            <li key={l.id}>
              <a href={`/#${l.id}`} onClick={() => setOpen(false)}
                className={`block rounded-xl px-4 py-2.5 text-sm font-semibold transition ${active === l.id && pathname === "/" ? "bg-brand/10 text-brand" : "text-slate-600 hover:bg-brand/10 hover:text-brand dark:text-slate-400 dark:hover:text-white"}`}>{l.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
