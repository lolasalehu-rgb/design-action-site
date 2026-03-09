"use client";

import { useState, useEffect, useRef } from "react";

/* ────────────────────────────────────────────────────────────────
   design-action landing page
   Light, warm, designer-friendly — Genie Studio / Kiro.dev inspired
   ──────────────────────────────────────────────────────────────── */

// ─── SVG Icons (replacing emoji) ────────────────────────────────

function MeetingIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 18.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      <path d="M10 9.5v5l4-2.5-4-2.5Z" fill="currentColor" />
    </svg>
  );
}

function TaskIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10l2.5 2.5L15 8" />
      <path d="M8 16h8" />
    </svg>
  );
}

function ChatIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
    </svg>
  );
}

function DesignIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5Z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}

function VideoIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="15" height="16" rx="3" />
      <path d="M17 9l5-3v12l-5-3V9Z" />
    </svg>
  );
}

// ─── Hero SVG Illustration ──────────────────────────────────────

function HeroIllustration() {
  return (
    <div className="relative mt-16 mx-auto max-w-4xl" aria-hidden="true">
      <svg viewBox="0 0 960 320" fill="none" className="w-full h-auto">
        {/* Left: Scattered sources */}
        <g className="animate-scatter" style={{ "--tx": "-6px", "--ty": "-8px", "--tr": "-2deg" } as React.CSSProperties}>
          <rect x="30" y="40" width="140" height="70" rx="12" fill="#ede8ff" stroke="#7c5cfc" strokeWidth="1.5" opacity="0.9" />
          <circle cx="60" cy="75" r="12" fill="#7c5cfc" opacity="0.2" />
          <rect x="80" y="62" width="70" height="6" rx="3" fill="#7c5cfc" opacity="0.3" />
          <rect x="80" y="76" width="50" height="4" rx="2" fill="#7c5cfc" opacity="0.15" />
        </g>

        <g className="animate-scatter" style={{ "--tx": "8px", "--ty": "10px", "--tr": "3deg" } as React.CSSProperties}>
          <rect x="60" y="130" width="140" height="70" rx="12" fill="#fef0ed" stroke="#f27059" strokeWidth="1.5" opacity="0.9" />
          <circle cx="90" cy="165" r="12" fill="#f27059" opacity="0.2" />
          <rect x="110" y="152" width="70" height="6" rx="3" fill="#f27059" opacity="0.3" />
          <rect x="110" y="166" width="50" height="4" rx="2" fill="#f27059" opacity="0.15" />
        </g>

        <g className="animate-scatter" style={{ "--tx": "-10px", "--ty": "6px", "--tr": "-4deg" } as React.CSSProperties}>
          <rect x="20" y="220" width="140" height="70" rx="12" fill="#e8f8f5" stroke="#2db5a3" strokeWidth="1.5" opacity="0.9" />
          <circle cx="50" cy="255" r="12" fill="#2db5a3" opacity="0.2" />
          <rect x="70" y="242" width="70" height="6" rx="3" fill="#2db5a3" opacity="0.3" />
          <rect x="70" y="256" width="50" height="4" rx="2" fill="#2db5a3" opacity="0.15" />
        </g>

        <g className="animate-scatter" style={{ "--tx": "6px", "--ty": "-10px", "--tr": "2deg" } as React.CSSProperties}>
          <rect x="190" y="60" width="120" height="60" rx="12" fill="#ede8ff" stroke="#7c5cfc" strokeWidth="1" opacity="0.6" />
          <rect x="210" y="78" width="60" height="5" rx="2.5" fill="#7c5cfc" opacity="0.2" />
          <rect x="210" y="90" width="40" height="4" rx="2" fill="#7c5cfc" opacity="0.1" />
        </g>

        <g className="animate-scatter" style={{ "--tx": "-8px", "--ty": "-6px", "--tr": "5deg" } as React.CSSProperties}>
          <rect x="200" y="200" width="120" height="60" rx="12" fill="#fef0ed" stroke="#f27059" strokeWidth="1" opacity="0.6" />
          <rect x="220" y="218" width="60" height="5" rx="2.5" fill="#f27059" opacity="0.2" />
          <rect x="220" y="230" width="40" height="4" rx="2" fill="#f27059" opacity="0.1" />
        </g>

        {/* Center: Convergence flow */}
        <g opacity="0.6">
          <path d="M340 75 C400 75, 420 160, 460 160" stroke="#7c5cfc" strokeWidth="2" strokeDasharray="6 4" fill="none" />
          <path d="M340 165 C400 165, 420 160, 460 160" stroke="#f27059" strokeWidth="2" strokeDasharray="6 4" fill="none" />
          <path d="M340 255 C400 255, 420 160, 460 160" stroke="#2db5a3" strokeWidth="2" strokeDasharray="6 4" fill="none" />
        </g>

        {/* Center pill: design-action */}
        <rect x="460" y="130" width="160" height="60" rx="30" fill="#7c5cfc" />
        <text x="540" y="166" textAnchor="middle" fill="white" fontSize="14" fontWeight="700" fontFamily="var(--font-sans)">design-action</text>

        {/* Right-side flow lines */}
        <g opacity="0.6">
          <path d="M620 160 C660 160, 680 80, 700 80" stroke="#7c5cfc" strokeWidth="2" fill="none" />
          <path d="M620 160 C660 160, 680 160, 700 160" stroke="#f27059" strokeWidth="2" fill="none" />
          <path d="M620 160 C660 160, 680 240, 700 240" stroke="#2db5a3" strokeWidth="2" fill="none" />
        </g>

        {/* Right: Grounded artifact card */}
        <g>
          <rect x="700" y="30" width="240" height="260" rx="16" fill="white" stroke="#e8e5df" strokeWidth="1.5" />
          {/* Header */}
          <rect x="700" y="30" width="240" height="44" rx="16" fill="#faf9f7" />
          <rect x="700" y="58" width="240" height="16" fill="#faf9f7" />
          <circle cx="724" cy="52" r="5" fill="#2db5a3" />
          <text x="738" y="56" fill="#1a1a1a" fontSize="11" fontWeight="700" fontFamily="var(--font-sans)">Journey Map — Onboarding</text>

          {/* Pain point row */}
          <rect x="716" y="86" width="208" height="52" rx="8" fill="#fef0ed" opacity="0.5" />
          <rect x="728" y="96" width="80" height="5" rx="2.5" fill="#f27059" opacity="0.6" />
          <rect x="728" y="107" width="140" height="4" rx="2" fill="#1a1a1a" opacity="0.15" />
          {/* Citation dots */}
          <circle cx="728" cy="125" r="3" fill="#7c5cfc" />
          <circle cx="738" cy="125" r="3" fill="#f27059" />
          <circle cx="748" cy="125" r="3" fill="#2db5a3" />
          <text x="758" y="128" fill="#7a7a7a" fontSize="8" fontFamily="var(--font-sans)">3 sources</text>

          {/* Decision row */}
          <rect x="716" y="148" width="208" height="52" rx="8" fill="#ede8ff" opacity="0.5" />
          <rect x="728" y="158" width="60" height="5" rx="2.5" fill="#7c5cfc" opacity="0.6" />
          <rect x="728" y="169" width="160" height="4" rx="2" fill="#1a1a1a" opacity="0.15" />
          <circle cx="728" cy="187" r="3" fill="#7c5cfc" />
          <circle cx="738" cy="187" r="3" fill="#f27059" />
          <text x="748" y="190" fill="#7a7a7a" fontSize="8" fontFamily="var(--font-sans)">2 sources</text>

          {/* Quote row */}
          <rect x="716" y="210" width="208" height="52" rx="8" fill="#e8f8f5" opacity="0.5" />
          <rect x="728" y="220" width="70" height="5" rx="2.5" fill="#2db5a3" opacity="0.6" />
          <rect x="728" y="231" width="120" height="4" rx="2" fill="#1a1a1a" opacity="0.15" />
          <circle cx="728" cy="249" r="3" fill="#7c5cfc" />
          <text x="738" y="252" fill="#7a7a7a" fontSize="8" fontFamily="var(--font-sans)">1 source</text>
        </g>
      </svg>
    </div>
  );
}

