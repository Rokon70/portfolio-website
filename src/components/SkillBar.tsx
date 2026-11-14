"use client";
import { useEffect, useRef, useState } from "react";

export default function SkillBar({ name, pct }: { name: string; pct: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className="my-3">
      <div className="flex justify-between text-sm font-semibold"><span>{name}</span><span className="text-brand">{pct}%</span></div>
      <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-slate-200/80 dark:bg-white/10">
        <div className="h-full rounded-full bg-gradient-to-r from-brand to-accent transition-all duration-1000 ease-out motion-reduce:transition-none" style={{ width: on ? `${pct}%` : "0%" }} />
      </div>
    </div>
  );
}
