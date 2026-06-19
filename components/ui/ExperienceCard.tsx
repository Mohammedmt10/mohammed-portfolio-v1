import React from "react";
import { Card } from "./Card";
import { Pill } from "./Pill";

interface ExperienceCardProps {
  period: string;
  role: string;
  company: string;
  description: string;
  bullets: string[];
  tech: string[];
  wrapperClass: string;
  logo: React.ReactNode;
  subtitle?: string;
  bulletColorClass?: string;
  logoWrapperClass?: string;
}

export function ExperienceCard({
  period,
  role,
  company,
  description,
  bullets,
  tech,
  wrapperClass,
  logo,
  subtitle,
  bulletColorClass = "bg-violet-400 text-violet-500/80",
  logoWrapperClass = "p-3.5 md:p-7 rounded-2xl",
}: ExperienceCardProps) {
  return (
    <Card>
      <div className="flex flex-col md:flex-row items-start gap-6">
        {/* Period & Logo */}
        <div className="flex flex-row md:flex-col items-center md:items-start justify-between md:justify-start gap-4 md:w-36 md:shrink-0 w-full">
          <span className="text-xs font-semibold text-zinc-500 tracking-wider uppercase whitespace-nowrap">
            {period}
          </span>
          <div
            className={`md:mt-3 w-16 h-16 md:w-36 md:h-36 flex items-center justify-center border backdrop-blur-sm transition-all duration-500 ease-out group-hover:scale-[1.03] ${logoWrapperClass} ${wrapperClass}`}
          >
            {logo}
          </div>
        </div>
        {/* Role details */}
        <div className="flex-1 space-y-4">
          <div className="space-y-1.5">
            <h3 className="text-zinc-200 font-semibold tracking-wide text-base group-hover:text-zinc-100 transition-colors">
              {role}{" "}
              <span className="text-violet-400/90 font-medium">
                {subtitle ? `| ${subtitle}` : `@ ${company}`}
              </span>
            </h3>
            {subtitle && (
              <p className="text-zinc-400 font-medium text-xs">
                {company}
              </p>
            )}
            <p className="text-zinc-400 text-base leading-relaxed">
              {description}
            </p>
          </div>

          <ul className="list-none space-y-2">
            {bullets.map((bullet, bIdx) => (
              <li
                key={bIdx}
                className="text-sm text-zinc-400 flex items-start gap-2 leading-relaxed"
              >
                <span className={`mt-2 shrink-0 block w-1.5 h-1.5 rounded-full ${bulletColorClass}`} />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-800/50">
            {tech.map((techItem, techIdx) => (
              <Pill key={techIdx}>{techItem}</Pill>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
