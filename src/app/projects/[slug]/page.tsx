import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = projects.find((x) => x.slug === params.slug);
  return p ? { title: `${p.name} — Rokon Sarker`, description: p.description, openGraph: { images: [p.image] } } : {};
}

const List = ({ items }: { items: string[] }) => (
  <ul className="list-disc space-y-1 pl-6 text-slate-600 dark:text-slate-400">{items.map((i) => <li key={i}>{i}</li>)}</ul>
);
const H = ({ children }: { children: React.ReactNode }) => <h2 className="mb-2 mt-8 text-xl font-bold">{children}</h2>;

export default function ProjectDetails({ params }: { params: { slug: string } }) {
  const p = projects.find((x) => x.slug === params.slug);
  if (!p) notFound();
  return (
    <main className="mx-auto max-w-4xl px-5 py-12">
      <Link href="/#projects" className="btn !px-5 !py-2">← Back to Projects</Link>
      <h1 className="mt-6 text-3xl font-extrabold">{p.name}</h1>
      <Image src={p.image} alt={`${p.name} screenshot`} width={1000} height={550} unoptimized className="my-6 w-full rounded-2xl border border-slate-200 dark:border-slate-800" />
      {p.gallery && p.gallery.length > 0 && (
        <div className="mb-6 grid gap-4 sm:grid-cols-2">
          {p.gallery.map((g) => <Image key={g} src={g} alt={`${p.name} screenshot`} width={800} height={440} unoptimized className="w-full rounded-xl border border-slate-200 dark:border-slate-800" />)}
        </div>
      )}
      <H>Description</H>
      <p className="text-slate-600 dark:text-slate-400">{p.description}</p>
      <H>Main Technology Stack</H>
      <div className="flex flex-wrap gap-2">{p.stack.map((t) => <span key={t} className="tag">{t}</span>)}</div>
      <H>Key Features</H>
      <List items={p.features} />
      <div className="mt-6 flex flex-wrap gap-3">
        <a href={p.live} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Live Project ↗</a>
        <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn">GitHub (Client) ↗</a>
      </div>
      <H>Challenges Faced</H>
      <List items={p.challenges} />
      <H>Future Improvements</H>
      <List items={p.future} />
    </main>
  );
}
