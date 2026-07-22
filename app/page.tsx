import Image from "next/image";

// ─────────────────────────────────────────────────────────────
// EDIT ME: fill in your real info below, then delete this comment.
// Everything wrapped in [BRACKETS] is a placeholder.
// ─────────────────────────────────────────────────────────────

const YOU = {
  name: "Yashay Singh",
  role: "Full-Stack Developer",
  tagline: "I build full-stack web, mobile, and AI-powered products.",
  bio: "IT student at Durban University of Technology, completing an Advanced Diploma in ICT. I've shipped features for a live SaaS product — billing pipelines, tracking dashboards — and move comfortably between frontend, backend, and database work across web, mobile, and desktop projects.",
  location: "Durban, South Africa",
  email: "yashay16s@gmail.com",
  github: "https://github.com/yashay16s-oss",
  linkedin: "[add your LinkedIn URL here, or delete this button below]",
  resumeUrl: "/resume.pdf", // your CV PDF is already dropped into /public
};

const STACK = [
  "C#",
  "Flutter",
  "React",
  "Python",
  "TypeScript",
  "SQL",
  "HTML & CSS",
  "Java",
  "Linux",
  "Database Design",
  "Git & GitHub",
];

const FACTS = [
  { label: "Location", value: "Durban, South Africa" },
  { label: "Currently", value: "Full-Stack Dev @ Looped.sh" },
  { label: "Education", value: "Adv. Diploma ICT, DUT" },
  { label: "Focus", value: "Web, mobile & AI" },
];

const EXPERIENCE = [
  {
    role: "Full-Stack Developer",
    org: "Looped.sh",
    period: "Jan 2026 – Jun 2026",
    points: [
      "Built and maintained billing/invoicing pipelines and user-facing tracking dashboards for a live SaaS product",
      "Worked across modern frontend frameworks and backend database design to ship features on an agile release schedule",
    ],
  },
  {
    role: "Web Designer",
    org: "Studio Worx (side business)",
    period: "2023 – Present",
    points: [
      "Design and manage WordPress websites, combining UI/UX design with marketing strategy to grow client visibility",
      "Optimise sites for performance and aesthetics, delivering measurable results for clients",
    ],
  },
  {
    role: "Temporary Administrative Assistant",
    org: "Astel Systems",
    period: "Jul 2026 – Dec 2026",
    points: [
      "Managed calendars, scheduled meetings, and handled correspondence for the team",
      "Performed data entry and maintained accurate records to keep operations running smoothly",
    ],
  },
  {
    role: "Student Admin Representative",
    org: "Durban University of Technology",
    period: "2023 – 2025",
    points: [
      "Assisted first-year students with registration and applications for three consecutive years, guiding them through the enrolment process",
    ],
  },
];

const EDUCATION = [
  {
    qualification: "Advanced Diploma in ICT",
    school: "Durban University of Technology",
    period: "In progress",
  },
  {
    qualification: "Diploma in ICT: Application Development",
    school: "Durban University of Technology",
    period: "Completed, 2023",
  },
];

const CERTIFICATES = [
  "AI Fundamentals",
  "Generative AI",
  "Responsible AI",
  "Microsoft Copilot",
  "Cisco Cybersecurity Essentials",
];

// One entry per real project. Keep the "hash" short — it's a stylistic
// nod to a commit id, not a real one. status is "shipped" | "building".
const PROJECTS = [
  {
    hash: "a3f9c1e",
    title: "Airline Reservation System",
    description:
      "Full airline booking system built with a team — awarded Best 1st-Year Software Project.",
    stack: ["C#"],
    status: "shipped",
    link: YOU.github, // no standalone repo for this one
  },
  {
    hash: "b1c88a2",
    title: "Campus Security Website",
    description:
      "Full website built from scratch, including its own database and querying system.",
    stack: ["C#", "HTML", "CSS"],
    status: "shipped",
    link: "https://github.com/yashay16s-oss/campus-security-system",
  },
  {
    hash: "d40f6ee",
    title: "Mobile Parking App",
    description:
      "Android app for finding and managing parking, built and tested on a virtual machine.",
    stack: ["Java", "Kotlin"],
    status: "shipped",
    link: "https://github.com/yashay16s-oss/Mobile-Campus-Parking-App",
  },
  {
    hash: "f08e772",
    title: "2D Game",
    description:
      "Personal project exploring core game development fundamentals.",
    stack: ["C#"],
    status: "building",
    link: "https://github.com/yashay16s-oss/Game-Development",
  },
];

