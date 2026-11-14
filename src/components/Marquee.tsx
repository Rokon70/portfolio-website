const items = ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Node.js", "Express", "MongoDB", "HTML5", "CSS3", "Git & GitHub", "Figma"];

export default function Marquee() {
  return (
    <div aria-hidden="true" className="relative overflow-hidden border-y border-slate-200/80 bg-white/70 py-5 dark:border-white/10 dark:bg-white/[.03]">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-slate-100 to-transparent dark:from-[#0a0a17]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-slate-100 to-transparent dark:from-[#0a0a17]" />
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="whitespace-nowrap font-display text-lg font-bold text-slate-400 transition dark:text-slate-500">
            {t}<span className="mx-7 text-brand">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
