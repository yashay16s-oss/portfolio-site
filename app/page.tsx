import Image from "next/image";

// ─────────────────────────────────────────────────────────────
// EDIT ME: fill in your real info below, then delete this comment.
// Everything wrapped in [BRACKETS] is a placeholder.
// ─────────────────────────────────────────────────────────────

const YOU = {
  name: "Yashay Singh",
  role: "Full-Stack Developer",
  tagline: "I build full-stack web, mobile, and AI-powered products.",
  bioParagraphs: [
    "I'm an IT student at Durban University of Technology, completing an Advanced Diploma in ICT after finishing my Diploma in Application Development in 2023. I've shipped features for a live SaaS product at Looped.sh — billing pipelines and tracking dashboards — and I run a small web design practice, Studio Worx, building WordPress sites for local clients.",
    "Lately I've been building my own AI-powered tools: a real-time voice assistant for coding help, and a Discord bot that reviews code and diagnoses error screenshots. Alongside that I keep working on personal projects — from an award-winning airline reservation system in my first year to a 2D game I built to learn the fundamentals of game development.",
  ],
  location: "Durban, South Africa",
  email: "yashay16s@gmail.com",
  github: "https://github.com/yashay16s-oss",
  linkedin: "[add your LinkedIn URL here, or delete this button below]",
  resumeUrl: "/resume.pdf", // your CV PDF is already dropped into /public
};

const STATS = [
  { label: "Years building software", value: "3+" },
  { label: "Shipped projects", value: "4" },
  { label: "Certifications", value: "8" },
  { label: "Awards won", value: "1" },
];

const SERVICES = [
  {
    title: "Full-Stack Web Development",
    description:
      "Building complete web applications end to end — React/TypeScript frontends backed by C# and SQL, with clean database design underneath.",
  },
  {
    title: "AI-Powered Tools & Bots",
    description:
      "Building AI bots and assistants — a real-time voice assistant for coding help, and a Discord bot that reviews code and diagnoses errors.",
  },
  {
    title: "SaaS Product Engineering",
    description:
      "Shipped features for a live SaaS product: billing pipelines, tracking dashboards, and agile delivery on a real release schedule.",
  },
  {
    title: "Mobile App Development",
    description:
      "Android apps built with Java, Kotlin, and Flutter — from prototype to a working app tested end to end.",
  },
  {
    title: "Web Design for Businesses",
    description:
      "Designing and managing WordPress sites for local clients, pairing UI/UX with marketing strategy and performance optimisation.",
  },
];

const FACTS = [
  { label: "Location", value: "Durban, South Africa" },
  { label: "Currently", value: "Studying IT & building AI tools" },
  { label: "Education", value: "Advanced Diploma in ICT, DUT" },
  { label: "Focus", value: "Web, mobile & AI-powered products" },
];

const SKILLS: Record<string, string[]> = {
  Languages: ["C#", "Python", "TypeScript", "Java", "SQL", "HTML & CSS"],
  "Frameworks & Tools": [
    "React",
    "Flutter",
    "Git & GitHub",
    "Linux",
    "Database Design",
  ],
};

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

const CERTIFICATE_GROUPS: Record<string, string[]> = {
  "Microsoft & AI (2025)": [
    "AI Fundamentals",
    "Generative AI",
    "Responsible AI",
    "Microsoft Copilot",
    "Search Technology",
    "AI & Accessibility",
  ],
  "Cisco Networking Academy (2023)": [
    "Cybersecurity Essentials",
    "Introduction to Packet Tracer",
  ],
};

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

const FEATURED_PROJECT = {
  title: "Airline Reservation System",
  description:
    "A full airline booking system built with a team during my first year — handling reservations, seat selection, and passenger records end to end.",
  award: "Best 1st-Year Software Project",
  stack: ["C#"],
  link: YOU.github, // no standalone repo for this one
};

