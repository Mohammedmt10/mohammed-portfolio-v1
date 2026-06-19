import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <div
      className={`group relative w-full rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-6 backdrop-blur-sm transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-800/30 hover:shadow-[0_0_30px_-10px_rgba(139,92,246,0.08)] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
