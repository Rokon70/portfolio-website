import { Github, Linkedin, Twitter, Facebook, Heart } from "lucide-react";
import { profile } from "@/data/portfolio";

const links = ["About", "Skills", "Projects", "Experience", "Contact"];
const socialIcons: Record<string, React.ReactNode> = {
  GitHub: <Github size={17} />, LinkedIn: <Linkedin size={17} />,
  Twitter: <Twitter size={17} />, Facebook: <Facebook size={17} />,
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200/80 bg-white/70 dark:border-white/10 dark:bg-white/[.02]">
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand to-accent font-display text-lg font-bold text-white">R</span>
            <p className="font-display text-xl font-extrabold">Rokon<span className="text-brand">Sarker</span></p>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-500 dark:text-slate-400">Front-End Developer building fast, modern and pixel-perfect web experiences.</p>
        </div>
        <div>
          <p className="mb-4 font-display font-bold">Quick Links</p>
          <ul className="grid grid-cols-2 gap-1 text-sm text-slate-500 dark:text-slate-400">
            {links.map((l) => <li key={l}><a href={`/#${l.toLowerCase()}`} className="transition hover:text-brand">{l}</a></li>)}
          </ul>
        </div>
        <div>
          <p className="mb-4 font-display font-bold">Connect</p>
          <div className="flex flex-wrap gap-2.5">
            {profile.socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                className="glass grid h-10 w-10 place-items-center rounded-xl text-slate-600 transition hover:-translate-y-1 hover:text-brand hover:shadow-lg hover:shadow-brand/20 dark:text-slate-300 dark:hover:text-white">
                {socialIcons[s.label] ?? s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="relative border-t border-slate-200/80 py-4 text-center text-sm text-slate-500 dark:border-white/10 dark:text-slate-400">
        © {new Date().getFullYear()} {profile.name}. Built with <Heart size={12} className="inline text-brand" /> using Next.js &amp; Tailwind CSS.
      </p>
    </footer>
  );
}
