"use client";

import Image from "next/image";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Pill } from "@/components/ui/Pill";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ExperienceCard } from "@/components/ui/ExperienceCard";

// Static arrays moved to module scope to avoid rebuilding on every render
const LANGUAGES = [
  "SQL",
  "NoSQL",
  "JavaScript",
  "HTML/CSS",
  "TypeScript",
  "Python",
];

const TECHNOLOGIES = [
  "Next.js",
  "Prisma",
  "Tailwind CSS",
  "JWT",
  "Recoil",
  "Framer Motion",
  "Chart.js",
  "NumPy",
  "Pandas",
  "PyTorch",
];

const TOOLS = ["Git", "GitHub", "VS Code", "Antigravity", "Figma"];

const PROJECTS = [
  {
    title: "Custom Autoregressive Language Model",
    description:
      "Designed and trained a custom autoregressive language model from scratch utilizing PyTorch, implementing advanced transformer architecture components including RMSNorm, Rotary Positional Embeddings (RoPE), and SwiGLU activations. Engineered Grouped Query Attention (GQA) with an 8:2 query-to-KV head ratio to optimize computation. Systematically resolved severe overfitting on Tiny Shakespeare by scaling down parameters to 2.7M.",
    tech: ["PyTorch", "Python", "Transformers", "GQA", "LLM"],
    link: "https://colab.research.google.com/drive/1llwtMaS4y3vnlDOIP1-scs1sChTBERXH?usp=sharing",
    status: "Completed",
  },
  {
    title: "Multiplayer Excalidraw",
    description:
      "Built WebSocket-based real-time synchronization to broadcast drawing events and canvas updates with less than 80ms latency. Integrated Prisma ORM with PostgreSQL to manage rooms, users, and session metadata for 100+ users. Architected the project using a Turborepo monorepo setup with 3 apps + 4 shared packages.",
    tech: [
      "TypeScript",
      "Next.js",
      "WebSocket",
      "PostgreSQL",
      "Turborepo",
      "Prisma",
    ],
    link: "https://github.com/Mohammedmt10/multiplayer-excalidraw",
    status: "Completed",
  },
];

const EXPERIENCES = [
  {
    period: "MAY 2026 — PRESENT",
    role: "Full Stack Developer Intern",
    company: "ZA Charity Feed Foundation",
    description:
      "Redesigning and architecting full-stack applications and creating modern web solutions for non-profit operations.",
    bullets: [
      "Spearheaded the redesign and architecture of 4+ full-stack applications tailored to evolving organizational requirements, establishing a scalable foundation for upcoming public launches.",
      "Engineered interactive frontend prototypes and successfully transitioned them into production-ready UI.",
      "Architected modular, scalable logic to replace legacy systems, establishing a clean codebase to facilitate a seamless future migration to Next.js and TypeScript.",
    ],
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Accessibility"],
    wrapperClass:
      "border-violet-500/25 bg-violet-950/5 group-hover:border-violet-500/50 group-hover:bg-violet-950/15 group-hover:shadow-[0_0_35px_-5px_rgba(139,92,246,0.2)]",
    logoWrapperClass: "p-0 rounded-full overflow-hidden",
    logo: (
      <Image
        src="https://framerusercontent.com/images/dFpiwqHD3oSjwh3iXmklt5jFwc.png?width=398&height=297"
        alt="ZA Charity Feed Foundation Logo"
        width={398}
        height={297}
        className="w-full h-full object-cover rounded-full"
        priority
      />
    ),
  },
];

