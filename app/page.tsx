import Image from "next/image";

// ─────────────────────────────────────────────────────────────
// EDIT ME: fill in your real info below, then delete this comment.
// Everything wrapped in [BRACKETS] is a placeholder.
// ─────────────────────────────────────────────────────────────

const YOU = {
  name: "Yashay Singh",
  tagline: "I build full-stack web, mobile, and AI tools.",
  location: "Durban, South Africa",
  email: "yashay16s@gmail.com",
  github: "https://github.com/yashay16s-oss",
  linkedin: "[add your LinkedIn URL here, or delete this button below]",
  resumeUrl: "/resume.pdf", // your CV PDF is already dropped into /public
};

const STACK = ["C#", "Flutter", "React", "Python", "TypeScript"];

// One entry per real project. Swap each "link" for the actual GitHub repo
// once you've pushed it — for now they point at your profile so nothing 404s.
// Keep the "hash" short — it's a stylistic nod to a commit id, not a real one.
// status is "shipped" | "building".
const PROJECTS = [
  {
    hash: "a3f9c1e",
    title: "Airline Reservation System",
    description:
      "Full airline booking system built with a team — awarded Best 1st-Year Software Project.",
    stack: ["C#"],
    status: "shipped",
    link: YOU.github, // TODO: replace with this project's repo URL
  },
  {
    hash: "b1c88a2",
    title: "Campus Security Website",
    description:
      "Full website built from scratch, including its own database and querying system.",
    stack: ["C#", "HTML", "CSS"],
    status: "shipped",
    link: YOU.github, // TODO: replace with this project's repo URL
  },
  {
    hash: "d40f6ee",
    title: "Mobile Parking App",
    description:
      "Android app for finding and managing parking, built and tested on a virtual machine.",
    stack: ["Java", "Kotlin"],
    status: "shipped",
    link: YOU.github, // TODO: replace with this project's repo URL
  },
  {
    hash: "f08e772",
    title: "2D Game",
    description:
      "Personal project exploring core game development fundamentals.",
    stack: ["C#"],
    status: "building",
    link: YOU.github, // TODO: replace with this project's repo URL
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 pb-24">
      {/* ── Nav ───────────────────────────────────────────── */}
      <nav className="flex items-center justify-between py-8 text-sm font-mono text-muted">
        <span className="text-paper">{YOU.name}</span>
        <div className="flex gap-6">
          <a href="#work" className="hover:text-signal transition-colors">
            work
          </a>
          <a href="#contact" className="hover:text-signal transition-colors">
            contact
          </a>
          <a
            href={YOU.resumeUrl}
            className="hover:text-signal transition-colors"
          >
            resume
          </a>
        </div>
      </nav>

      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="grain rounded-lg border border-line bg-surface px-8 py-14 mt-4">
        <div className="flex flex-col-reverse sm:flex-row sm:items-center gap-8">
          <div className="flex-1">
            <p className="font-mono text-xs text-signal tracking-widest uppercase mb-4">
              $ whoami
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight text-paper">
              {YOU.tagline}
            </h1>
            <p className="mt-4 max-w-xl text-muted">
              Based in {YOU.location}. Working across{" "}
              {STACK.slice(0, -1).join(", ")} and {STACK[STACK.length - 1]} to
              ship web, mobile, and AI-powered products.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {STACK.map((tech) => (
                <span
                  key={tech}
                  className="rounded border border-line bg-ink px-3 py-1 font-mono text-xs text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="shrink-0">
            <Image
              src="/avatar.jpg"
              alt={YOU.name}
              width={176}
              height={176}
              priority
              className="rounded-lg border border-line object-cover w-32 h-32 sm:w-44 sm:h-44"
            />
          </div>
        </div>
      </section>

      {/* ── Work: styled as a commit log ─────────────────── */}
      <section id="work" className="mt-20">
        <h2 className="font-display text-xl font-bold text-paper mb-1">
          Recent commits
        </h2>
        <p className="text-sm text-muted mb-6">
          A running log of things I&apos;ve built.
        </p>

        <div className="border border-line rounded-lg divide-y divide-line overflow-hidden">
          {PROJECTS.map((p) => (
            <a
              key={p.hash}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col gap-2 px-6 py-5 bg-surface hover:bg-ink transition-colors"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-signal">
                    {p.hash}
                  </span>
                  <h3 className="font-display font-medium text-paper group-hover:text-signal transition-colors">
                    {p.title}
                  </h3>
                </div>
                <span
                  className={`font-mono text-[10px] uppercase tracking-wide rounded px-2 py-0.5 ${
                    p.status === "shipped"
                      ? "text-ok border border-ok/40"
                      : "text-muted border border-line"
                  }`}
                >
                  {p.status}
                </span>
              </div>
              <p className="text-sm text-muted">{p.description}</p>
              <div className="flex gap-2 pt-1">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] text-muted"
                  >
                    #{t.toLowerCase().replace(/\s+/g, "")}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── Contact ───────────────────────────────────────── */}
      <section id="contact" className="mt-20">
        <h2 className="font-display text-xl font-bold text-paper mb-1">
          Get in touch
        </h2>
        <p className="text-sm text-muted mb-6">
          Open to opportunities — reach out any of these ways.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${YOU.email}`}
            className="rounded border border-line px-4 py-2 font-mono text-sm text-paper hover:border-signal hover:text-signal transition-colors"
          >
            email
          </a>
          <a
            href={YOU.github}
            target="_blank"
            rel="noreferrer"
            className="rounded border border-line px-4 py-2 font-mono text-sm text-paper hover:border-signal hover:text-signal transition-colors"
          >
            github
          </a>
          {YOU.linkedin.startsWith("http") && (
            <a
              href={YOU.linkedin}
              target="_blank"
              rel="noreferrer"
              className="rounded border border-line px-4 py-2 font-mono text-sm text-paper hover:border-signal hover:text-signal transition-colors"
            >
              linkedin
            </a>
          )}
        </div>
      </section>

      <footer className="mt-24 pt-6 border-t border-line text-xs font-mono text-muted">
        {YOU.name} · built with Next.js + Tailwind
      </footer>
    </main>
  );
}
