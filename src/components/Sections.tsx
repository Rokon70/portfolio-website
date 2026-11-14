import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Quote, Star, Github, ExternalLink, Sparkles } from "lucide-react";
import { profile, skills, education, experience, projects, services, testimonials, type Project } from "@/data/portfolio";
import Reveal from "./Reveal";
import SkillBar from "./SkillBar";

const Wrap = ({ id, tag, title, sub, children }: { id: string; tag: string; title: string; sub: string; children: React.ReactNode }) => (
  <section id={id} className="relative mx-auto max-w-6xl px-5 py-20 sm:py-24">
    <Reveal className="mb-12 text-center">
      <p className="eyebrow">{tag}</p>
      <h2 className="heading mx-auto w-fit">{title}</h2>
      <p className="mx-auto mt-3 max-w-2xl text-lg text-slate-500 dark:text-slate-400">{sub}</p>
    </Reveal>
    {children}
  </section>
);

export function About() {
  return (
    <Wrap id="about" tag="01 · About" title="A Developer with a Designer's Eye" sub="12+ years of visual design experience, now building fast and pixel-perfect web applications.">
      <div className="grid gap-6 lg:grid-cols-[1.65fr_1fr]">
        <Reveal className="card relative overflow-hidden">
          <div className="bg-dots absolute inset-0 opacity-40" />
          <div className="relative space-y-4 text-lg leading-relaxed">
            {profile.about.map((p) => <p key={p}>{p}</p>)}
            <p className="gradient-text font-display text-2xl font-bold">— Rokon Sarker</p>
          </div>
        </Reveal>
        <div className="space-y-6">
          <Reveal delay={100}>
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand to-accent p-7 text-white shadow-xl shadow-brand/30">
              <Sparkles size={28} className="mb-3 opacity-90" />
              <p className="font-display text-4xl font-extrabold">12+ Years</p>
              <p className="mt-1 text-sm font-medium opacity-90">of visual design &amp; retouching excellence — now crafting modern web experiences.</p>
            </div>
          </Reveal>
          <Reveal delay={160} className="card">
            <h3 className="mb-4 font-display text-lg font-bold">Quick Facts</h3>
            <ul className="space-y-3.5">
              {profile.facts.map(([i, t]) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand/15 to-accent/15 text-lg">{i}</span>
                  <span className="text-sm font-medium">{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={220} className="card">
            <h3 className="mb-4 font-display text-lg font-bold">Interests</h3>
            <div className="flex flex-wrap gap-2">{profile.interests.map((i) => <span key={i} className="tag">{i}</span>)}</div>
          </Reveal>
        </div>
      </div>
    </Wrap>
  );
}

const catIcons: Record<string, string> = { Frontend: "⚡", Backend: "🛠️", Tools: "🧰", Design: "🎨" };

export function Skills() {
  return (
    <Wrap id="skills" tag="02 · Skills" title="Technical Arsenal" sub="Technologies and tools I use to bring ideas to life.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {Object.entries(skills).map(([cat, list], i) => (
          <Reveal key={cat} delay={i * 100} className="h-full">
            <div className="card card-hover h-full">
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand/15 to-accent/15 text-xl">{catIcons[cat]}</span>
                <h3 className="font-display text-lg font-bold">{cat}</h3>
              </div>
              {list.map(([name, pct]) => <SkillBar key={name} name={name} pct={pct} />)}
            </div>
          </Reveal>
        ))}
      </div>
    </Wrap>
  );
}

