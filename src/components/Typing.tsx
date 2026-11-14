"use client";
import { useEffect, useState } from "react";

export default function Typing({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const [txt, setTxt] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[i];
    let t: number | undefined;
    if (!del && txt === w) t = window.setTimeout(() => setDel(true), 1500);
    else if (del && txt === "") { setDel(false); setI((i + 1) % words.length); }
    else t = window.setTimeout(() => setTxt(del ? w.slice(0, txt.length - 1) : w.slice(0, txt.length + 1)), del ? 35 : 80);
    return () => clearTimeout(t);
  }, [txt, del, i, words]);
  return (
    <span aria-label={words.join(", ")} className="typing-cursor inline-block min-h-[1.75em]">{txt}</span>
  );
}