const PROJECTS = [
  {
    title: "Campus Security Website",
    description:
      "Full website built from scratch, including its own database and querying system.",
    stack: ["C#", "HTML", "CSS"],
    status: "live",
    link: "https://github.com/yashay16s-oss/campus-security-system",
  },
  {
    title: "Mobile Parking App",
    description:
      "Android app for finding and managing parking, built and tested on a virtual machine.",
    stack: ["Java", "Kotlin"],
    status: "live",
    link: "https://github.com/yashay16s-oss/Mobile-Campus-Parking-App",
  },
  {
    title: "2D Game",
    description: "Personal project exploring core game development fundamentals.",
    stack: ["C#"],
    status: "live",
    link: "https://github.com/yashay16s-oss/Game-Development",
  },
  {
    title: "Voice Buddy",
    description:
      "Real-time voice conversation with an AI coding assistant, using OpenAI's Realtime API, with persistent memory and hand-off to a stronger model for hard problems.",
    stack: ["TypeScript", "OpenAI Realtime API"],
    status: "live",
    link: "https://github.com/yashay16s-oss/voice-buddy",
  },
  {
    title: "Code Explainer (Kestrel)",
    description:
      "A Discord bot that reviews code, diagnoses error screenshots, and reviews whole GitHub repos on request.",
    stack: ["Discord API", "OpenAI"],
    status: "live",
    link: "https://github.com/yashay16s-oss/code-explainer",
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

function IconAward({ className = "" }: { className?: string }) {
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
      <circle cx="12" cy="8" r="6" />
      <path d="M8.5 13.5 7 22l5-3 5 3-1.5-8.5" />
    </svg>
  );
}

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-signal">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-ink">
      {/* ── Nav ───────────────────────────────────────────── */}
      <nav className="sticky top-0 z-20 border-b border-line bg-ink/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="font-display font-bold text-paper">
            {YOU.name}
          </span>
          <div className="hidden items-center gap-8 text-sm text-muted sm:flex">
            <a href="#about" className="transition-colors hover:text-paper">
              About
            </a>
            <a
              href="#services"
              className="transition-colors hover:text-paper"
            >
              Services
            </a>
            <a
              href="#experience"
              className="transition-colors hover:text-paper"
            >
              Experience
            </a>
            <a href="#work" className="transition-colors hover:text-paper">
              Work
            </a>
            <a
              href="#contact"
              className="transition-colors hover:text-paper"
            >
              Contact
            </a>
          </div>
          <a
            href={YOU.resumeUrl}
            className="inline-flex items-center gap-1.5 rounded-full bg-paper px-4 py-2 text-sm font-medium text-ink transition-opacity hover:opacity-90"
          >
            <IconDownload className="h-3.5 w-3.5" />
            Resume
          </a>
        </div>
      </nav>

      <main>
        {/* ── Hero ──────────────────────────────────────────── */}
        <section className="relative overflow-hidden px-6 pb-24 pt-20 sm:pb-32 sm:pt-28">
          <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-signal/10 blur-3xl" />
          <div className="pointer-events-none absolute left-[-6rem] top-40 h-72 w-72 rounded-full bg-ok/10 blur-3xl" />

          <div className="relative mx-auto max-w-5xl">
            <div className="flex flex-col-reverse items-start gap-12 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-xl">
                <p
                  className="animate-fade-in-up mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-signal"
                  style={{ animationDelay: "0ms" }}
                >
                  {YOU.role}
                </p>
                <h1
                  className="animate-fade-in-up font-display text-4xl font-bold leading-tight text-paper sm:text-5xl"
                  style={{ animationDelay: "80ms" }}
                >
                  {YOU.tagline}
                </h1>
                <p
                  className="animate-fade-in-up mt-5 text-lg text-muted"
                  style={{ animationDelay: "160ms" }}
                >
                  Based in {YOU.location} — building AI-powered tools and
                  full-stack side projects.
                </p>
                <div
                  className="animate-fade-in-up mt-8 flex flex-wrap gap-3"
                  style={{ animationDelay: "240ms" }}
                >
                  <a
                    href="#contact"
                    className="rounded-full bg-signal px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
                  >
                    Get in touch
                  </a>
                  <a
                    href={YOU.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-line px-6 py-3 text-sm font-medium text-paper transition-colors hover:border-paper"
                  >
                    View GitHub
                    <IconArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="animate-fade-in-up relative shrink-0">
                <div className="absolute inset-0 -z-10 rounded-2xl bg-signal/20 blur-2xl" />
                <Image
                  src="/avatar.jpg"
                  alt={YOU.name}
                  width={224}
                  height={224}
                  priority
                  className="h-44 w-44 rounded-2xl object-cover shadow-lg sm:h-56 sm:w-56"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats ─────────────────────────────────────────── */}
        <section className="border-t border-line px-6 py-10">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-3xl font-bold text-paper">
                  {s.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wide text-muted">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── About ─────────────────────────────────────────── */}
        <section id="about" className="border-t border-line px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <SectionEyebrow>About</SectionEyebrow>
            <h2 className="mb-10 font-display text-3xl font-bold text-paper">
              A bit about me
            </h2>

            <div className="grid gap-12 lg:grid-cols-5">
              <div className="space-y-4 leading-relaxed text-muted lg:col-span-3">
                {YOU.bioParagraphs.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>

              <div className="space-y-6 lg:col-span-2">
                <div className="rounded-2xl border border-line bg-surface p-6 shadow-sm">
                  <ul className="space-y-3">
                    {FACTS.map((fact) => (
                      <li
                        key={fact.label}
                        className="flex items-baseline justify-between gap-4 text-sm"
                      >
                        <span className="text-muted">{fact.label}</span>
                        <span className="text-right font-medium text-paper">
                          {fact.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  {Object.entries(SKILLS).map(([group, items]) => (
                    <div key={group} className="mb-4">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
                        {group}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {items.map((s) => (
                          <span
                            key={s}
                            className="rounded-full border border-line bg-surface px-3 py-1 text-xs text-paper"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-line pt-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
                    Education
                  </p>
                  <div className="space-y-2">
                    {EDUCATION.map((e) => (
                      <div key={e.qualification} className="text-sm">
                        <p className="font-medium text-paper">
                          {e.qualification}
                        </p>
                        <p className="text-muted">
                          {e.school} ·{" "}
                          <span className="font-mono text-xs">
                            {e.period}
                          </span>
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-line pt-4">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">
                    Achievements &amp; Certificates
                  </p>
                  <div className="mb-2 flex items-center gap-2 text-sm">
                    <IconAward className="h-4 w-4 shrink-0 text-signal" />
                    <span className="text-paper">
                      {FEATURED_PROJECT.award}
                    </span>
                  </div>
                  <div className="space-y-2">
                    {Object.entries(CERTIFICATE_GROUPS).map(
                      ([group, items]) => (
                        <p key={group} className="text-xs text-muted">
                          <span className="font-medium text-paper">
                            {group}:
                          </span>{" "}
                          {items.join(", ")}
                        </p>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Services ──────────────────────────────────────── */}
        <section id="services" className="border-t border-line px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <SectionEyebrow>What I do</SectionEyebrow>
            <h2 className="mb-10 font-display text-3xl font-bold text-paper">
              Capabilities
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {SERVICES.map((s) => (
                <div
                  key={s.title}
                  className="rounded-2xl border border-line bg-surface p-6 shadow-sm"
                >
                  <h3 className="font-display font-semibold text-paper">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Experience ────────────────────────────────────── */}
        <section id="experience" className="border-t border-line px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <SectionEyebrow>Experience</SectionEyebrow>
            <h2 className="mb-10 font-display text-3xl font-bold text-paper">
              Where I&apos;ve worked
            </h2>

            <div className="space-y-10 border-l border-line pl-8">
              {EXPERIENCE.map((job) => (
                <div key={`${job.org}-${job.period}`} className="relative">
                  <span className="absolute -left-[37px] top-1 h-2.5 w-2.5 rounded-full bg-signal ring-4 ring-ink" />
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-display text-lg font-semibold text-paper">
                      {job.role}{" "}
                      <span className="font-body font-normal text-muted">
                        · {job.org}
                      </span>
                    </h3>
                    <span className="whitespace-nowrap font-mono text-xs text-muted">
                      {job.period}
                    </span>
                  </div>
                  <ul className="mt-3 space-y-1.5">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="text-sm leading-relaxed text-muted"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Work ──────────────────────────────────────────── */}
        <section id="work" className="border-t border-line px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <SectionEyebrow>Work</SectionEyebrow>
            <h2 className="mb-10 font-display text-3xl font-bold text-paper">
              Selected projects
            </h2>

            <a
              href={FEATURED_PROJECT.link}
              target="_blank"
              rel="noreferrer"
              className="group mb-6 block rounded-2xl border border-line bg-surface p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <IconAward className="h-4 w-4 text-signal" />
                <span className="text-xs font-semibold uppercase tracking-wide text-signal">
                  {FEATURED_PROJECT.award}
                </span>
              </div>
              <h3 className="font-display text-2xl font-semibold text-paper transition-colors group-hover:text-signal">
                {FEATURED_PROJECT.title}
              </h3>
              <p className="mt-2 max-w-2xl text-muted">
                {FEATURED_PROJECT.description}
              </p>
              <p className="mt-4 text-xs text-muted">
                {FEATURED_PROJECT.stack.join(" · ")}
              </p>
            </a>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {PROJECTS.map((p) => (
                <a
                  key={p.title}
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex flex-col rounded-2xl border border-line bg-surface p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="mb-2 flex items-center gap-2">
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        p.status === "live" ? "bg-ok" : "bg-signal"
                      }`}
                    />
                    <span className="text-xs capitalize text-muted">
                      {p.status}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-paper transition-colors group-hover:text-signal">
                    {p.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-muted">
                    {p.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-xs text-muted">
                    <span>{p.stack.join(" · ")}</span>
                    <IconArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:text-signal group-hover:opacity-100" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact ───────────────────────────────────────── */}
        <section id="contact" className="px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="rounded-3xl bg-paper px-8 py-14 text-center sm:px-16">
              <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
                Let&apos;s work together
              </h2>
              <p className="mx-auto mt-3 max-w-md text-ink/70">
                Open to full-stack roles and freelance web projects. Based in
                Durban, happy to work remote.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${YOU.email}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-signal px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
                >
                  <IconMail className="h-4 w-4" />
                  {YOU.email}
                </a>
                <a
                  href={YOU.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-ink/20 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink/40"
                >
                  GitHub
                </a>
                {YOU.linkedin.startsWith("http") && (
                  <a
                    href={YOU.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-ink/20 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink/40"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line px-6 py-8">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2 text-xs text-muted">
          <span>
            © {new Date().getFullYear()} {YOU.name}
          </span>
          <span>Built with Next.js & Tailwind</span>
        </div>
      </footer>
    </div>
  );
}
