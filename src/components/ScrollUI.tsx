"use client";
import { useEffect, useState } from "react";

export default function ScrollUI() {
  const [p, setP] = useState(0);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? (h.scrollTop / max) * 100 : 0);
      setShow(h.scrollTop > 600);
    };
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <>
      <div className="fixed left-0 top-0 z-[70] h-1 bg-gradient-to-r from-brand to-accent" style={{ width: `${p}%` }} />
      <button aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`glass fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-2xl font-bold text-brand transition hover:-translate-y-1 hover:shadow-lg hover:shadow-brand/30 ${show ? "opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}>↑</button>
    </>
  );
}
