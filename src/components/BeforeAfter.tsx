"use client";
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";

export default function BeforeAfter({ title, before, after }: { title: string; before: string; after: string }) {
  const [pos, setPos] = useState(50);
  return (
    <figure className="card !p-3">
      <div className="relative aspect-[4/3] select-none overflow-hidden rounded-xl">
        <img src={after} alt={`${title} — after`} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <img src={before} alt={`${title} — before`} className="h-full w-full object-cover" loading="lazy" />
        </div>
        <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow" style={{ left: `${pos}%` }} />
        <span className="absolute left-2 top-2 rounded bg-black/60 px-2 py-0.5 text-xs text-white">Before</span>
        <span className="absolute right-2 top-2 rounded bg-black/60 px-2 py-0.5 text-xs text-white">After</span>
        <input type="range" min={0} max={100} value={pos} onChange={(e) => setPos(Number(e.target.value))} aria-label={`Compare before and after: ${title}`} className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0" />
      </div>
      <figcaption className="mt-3 text-center font-semibold">{title}</figcaption>
    </figure>
  );
}
