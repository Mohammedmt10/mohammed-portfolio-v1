import React from "react";
import { Card } from "./Card";
import { Pill } from "./Pill";

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  link: string;
  status: string;
}

export function ProjectCard({ title, description, tech, link, status }: ProjectCardProps) {
  return (
    <Card>
      <div className="flex justify-between items-start gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-semibold text-violet-400 uppercase tracking-widest bg-violet-950/20 px-2.5 py-0.5 rounded border border-violet-800/30">
              {status}
            </span>
          </div>
          <h3 className="text-zinc-200 font-semibold tracking-wide text-lg group-hover:text-zinc-100 transition-colors">
            {title}
          </h3>
          <p className="text-zinc-400 text-base leading-relaxed">
            {description}
          </p>
        </div>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="text-zinc-600 hover:text-zinc-300 p-1 transition-colors"
          aria-label={`View code for ${title}`}
        >
          <svg
            className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>

      <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-zinc-800/50">
        {tech.map((techItem, techIdx) => (
          <Pill key={techIdx}>{techItem}</Pill>
        ))}
      </div>
    </Card>
  );
}