// ─── Shared components ───────────────────────────────────────────

function Section({
  children,
  id,
  alt = false,
  className = "",
}: {
  children: React.ReactNode;
  id?: string;
  alt?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={id}
      className={`
        px-6 py-20 md:py-28
        ${alt ? "bg-surface-alt" : "bg-background"}
        transition-[opacity,transform] duration-700 ease-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        ${className}
      `}
    >
      <div className="mx-auto max-w-5xl">{children}</div>
    </section>
  );
}

function Badge({
  children,
  color = "accent",
}: {
  children: React.ReactNode;
  color?: "accent" | "coral" | "teal";
}) {
  const colors = {
    accent: "bg-accent-light text-accent",
    coral: "bg-coral-light text-coral",
    teal: "bg-teal-light text-teal",
  };
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-bold tracking-wide ${colors[color]}`}
    >
      {children}
    </span>
  );
}

// ─── Sticky Nav ──────────────────────────────────────────────────

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#problem", label: "Problem" },
    { href: "#how", label: "How it works" },
    { href: "#tiers", label: "Tiers" },
    { href: "#evidence", label: "Evidence" },
  ];

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${
          scrolled
            ? "bg-surface/90 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-transparent"
        }
      `}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-bold tracking-tight text-foreground">
          design-action
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 text-sm text-foreground-muted md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 rounded-sm">
              {l.label}
            </a>
          ))}
          <a
            href="#install"
            className="rounded-lg bg-accent px-4 py-2 text-white font-bold hover:bg-accent-hover active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            Get started
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-surface-alt transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <svg className="w-5 h-5 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {menuOpen ? (
              <>
                <path d="M18 6L6 18" />
                <path d="M6 6l12 12" />
              </>
            ) : (
              <>
                <path d="M3 7h18" />
                <path d="M3 12h18" />
                <path d="M3 17h18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden border-t border-border bg-surface/95 backdrop-blur-md px-6 space-y-3 overflow-hidden transition-[max-height,opacity,padding] duration-300 ease-out ${
          menuOpen ? "max-h-64 opacity-100 py-4" : "max-h-0 opacity-0 py-0 border-transparent"
        }`}
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            className="block text-sm text-foreground-secondary hover:text-foreground transition-colors py-1"
          >
            {l.label}
          </a>
        ))}
        <a
          href="#install"
          onClick={() => setMenuOpen(false)}
          className="block rounded-lg bg-accent px-4 py-2 text-center text-sm text-white font-bold hover:bg-accent-hover transition-colors"
        >
          Get started
        </a>
      </div>
    </nav>
  );
}

// ─── Hero ────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative overflow-hidden bg-background px-6 pt-32 pb-16 md:pt-40 md:pb-20">
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute top-20 left-1/4 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute bottom-10 right-1/4 h-48 w-48 rounded-full bg-coral/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <Badge>Claude Code Plugin</Badge>
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl md:leading-[1.1]">
            Turn scattered context into{" "}
            <span className="text-accent">actionable design</span>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-foreground-secondary md:text-xl">
            design-action synthesizes context across your work streams,
            stakeholders, and tools and turns that into actions that do
            your work for you.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <a
              href="#install"
              className="rounded-xl bg-accent px-6 py-3 text-base font-bold text-white shadow-sm hover:bg-accent-hover hover:shadow-md active:scale-[0.98] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              Get started — it&apos;s free
            </a>
            <a
              href="#how"
              className="rounded-xl border border-border px-6 py-3 text-base text-foreground-secondary hover:border-foreground-muted hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              See how it works
            </a>
          </div>
        </div>

        {/* Hero SVG illustration */}
        <HeroIllustration />
      </div>
    </section>
  );
}

// ─── Problem ─────────────────────────────────────────────────────

function Problem() {
  const sources = [
    {
      icon: <MeetingIcon className="w-6 h-6 text-accent" />,
      title: "Meeting transcripts",
      desc: "Decisions from PM syncs, design reviews, sprint retros",
      tools: "Granola · Otter · Fireflies · Google Meet",
    },
    {
      icon: <TaskIcon className="w-6 h-6 text-coral" />,
      title: "Task trackers",
      desc: "Requirements, acceptance criteria, design tickets",
      tools: "Jira · Linear · GitHub Issues",
    },
    {
      icon: <ChatIcon className="w-6 h-6 text-teal" />,
      title: "Chat threads",
      desc: "Quick decisions, feedback, stakeholder requests",
      tools: "Slack · Discord · Teams",
    },
    {
      icon: <DesignIcon className="w-6 h-6 text-accent" />,
      title: "Design tools",
      desc: "Comments, annotations, review feedback",
      tools: "Figma · Penpot",
    },
    {
      icon: <VideoIcon className="w-6 h-6 text-coral" />,
      title: "Video recordings",
      desc: "User interviews, usability tests, demos",
      tools: "Loom · Grain · local files",
    },
  ];

  return (
    <Section id="problem" alt>
      <div className="text-center">
        <Badge color="coral">The problem</Badge>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Design work comes from everywhere.
          <br />
          <span className="text-foreground-muted">Deliver it all in one click.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground-secondary leading-relaxed">
          You&apos;re in 10 meetings a week across 3 workstreams. Decisions from
          Monday&apos;s sync are buried by Wednesday. Painpoints from customer
          discovery are scattered across 4 tools. Different teams in the org
          have competing priorities.
        </p>
      </div>

      {/* Mixed layout: 2-column top + 3-column bottom for variety */}
      <div className="mt-14 space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {sources.slice(0, 2).map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-border bg-surface p-6 transition-shadow hover:shadow-md hover:border-accent/20"
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 rounded-xl bg-surface-alt p-2.5">
                  {s.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-sm text-foreground-secondary leading-relaxed">
                    {s.desc}
                  </p>
                  <p className="mt-2 text-xs text-foreground-muted">{s.tools}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {sources.slice(2).map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-border bg-surface p-6 transition-shadow hover:shadow-md hover:border-accent/20"
            >
              <div className="rounded-xl bg-surface-alt p-2.5 w-fit">
                {s.icon}
              </div>
              <h3 className="mt-3 text-base font-bold text-foreground">
                {s.title}
              </h3>
              <p className="mt-1 text-sm text-foreground-secondary leading-relaxed">
                {s.desc}
              </p>
              <p className="mt-2 text-xs text-foreground-muted">{s.tools}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ─── How It Works (5-phase pipeline) ─────────────────────────────

function HowItWorks() {
  const phases = [
    {
      num: "01",
      title: "Gather",
      desc: "Searches your meeting tool, task tracker, and chat for evidence related to your topic. Tiered loading: discover → summarize → deep-dive.",
      color: "text-accent",
      bg: "bg-accent-light",
      border: "border-accent/20",
    },
    {
      num: "02",
      title: "Synthesize",
      desc: "Extracts decisions, pain points, feature proposals, open questions, and verbatim quotes. Tracks frequency across sources.",
      color: "text-coral",
      bg: "bg-coral-light",
      border: "border-coral/20",
    },
    {
      num: "03",
      title: "Suggest",
      desc: "Recommends the best artifact type based on what was discussed — journey map, prototype, wireframes, or research synthesis.",
      color: "text-teal",
      bg: "bg-teal-light",
      border: "border-teal/20",
    },
    {
      num: "04",
      title: "Create",
      desc: "Builds the artifact with every element citing its source. Uses your design tool if configured, or creates markdown/HTML.",
      color: "text-accent",
      bg: "bg-accent-light",
      border: "border-accent/20",
    },
    {
      num: "05",
      title: "Track",
      desc: "Creates Design Decision Records, updates your backlog, suggests automation for repeatable workflows.",
      color: "text-coral",
      bg: "bg-coral-light",
      border: "border-coral/20",
    },
  ];

  return (
    <Section id="how">
      <div className="text-center">
        <Badge color="teal">How it works</Badge>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Five phases. One command.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground-secondary leading-relaxed">
          Run{" "}
          <code className="rounded-md bg-surface-alt px-2 py-0.5 text-base font-bold text-accent">
            /design-action --topic &quot;onboarding&quot;
          </code>{" "}
          and the pipeline does the rest.
        </p>
      </div>

      {/* Horizontal pipeline on desktop, vertical on mobile */}
      <div className="mt-14">
        {/* Desktop: horizontal cards with connecting line */}
        <div className="hidden md:block relative">
          {/* Connecting line */}
          <div className="absolute top-[44px] left-[10%] right-[10%] h-px bg-border" aria-hidden="true" />

          <div className="grid grid-cols-5 gap-4">
            {phases.map((phase) => (
              <div key={phase.num} className="relative text-center">
                <div
                  className={`relative z-10 mx-auto flex h-[88px] w-[88px] items-center justify-center rounded-2xl border-2 ${phase.border} ${phase.bg} transition-transform hover:scale-105`}
                >
                  <span className={`text-2xl font-bold ${phase.color}`}>
                    {phase.num}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-bold text-foreground">
                  {phase.title}
                </h3>
                <p className="mt-2 text-sm text-foreground-secondary leading-relaxed">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden space-y-0">
          {phases.map((phase, i) => (
            <div
              key={phase.num}
              className="group relative flex gap-5 pb-8 last:pb-0"
            >
              {i < phases.length - 1 && (
                <div className="absolute left-[22px] top-12 bottom-0 w-px bg-border" aria-hidden="true" />
              )}
              <div
                className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 ${phase.border} bg-surface text-sm font-bold ${phase.color}`}
              >
                {phase.num}
              </div>
              <div className="pt-1.5">
                <h3 className="text-lg font-bold text-foreground">
                  {phase.title}
                </h3>
                <p className="mt-1.5 text-sm text-foreground-secondary leading-relaxed max-w-lg">
                  {phase.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ─── Value Tiers ─────────────────────────────────────────────────

function Tiers() {
  const tiers = [
    {
      name: "Core",
      tagline: "Day-one value",
      desc: "Run /design-action with any meeting source. Get synthesis + artifacts with citations immediately.",
      features: [
        "5-phase evidence pipeline",
        "9 artifact templates",
        "Full source citations",
        "Works with markdown notes",
      ],
      requirements: "Any meeting source + Claude Code",
      color: "accent" as const,
      highlight: false,
    },
    {
      name: "+ Tracking",
      tagline: "Cross-stream clarity",
      desc: "Add a task tracker for backlog management, design decision records, and /scan for proactive discovery.",
      features: [
        "Everything in Core",
        "Design Decision Records",
        "Backlog sync with task tracker",
        "/scan for new design items",
        "Priority scoring framework",
      ],
      requirements: "+ Jira, Linear, or GitHub Issues",
      color: "coral" as const,
      highlight: true,
    },
    {
      name: "Full Auto",
      tagline: "Autopilot mode",
      desc: "Automated daily briefings, event-driven heartbeat scanning, and intelligent triage — all config-driven.",
      features: [
        "Everything in Tracking",
        "Daily design briefings at 8 AM",
        "Heartbeat: auto-scan on new meetings",
        "Mid-day task delta detection",
        "Desktop notifications",
      ],
      requirements: "+ Scheduler (launchd / systemd / cron)",
      color: "teal" as const,
      highlight: false,
    },
  ];

  return (
    <Section id="tiers" alt>
      <div className="text-center">
        <Badge>Progressive value</Badge>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Start simple. Scale when ready.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground-secondary leading-relaxed">
          Get value at every level — you don&apos;t need the full stack to start.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`rounded-2xl border p-6 transition-shadow ${
              tier.highlight
                ? "border-coral/30 bg-surface shadow-md ring-1 ring-coral/10 relative"
                : "border-border bg-surface hover:shadow-md"
            }`}
          >
            {tier.highlight && (
              <div className="absolute -top-3 left-6 rounded-full bg-coral px-3 py-0.5 text-[10px] font-bold text-white tracking-wide">
                Recommended
              </div>
            )}
            <Badge color={tier.color}>{tier.name}</Badge>
            <p className="mt-3 text-sm font-bold text-foreground-muted">
              {tier.tagline}
            </p>
            <p className="mt-2 text-sm text-foreground-secondary leading-relaxed">
              {tier.desc}
            </p>
            <ul className="mt-5 space-y-2.5" role="list">
              {tier.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2.5 text-sm text-foreground-secondary"
                >
                  <svg className="mt-0.5 w-4 h-4 shrink-0 text-teal" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M3 8.5l3.5 3.5 6.5-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded-lg bg-surface-alt px-3 py-2 text-xs text-foreground-muted">
              Requires: {tier.requirements}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ─── Evidence Example ────────────────────────────────────────────

function EvidenceExample() {
  return (
    <Section id="evidence">
      <div className="md:grid md:grid-cols-2 md:gap-12 md:items-center">
        {/* Left: text */}
        <div>
          <Badge color="teal">Evidence grounding</Badge>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Every element cites its source
          </h2>
          <p className="mt-4 text-lg text-foreground-secondary leading-relaxed">
            No hallucinated design rationale. Every pain point, decision, and quote
            traces back to where it was discussed.
          </p>
          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-3 text-sm text-foreground-secondary">
              <div className="h-2.5 w-2.5 rounded-full bg-accent shrink-0" />
              Cross-referenced across meeting tools, trackers, and chat
            </div>
            <div className="flex items-center gap-3 text-sm text-foreground-secondary">
              <div className="h-2.5 w-2.5 rounded-full bg-coral shrink-0" />
              Frequency tracking shows evidence strength
            </div>
            <div className="flex items-center gap-3 text-sm text-foreground-secondary">
              <div className="h-2.5 w-2.5 rounded-full bg-teal shrink-0" />
              Verbatim quotes with speaker attribution
            </div>
          </div>
        </div>

        {/* Right: artifact card */}
        <div className="mt-10 md:mt-0 rounded-2xl border border-border bg-surface p-5 md:p-6 shadow-sm">
          <div className="flex items-center gap-2 text-xs text-foreground-muted mb-5">
            <span className="h-2 w-2 rounded-full bg-teal" aria-hidden="true" />
            Sample synthesis output
          </div>

          {/* Pain point */}
          <div className="rounded-xl border border-border-light bg-background p-4">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-coral-light px-2 py-0.5 text-[10px] font-bold text-coral">
                PAIN POINT
              </span>
              <span className="text-[10px] text-foreground-muted">
                4 mentions · 3 source types
              </span>
            </div>
            <p className="mt-2 text-sm font-bold text-foreground">
              &quot;I spent 20 minutes just trying to find where to start&quot;
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <SourceTag icon={<MeetingIcon className="w-3 h-3" />} label="Customer Call (Mar 7)" />
              <SourceTag icon={<TaskIcon className="w-3 h-3" />} label="PROJ-456 (Jira)" />
              <SourceTag icon={<ChatIcon className="w-3 h-3" />} label="#product-feedback (Slack)" />
              <SourceTag icon={<MeetingIcon className="w-3 h-3" />} label="Sprint Retro (Mar 5)" />
            </div>
            <div className="mt-3 flex items-center gap-1.5">
              <div className="flex gap-0.5" aria-label="Evidence strength: 4 out of 5" role="img">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-1.5 w-4 rounded-full bg-teal" />
                ))}
                <div className="h-1.5 w-4 rounded-full bg-border" />
              </div>
              <span className="text-[10px] font-bold text-teal">
                STRONG evidence
              </span>
            </div>
          </div>

          {/* Decision */}
          <div className="mt-3 rounded-xl border border-border-light bg-background p-4">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-accent-light px-2 py-0.5 text-[10px] font-bold text-accent">
                DECISION
              </span>
            </div>
            <p className="mt-2 text-sm font-bold text-foreground">
              Simplify onboarding to 3 steps max — team aligned
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <SourceTag icon={<MeetingIcon className="w-3 h-3" />} label="Design Sync (Mar 6)" />
              <SourceTag icon={<TaskIcon className="w-3 h-3" />} label="PROJ-501 (Jira)" />
            </div>
          </div>

          {/* Quote */}
          <div className="mt-3 rounded-xl border border-border-light bg-background p-4">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-teal-light px-2 py-0.5 text-[10px] font-bold text-teal">
                VERBATIM QUOTE
              </span>
            </div>
            <p className="mt-2 text-sm italic text-foreground-secondary">
              &quot;If we don&apos;t fix the first-run experience this quarter, we&apos;ll
              keep losing users at the same rate.&quot;
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <SourceTag icon={<MeetingIcon className="w-3 h-3" />} label="Alex (PM) — Roadmap Review" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function SourceTag({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-border-light bg-surface-alt px-2 py-0.5 text-[11px] text-foreground-muted">
      {icon}
      {label}
    </span>
  );
}

// ─── Who it's for ────────────────────────────────────────────────

function WhoItsFor() {
  const personas = [
    {
      icon: (
        <svg className="w-7 h-7 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
        </svg>
      ),
      title: "In-house product designers",
      desc: "6 meetings a week across streams with PMs, engineers, and stakeholders. Decisions scattered across 4+ tools.",
      accent: "bg-accent-light",
    },
    {
      icon: (
        <svg className="w-7 h-7 text-coral" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 3h5v5M4 20L21 3M21 16v5h-5M14 14l7 7M3 8V3h5M10 10L3 3" />
        </svg>
      ),
      title: "Design consultants & freelancers",
      desc: "Multiple clients, each with their own tools and meeting cadence. Need to synthesize context fast and deliver grounded recommendations.",
      accent: "bg-coral-light",
    },
    {
      icon: (
        <svg className="w-7 h-7 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
          <path d="M10 6.5h4M6.5 10v4M17.5 10v4M10 17.5h4" />
        </svg>
      ),
      title: "Design leads",
      desc: "Overseeing multiple streams or squads. Need cross-stream visibility into what's being discussed, decided, and blocked.",
      accent: "bg-teal-light",
    },
  ];

  return (
    <Section alt>
      <div className="text-center">
        <Badge color="coral">Who it&apos;s for</Badge>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          For designers navigating complexity
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground-secondary leading-relaxed">
          You work across people and tools. Context gets lost between meetings.
          design-action brings it back.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {personas.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl border border-border bg-surface p-6 transition-shadow hover:shadow-md"
          >
            <div className={`rounded-xl ${p.accent} p-3 w-fit`}>
              {p.icon}
            </div>
            <h3 className="mt-4 text-base font-bold text-foreground">
              {p.title}
            </h3>
            <p className="mt-2 text-sm text-foreground-secondary leading-relaxed">
              {p.desc}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ─── Providers ───────────────────────────────────────────────────

function Providers() {
  const categories = [
    {
      title: "Meetings",
      tools: ["Granola", "Otter.ai", "Fireflies.ai", "Google Meet", "Notion", "Manual (markdown)"],
    },
    {
      title: "Tasks",
      tools: ["Jira", "Linear", "GitHub Issues", "Notion"],
    },
    {
      title: "Communication",
      tools: ["Slack", "Discord", "Microsoft Teams"],
    },
    {
      title: "Design",
      tools: ["Figma", "Penpot"],
    },
  ];

  return (
    <Section>
      <div className="text-center">
        <Badge>Provider agnostic</Badge>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Works with your team&apos;s tools
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground-secondary leading-relaxed">
          One config file. Your existing MCP servers. No vendor lock-in.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
        {categories.map((cat) => (
          <div key={cat.title}>
            <p className="text-xs font-bold uppercase tracking-widest text-foreground-muted mb-3">
              {cat.title}
            </p>
            <div className="space-y-2">
              {cat.tools.map((tool) => (
                <div
                  key={tool}
                  className="rounded-lg border border-border-light bg-surface px-3 py-2 text-sm text-foreground-secondary"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ─── Install ─────────────────────────────────────────────────────

function Install() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <Section id="install" alt>
      <div className="text-center">
        <Badge color="teal">Get started</Badge>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Two ways to install
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-foreground-secondary leading-relaxed">
          Available as a Claude Code plugin or via the skills.sh universal
          registry.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-6 md:grid-cols-2">
        {/* skills.sh */}
        <div className="rounded-2xl border border-border bg-surface p-6">
          <p className="text-xs font-bold uppercase tracking-widest text-foreground-muted">
            Universal (any AI agent)
          </p>
          <div className="mt-4 flex items-center gap-2">
            <code className="flex-1 rounded-lg bg-surface-alt px-3 py-2.5 text-sm text-foreground font-mono overflow-x-auto">
              npx skills add lola-salehu/design-action-plugin
            </code>
            <button
              onClick={() =>
                copy("npx skills add lola-salehu/design-action-plugin", "npx")
              }
              className="shrink-0 rounded-lg border border-border px-3 py-2.5 text-sm text-foreground-muted hover:bg-surface-alt active:bg-border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Copy install command"
            >
              {copied === "npx" ? "Copied!" : "Copy"}
            </button>
          </div>
          <p className="mt-3 text-xs text-foreground-muted">
            Works with Claude Code, Cursor, Copilot, Cline, and more via{" "}
            <span className="text-accent font-bold">skills.sh</span>
          </p>
        </div>

        {/* Claude Code */}
        <div className="rounded-2xl border border-border bg-surface p-6">
          <p className="text-xs font-bold uppercase tracking-widest text-foreground-muted">
            Claude Code (full plugin)
          </p>
          <div className="mt-4 flex items-center gap-2">
            <code className="flex-1 rounded-lg bg-surface-alt px-3 py-2.5 text-sm text-foreground font-mono overflow-x-auto">
              claude --plugin-dir ./design-action-plugin
            </code>
            <button
              onClick={() =>
                copy("claude --plugin-dir ./design-action-plugin", "claude")
              }
              className="shrink-0 rounded-lg border border-border px-3 py-2.5 text-sm text-foreground-muted hover:bg-surface-alt active:bg-border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Copy Claude Code install command"
            >
              {copied === "claude" ? "Copied!" : "Copy"}
            </button>
          </div>
          <p className="mt-3 text-xs text-foreground-muted">
            Full plugin with commands, automation, and scheduler support
          </p>
        </div>
      </div>

      <div className="mt-10 text-center">
        <p className="text-sm text-foreground-secondary">
          Then run{" "}
          <code className="rounded-md bg-surface px-2 py-0.5 text-sm font-bold text-accent">
            /setup
          </code>{" "}
          to connect your tools.
        </p>
      </div>
    </Section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="border-t border-border bg-background px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div>
            <p className="text-lg font-bold text-foreground">
              design-action
            </p>
            <p className="mt-1 text-sm text-foreground-muted">
              Evidence-grounded design synthesis
            </p>
          </div>
          <div className="flex items-center gap-6 text-sm text-foreground-muted">
            <a
              href="https://github.com/lola-salehu/design-action-plugin"
              className="hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/lola-salehu/"
              className="hover:text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
            >
              LinkedIn
            </a>
            <span className="text-border" aria-hidden="true">·</span>
            <span>Free for personal use</span>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-foreground-muted">
          Built by{" "}
          <a
            href="https://www.linkedin.com/in/lola-salehu/"
            className="text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
          >
            Lola Salehu
          </a>{" "}
          — a product designer who got tired of losing decisions between
          meetings.
        </div>
      </div>
    </footer>
  );
}

// ─── Main Page ───────────────────────────────────────────────────

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Problem />
      <HowItWorks />
      <Tiers />
      <EvidenceExample />
      <WhoItsFor />
      <Providers />
      <Install />
      <Footer />
    </main>
  );
}