function ProjectCard({ p, n }: { p: Project; n: number }) {
  return (
    <article className="card card-hover group flex h-full flex-col overflow-hidden !p-0">
      <div className="relative overflow-hidden">
        <Image src={p.image} alt={`${p.name} screenshot`} width={400} height={220} unoptimized className="h-52 w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
        <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 font-display text-xs font-bold text-white backdrop-blur">0{n}</span>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-display text-xl font-bold">{p.name}</h3>
        <p className="line-clamp-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{p.description}</p>
        <div className="flex flex-wrap gap-2">{p.stack.slice(0, 3).map((t) => <span key={t} className="tag">{t}</span>)}</div>
        <div className="mt-auto flex items-center gap-2 pt-2">
          <Link href={`/projects/${p.slug}`} className="btn btn-primary !px-5 !py-2 text-sm">Details <ArrowUpRight size={15} /></Link>
          <a href={p.live} target="_blank" rel="noopener noreferrer" aria-label={`${p.name} live`} className="btn btn-glass !p-2.5"><ExternalLink size={16} /></a>
          <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label={`${p.name} github`} className="btn btn-glass !p-2.5"><Github size={16} /></a>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const [first, ...rest] = projects;
  return (
    <Wrap id="projects" tag="03 · Projects" title="Featured Projects" sub="Real projects I’ve designed and built. Open a card for full details.">
      <Reveal className="mb-6">
        <article className="card group relative grid overflow-hidden !p-0 md:grid-cols-2">
          <div className="absolute right-6 top-4 hidden font-display text-7xl font-extrabold text-slate-100 dark:text-white/5 md:block">01</div>
          <div className="relative overflow-hidden md:order-2">
            <Image src={first.image} alt={`${first.name} screenshot`} width={600} height={330} unoptimized className="h-full min-h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
            <span className="absolute left-4 top-4 rounded-full bg-gradient-to-r from-brand to-accent px-4 py-1.5 text-xs font-bold text-white shadow-lg shadow-brand/40">★ Featured</span>
          </div>
          <div className="flex flex-col gap-4 p-8 md:order-1">
            <h3 className="font-display text-2xl font-bold">{first.name}</h3>
            <p className="leading-relaxed text-slate-500 dark:text-slate-400">{first.description}</p>
            <div className="flex flex-wrap gap-2">{first.stack.map((t) => <span key={t} className="tag">{t}</span>)}</div>
            <div className="mt-auto flex flex-wrap gap-3 pt-2">
              <Link href={`/projects/${first.slug}`} className="btn btn-primary">View Details <ArrowUpRight size={16} /></Link>
              <a href={first.live} target="_blank" rel="noopener noreferrer" className="btn">Live ↗</a>
            </div>
          </div>
        </article>
      </Reveal>
      <div className="grid gap-6 sm:grid-cols-2">
        {rest.map((p, i) => <Reveal key={p.slug} delay={i * 100} className="h-full"><ProjectCard p={p} n={i + 2} /></Reveal>)}
      </div>
    </Wrap>
  );
}

export function Services() {
  return (
    <Wrap id="services" tag="04 · Services" title="What I Do" sub="From idea to deployment — how I can help you build something great.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 80} className="h-full">
            <div className="card card-hover group relative h-full overflow-hidden">
              <div className="mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand/15 to-accent/10 text-2xl shadow-inner transition group-hover:scale-110">{s.icon}</div>
              <h3 className="mb-1.5 font-display text-lg font-bold">{s.title}</h3>
              <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Wrap>
  );
}

type Item = { period: string; title: string; place: string; note: string };
const Timeline = ({ items }: { items: Item[] }) => (
  <div className="relative max-w-3xl space-y-5 before:absolute before:bottom-2 before:left-[7px] before:top-2 before:w-0.5 before:bg-gradient-to-b before:from-brand before:to-accent/20">
    {items.map((i, n) => (
      <Reveal key={i.title + i.period} delay={n * 60}>
        <div className="relative pl-10">
          <span className="absolute left-0 top-6 h-4 w-4 rounded-full border-4 border-slate-100 bg-brand shadow-md shadow-brand/40 dark:border-[#0a0a17]" />
          <div className="card card-hover !p-5">
            <span className="tag !px-2.5 !py-0.5 !text-[11px]">{i.period}</span>
            <h3 className="mt-2 font-display text-lg font-bold">{i.title}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">{i.place}{i.note && <span className="text-brand"> · {i.note}</span>}</p>
          </div>
        </div>
      </Reveal>
    ))}
  </div>
);

export const Experience = () => <Wrap id="experience" tag="05 · Experience" title="Experience" sub="Where I’ve applied my skills over the years."><Timeline items={experience} /></Wrap>;
export const Education = () => <Wrap id="education" tag="06 · Education" title="Education" sub="My academic background."><Timeline items={education} /></Wrap>;

export function Testimonials() {
  return (
    <Wrap id="testimonials" tag="07 · Reviews" title="What Clients Say" sub="Real feedback from real clients I’ve worked with.">
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 100} className="h-full">
            <blockquote className="card card-hover relative h-full overflow-hidden">
              <Quote size={44} className="absolute -right-2 -top-2 rotate-12 text-brand/10" />
              <div className="mb-3 flex gap-1">{[...Array(5)].map((_, s) => <Star key={s} size={15} className="fill-amber-400 text-amber-400" />)}</div>
              <p className="relative leading-relaxed text-slate-600 dark:text-slate-300">{t.text}</p>
              <footer className="mt-6 flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand to-accent font-display text-lg font-bold text-white shadow-lg shadow-brand/30">{t.name[0]}</span>
                <span><b className="block">{t.name}</b><span className="text-sm text-slate-500 dark:text-slate-400">{t.role}</span></span>
              </footer>
            </blockquote>
          </Reveal>
        ))}
      </div>
    </Wrap>
  );
}