const RESEARCH_PROJECTS = [
  {
    period: "SEP 2025 — DEC 2025",
    title: "Aavishkar",
    role: "Full Stack Developer / Researcher",
    company: "Valia College of Arts and Commerce",
    projectName: "SwarajyaGatha",
    description:
      "An interactive educational project designed to validate user engagement and deliver synthesized historical insights.",
    bullets: [
      "Spearheaded the research and iterative development lifecycle for SwarajyaGatha, an interactive educational project, collaborating with a cross-functional team of 3.",
      "Synthesized quantitative data from historical sources to ensure high accuracy for the final deliverable.",
      "Designed and executed a comprehensive user research methodology, gathering and analyzing performance metrics from 120+ school students to validate engagement.",
    ],
    tech: ["React", "CSS", "Research", "Data Synthesis"],
    wrapperClass:
      "border-cyan-500/25 bg-cyan-950/5 group-hover:border-cyan-500/50 group-hover:bg-cyan-950/15 group-hover:shadow-[0_0_35px_-5px_rgba(34,211,238,0.2)]",
    logo: (
      <svg
        className="w-full h-full text-cyan-400/80 group-hover:text-cyan-300 transition-colors duration-300"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.168.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
];

// Profile sidebar component
function ProfileSidebar() {
  return (
    <aside className="w-full md:w-[38%] md:h-screen md:sticky md:top-0 p-8 sm:p-12 lg:p-16 flex flex-col justify-between bg-[#030303] md:overflow-hidden relative">
      {/* Profile picture */}
      <div className="flex flex-col items-center justify-center w-full mb-8 md:mb-0">
        <div className="relative max-w-[260px] sm:max-w-[280px] aspect-square w-full overflow-hidden rounded-full border border-zinc-800/80 bg-black shadow-2xl mx-auto motion-preset-slide-up motion-duration-800">
          <Image
            src="/images/profile.webp"
            alt="Mohammed Tajir Profile"
            fill
            priority
            fetchPriority="high"
            sizes="(max-width: 768px) 260px, 280px"
            className="object-cover"
          />
        </div>
      </div>

      {/* Developer Title, Status, Bio Description & Socials */}
      <div className="flex flex-col space-y-6 mt-6 md:mt-0">
        {/* Availability Status Badge */}
        <div className="space-y-3 motion-preset-slide-up motion-duration-800 motion-delay-150">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-medium tracking-wide">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for Full-time Roles
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight bg-linear-to-r from-zinc-50 via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
            Mohammed Tajir
          </h1>
          <p className="text-lg font-medium text-violet-400/90 tracking-wide">
            Full Stack Developer Intern
          </p>
        </div>

        {/* Bio Description (Stops here on Left) */}
        <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-md motion-preset-slide-up motion-duration-800 motion-delay-200">
          I design and build highly performant, accessible digital products and
          scalable web systems. Currently focused on full stack development and
          deep learning, building advanced transformer architectures and
          real-time synchronized platforms.
        </p>
      </div>
    </aside>
  );
}

// Education section component
function EducationSection() {
  return (
    <div className="relative space-y-6 motion-preset-slide-up motion-duration-800 motion-delay-150">
      <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">
        {"// Education"}
      </h2>

      <Card>
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
          <div className="space-y-1">
            <h3 className="text-zinc-200 font-semibold tracking-wide text-base group-hover:text-zinc-100 transition-colors">
              Valia College of Arts, Commerce And Science
            </h3>
            <p className="text-violet-400/90 text-sm font-medium">
              Bachelor of Science in Information Technology
            </p>
            <div className="pt-1.5">
              <span className="inline-flex items-center text-xs font-semibold text-zinc-200 bg-zinc-800/50 px-2.5 py-1 rounded-md border border-zinc-800">
                CGPA: 9.1
              </span>
            </div>
          </div>
          <span className="text-xs font-semibold text-zinc-500 tracking-wider uppercase whitespace-nowrap">
            Aug 2023 — May 2026
          </span>
        </div>
      </Card>
    </div>
  );
}

// Work experience section component
function ExperienceSection() {
  return (
    <div className="relative space-y-6 pt-4 motion-preset-slide-up motion-duration-800 motion-delay-200">
      <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">
        {"// Work Experience"}
      </h2>

      <div className="flex flex-col gap-6">
        {EXPERIENCES.map((exp) => (
          <ExperienceCard
            key={`${exp.company}-${exp.role}`}
            period={exp.period}
            role={exp.role}
            company={exp.company}
            description={exp.description}
            bullets={exp.bullets}
            tech={exp.tech}
            wrapperClass={exp.wrapperClass}
            logo={exp.logo}
            logoWrapperClass={exp.logoWrapperClass}
          />
        ))}
      </div>
    </div>
  );
}

// Selected works section component
function ProjectsSection() {
  return (
    <div className="relative space-y-6 pt-4 motion-preset-slide-up motion-duration-800 motion-delay-250">
      <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">
        {"// Selected Works"}
      </h2>

      <div className="flex flex-col gap-6">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            tech={project.tech}
            link={project.link}
            status={project.status}
          />
        ))}
      </div>
    </div>
  );
}

