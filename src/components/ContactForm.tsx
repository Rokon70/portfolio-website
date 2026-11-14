"use client";
import { useRef, useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

const input = "w-full rounded-xl border border-slate-300 bg-white/70 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-brand focus:ring-4 focus:ring-brand/15 dark:border-white/15 dark:bg-white/[.06] dark:focus:border-brand";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [msg, setMsg] = useState("");
  const startedAt = useRef(Date.now());

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    const data = { ...Object.fromEntries(new FormData(form)), startedAt: startedAt.current };
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const json = await res.json().catch(() => ({}));
      if (res.ok) { setStatus("ok"); form.reset(); } else { setStatus("error"); setMsg(json.error || "Something went wrong."); }
    } catch { setStatus("error"); setMsg("Network error. Please try again."); }
  }

  if (status === "ok")
    return (
      <div className="card flex flex-col items-center justify-center gap-2 py-14 text-center">
        <CheckCircle2 size={48} className="text-emerald-500" />
        <h3 className="font-display text-xl font-bold">Message sent!</h3>
        <p className="text-slate-500 dark:text-slate-400">Thank you. I’ll get back to you soon.</p>
        <button className="btn mt-3 !px-5 !py-2 text-sm" onClick={() => { startedAt.current = Date.now(); setStatus("idle"); }}>Send another</button>
      </div>
    );

  return (
    <form onSubmit={onSubmit} className="card space-y-4">
      <h3 className="font-display text-lg font-bold">Send a message</h3>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Name</label>
          <input id="cf-name" name="name" required placeholder="Your name" className={input} />
        </div>
        <div>
          <label htmlFor="cf-email" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Email</label>
          <input id="cf-email" name="email" type="email" required placeholder="you@example.com" className={input} />
        </div>
      </div>
      <div>
        <label htmlFor="cf-message" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Message</label>
        <textarea id="cf-message" name="message" required rows={5} placeholder="Tell me about your project…" className={input} />
      </div>
      {/* honeypot: মানুষ দেখে না, বট পূরণ করে */}
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 opacity-0" />
      <button disabled={status === "sending"} className="btn btn-primary disabled:opacity-60">
        <Send size={16} /> {status === "sending" ? "Sending…" : "Send Message"}
      </button>
      {status === "error" && <p role="alert" className="text-sm font-semibold text-red-500">{msg}</p>}
    </form>
  );
}