function IconDownload({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 3v12" />
      <path d="m7 10 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

function IconMail({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function IconArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

function SectionKicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs text-signal tracking-widest uppercase mb-3">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-ink">
      {/* ── Nav ───────────────────────────────────────────── */}
      <nav className="sticky top-0 z-20 border-b border-line bg-ink/90 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4 text-sm font-mono text-muted">
          <span className="text-paper">{YOU.name}</span>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-signal transition-colors">
              about
            </a>
            <a
              href="#experience"
              className="hover:text-signal transition-colors"
            >
              experience
            </a>
            <a href="#work" className="hover:text-signal transition-colors">
              work
            </a>
            <a
              href="#contact"
              className="hover:text-signal transition-colors"
            >
              contact
            </a>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-6 pb-24">
        {/* ── Hero ──────────────────────────────────────────── */}
        <section className="grain rounded-lg border border-line bg-surface px-8 py-14 mt-8">
          <div className="flex flex-col-reverse sm:flex-row sm:items-center gap-8">
            <div className="flex-1">
              <p className="font-mono text-xs text-signal tracking-widest uppercase mb-4">
                $ whoami
              </p>
              <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight text-paper">
                {YOU.tagline}
              </h1>
              <p className="mt-4 max-w-xl text-muted">
                {YOU.role} based in {YOU.location} — currently shipping
                features for a live SaaS product and building side projects
                across web, mobile, and AI.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="rounded-md bg-signal px-5 py-2.5 font-mono text-sm font-medium text-ink hover:opacity-90 transition-opacity"
                >
                  Get in touch
                </a>
                <a
                  href={YOU.resumeUrl}
                  className="inline-flex items-center gap-1.5 rounded-md border border-line px-5 py-2.5 font-mono text-sm text-paper hover:border-signal hover:text-signal transition-colors"
                >
                  <IconDownload className="h-4 w-4" />
                  Resume
                </a>
                <a
                  href={YOU.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-line px-5 py-2.5 font-mono text-sm text-paper hover:border-signal hover:text-signal transition-colors"
                >
                  GitHub
                </a>
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

        {/* ── About ─────────────────────────────────────────── */}
        <section id="about" className="mt-20">
          <SectionKicker>$ cat about.md</SectionKicker>
          <h2 className="font-display text-xl font-bold text-paper mb-6">
            About
          </h2>

          <p className="max-w-2xl text-muted">{YOU.bio}</p>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {FACTS.map((fact) => (
              <div
                key={fact.label}
                className="rounded-lg border border-line bg-surface px-4 py-3"
              >
                <p className="font-mono text-[10px] uppercase tracking-wide text-muted">
                  {fact.label}
                </p>
                <p className="mt-1 text-sm font-medium text-paper">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {STACK.map((tech) => (
              <span
                key={tech}
                className="rounded border border-line bg-ink px-3 py-1 font-mono text-xs text-muted"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 space-y-2">
            {EDUCATION.map((e) => (
              <div
                key={e.qualification}
                className="flex flex-wrap items-baseline justify-between gap-x-4 text-sm"
              >
                <span className="text-paper">
                  {e.qualification}{" "}
                  <span className="text-muted">— {e.school}</span>
                </span>
                <span className="font-mono text-xs text-muted whitespace-nowrap">
                  {e.period}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-4 text-xs text-muted">
            Certified in: {CERTIFICATES.join(" · ")}
          </p>
        </section>

        {/* ── Experience ────────────────────────────────────── */}
        <section id="experience" className="mt-20">
          <SectionKicker>$ git log --author=yashay</SectionKicker>
          <h2 className="font-display text-xl font-bold text-paper mb-6">
            Experience
          </h2>

          <div className="space-y-4">
            {EXPERIENCE.map((job) => (
              <div
                key={`${job.org}-${job.period}`}
                className="rounded-lg border border-line bg-surface px-6 py-5"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="font-display font-medium text-paper">
                    {job.role}{" "}
                    <span className="font-body font-normal text-muted">
                      · {job.org}
                    </span>
                  </h3>
                  <span className="font-mono text-xs text-muted whitespace-nowrap">
                    {job.period}
                  </span>
                </div>
                <ul className="mt-3 space-y-1.5">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-2 text-sm text-muted">
                      <span className="text-signal">›</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Work: styled as a commit log ─────────────────── */}
        <section id="work" className="mt-20">
          <SectionKicker>$ ls -la projects/</SectionKicker>
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
                <div className="flex items-center justify-between pt-1">
                  <div className="flex gap-2">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] text-muted"
                      >
                        #{t.toLowerCase().replace(/\s+/g, "")}
                      </span>
                    ))}
                  </div>
                  <IconArrowUpRight className="h-3.5 w-3.5 text-muted opacity-0 group-hover:opacity-100 group-hover:text-signal transition-opacity" />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ── Contact ───────────────────────────────────────── */}
        <section id="contact" className="mt-20">
          <SectionKicker>$ ping yashay</SectionKicker>
          <h2 className="font-display text-xl font-bold text-paper mb-1">
            Get in touch
          </h2>
          <p className="text-sm text-muted mb-6">
            Open to full-stack roles and freelance work — reach out any of
            these ways.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${YOU.email}`}
              className="inline-flex items-center gap-1.5 rounded border border-line px-4 py-2 font-mono text-sm text-paper hover:border-signal hover:text-signal transition-colors"
            >
              <IconMail className="h-4 w-4" />
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

        <footer className="mt-24 pt-6 border-t border-line flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-muted">
          <span>
            © {new Date().getFullYear()} {YOU.name}
          </span>
          <span>Built with Next.js + Tailwind · Deployed on Netlify</span>
        </footer>
      </main>
    </div>
  );
}
