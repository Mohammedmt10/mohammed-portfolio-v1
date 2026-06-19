import React from "react";

interface PillProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: "simple" | "interactive";
  className?: string;
}

export function Pill({ children, variant = "simple", className = "", ...props }: PillProps) {
  if (variant === "interactive") {
    return (
      <span
        className={`relative overflow-hidden px-3 py-1.5 text-xs rounded-lg border border-zinc-800 bg-zinc-950/60 text-zinc-300 hover:text-zinc-100 hover:border-zinc-600 hover:bg-zinc-900/20 transition-all duration-300 cursor-default before:absolute before:-top-px before:-bottom-px before:left-0 before:w-6 before:bg-linear-to-r before:from-transparent before:via-white/20 before:to-transparent before:skew-x-[-25deg] before:-translate-x-16 hover:before:translate-x-48 before:transition-transform before:duration-1200 before:ease-out ${className}`}
        {...props}
      >
        {children}
      </span>
    );
  }

  return (
    <span
      className={`px-3 py-1.5 text-xs rounded bg-zinc-900/30 text-zinc-300 border border-zinc-800 ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