// Research and extracurricular section component
function ResearchSection() {
  return (
    <div className="relative space-y-6 pt-4 motion-preset-slide-up motion-duration-800 motion-delay-300">
      <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">
        {"// Research & Extracurricular"}
      </h2>

      <div className="flex flex-col gap-6">
        {RESEARCH_PROJECTS.map((research) => (
          <ExperienceCard
            key={research.projectName}
            period={research.period}
            role={research.role}
            company={research.company}
            description={research.description}
            bullets={research.bullets}
            tech={research.tech}
            wrapperClass={research.wrapperClass}
            logo={research.logo}
            subtitle={research.projectName}
            bulletColorClass="bg-cyan-400 text-cyan-500/80"
          />
        ))}
      </div>
    </div>
  );
}

// Technical skills section component
function SkillsSection() {
  return (
    <div className="relative space-y-6 pt-4 motion-preset-slide-up motion-duration-800 motion-delay-350">
      <h2 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">
        {"// Stack & Core Specializations"}
      </h2>

      <div className="space-y-6">
        {/* Languages */}
        <div className="space-y-3">
          <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
            Languages
          </h3>
          <div className="flex flex-wrap gap-3">
            {LANGUAGES.map((skill) => (
              <Pill key={skill} variant="interactive">
                {skill}
              </Pill>
            ))}
          </div>
        </div>

        {/* Technologies/Frameworks */}
        <div className="space-y-3">
          <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
            Technologies & Frameworks
          </h3>
          <div className="flex flex-wrap gap-3">
            {TECHNOLOGIES.map((skill) => (
              <Pill key={skill} variant="interactive">
                {skill}
              </Pill>
            ))}
          </div>
        </div>

        {/* Developer Tools */}
        <div className="space-y-3">
          <h3 className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
            Developer Tools
          </h3>
          <div className="flex flex-wrap gap-3">
            {TOOLS.map((skill) => (
              <Pill key={skill} variant="interactive">
                {skill}
              </Pill>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Main page component
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#030303] text-zinc-100 selection:bg-violet-500/30 selection:text-violet-200">
      <div className="flex flex-col md:flex-row flex-1 md:items-start">
        {/* LEFT COLUMN: Fixed / Stationary on desktop */}
        <ProfileSidebar />

        {/* RIGHT COLUMN: Scrollable on desktop, holds stats, skills, projects */}
        <section className="w-full md:w-[62%] min-h-screen p-8 sm:p-12 lg:p-16 pb-24 sm:pb-32 space-y-16 bg-[#030303] relative">
          {/* Subtle grid background pattern */}
          <div
            className="absolute inset-0 opacity-[0.02] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />

          {/* Diagonal glowing bubbles */}
          <div className="absolute top-1/4 right-1/4 w-[350px] sm:w-[450px] aspect-square rounded-full bg-violet-600/5 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-1/4 left-1/4 w-[350px] sm:w-[450px] aspect-square rounded-full bg-cyan-600/5 blur-[100px] pointer-events-none" />

          {/* Layout Sections */}
          <EducationSection />
          <ExperienceSection />
          <ProjectsSection />
          <ResearchSection />
          <SkillsSection />
        </section>

        {/* Close COLS CONTAINER */}
      </div>

      {/* COMMON FOOTER */}
      <footer className="w-full py-8 px-8 sm:px-12 lg:px-16 border-t border-zinc-900/40 bg-[#030303] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-500 relative z-20">
        <div>
          © {new Date().getFullYear()} Mohammed Tajir. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <Link
            href="/contact"
            className="hover:text-zinc-200 transition-colors duration-300 flex items-center gap-2 font-medium text-zinc-400 border border-zinc-900 bg-zinc-950/65 px-3 py-1.5 rounded-lg hover:border-violet-500/30 hover:bg-violet-950/10 hover:shadow-[0_0_15px_-3px_rgba(139,92,246,0.15)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
            </span>
            Get in touch
          </Link>
          <a
            href="https://github.com/Mohammedmt10"
            target="_blank"
            rel="noreferrer"
            className="hover:text-zinc-200 transition-colors duration-300 flex items-center gap-2"
            aria-label="GitHub Profile"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.197 22 16.44 22 12.017 22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mohammed-tajir-b7120a245/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-zinc-200 transition-colors duration-300 flex items-center gap-2"
            aria-label="LinkedIn Profile"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                clipRule="evenodd"
              />
            </svg>
            LinkedIn
          </a>
          <a
            href="mailto:mtajir903@gmail.com"
            className="hover:text-zinc-200 transition-colors duration-300 flex items-center gap-2"
            aria-label="Email Contact"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Email
          </a>
        </div>
      </footer>
    </div>
  );
}
