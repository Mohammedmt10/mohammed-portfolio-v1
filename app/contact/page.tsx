"use client";

import { useActionState, useState } from "react";
import Link from "next/link";
import { sendContactEmail } from "./actions";

function ContactFormContainer({ onReset }: { onReset: () => void }) {
  const [state, formAction, isPending] = useActionState(sendContactEmail, null);
  const isSuccessView = !!state?.success;

  if (isSuccessView) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-8 space-y-5 animate-fade-in">
        <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-zinc-100">Message Sent!</h3>
          <p className="text-sm text-zinc-400 max-w-sm">{state?.message}</p>
        </div>
        <button
          onClick={onReset}
          className="px-6 py-2.5 rounded-xl border border-zinc-800 hover:border-zinc-700 bg-zinc-950 hover:bg-zinc-900 text-zinc-300 hover:text-zinc-100 text-xs font-semibold tracking-wider uppercase transition-all duration-300"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      {/* Form fields grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Name field */}
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="text-xs font-semibold text-zinc-300 uppercase tracking-widest"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="John Doe"
            disabled={isPending}
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-900/40 text-zinc-100 placeholder-zinc-500 transition-all duration-300 focus:outline-none focus:border-zinc-500 focus:bg-zinc-900/30 focus:shadow-[0_0_20px_-3px_rgba(255,255,255,0.06)] disabled:opacity-50 text-sm"
          />
        </div>

        {/* Email field */}
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-xs font-semibold text-zinc-300 uppercase tracking-widest"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="john@example.com"
            disabled={isPending}
            className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-900/40 text-zinc-100 placeholder-zinc-500 transition-all duration-300 focus:outline-none focus:border-zinc-500 focus:bg-zinc-900/30 focus:shadow-[0_0_20px_-3px_rgba(255,255,255,0.06)] disabled:opacity-50 text-sm"
          />
        </div>
      </div>

      {/* Subject field */}
      <div className="space-y-2">
        <label
          htmlFor="subject"
          className="text-xs font-semibold text-zinc-300 uppercase tracking-widest"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          placeholder="Project Inquiry / Job Proposal"
          disabled={isPending}
          className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-900/40 text-zinc-100 placeholder-zinc-500 transition-all duration-300 focus:outline-none focus:border-zinc-500 focus:bg-zinc-900/30 focus:shadow-[0_0_20px_-3px_rgba(255,255,255,0.06)] disabled:opacity-50 text-sm"
        />
      </div>

      {/* Message field */}
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="text-xs font-semibold text-zinc-300 uppercase tracking-widest"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Hello! I would love to talk about..."
          disabled={isPending}
          className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-900/40 text-zinc-100 placeholder-zinc-500 transition-all duration-300 focus:outline-none focus:border-zinc-500 focus:bg-zinc-900/30 focus:shadow-[0_0_20px_-3px_rgba(255,255,255,0.06)] disabled:opacity-50 text-sm min-h-[120px] resize-none"
        />
      </div>

      {/* Feedback Notifications */}
      {state?.success === false && (
        <div className="flex items-start gap-2.5 px-4 py-3 rounded-xl border border-red-500/20 bg-red-500/5 text-red-400 text-xs leading-relaxed">
          <svg
            className="w-4 h-4 shrink-0 mt-0.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          <span>{state.message}</span>
        </div>
      )}

      {/* Submit button */}
      <button
        type="submit"
        disabled={isPending}
        className="group relative w-full overflow-hidden rounded-xl bg-zinc-100 py-3.5 px-6 font-semibold text-zinc-950 transition-all duration-300 hover:bg-white flex items-center justify-center gap-2 cursor-pointer disabled:bg-zinc-800 disabled:text-zinc-500 disabled:cursor-not-allowed text-sm"
      >
        {isPending ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-3 h-4 w-4 text-zinc-850"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Sending your message...
          </>
        ) : (
          <>Send Message</>
        )}
      </button>
    </form>
  );
}

export default function ContactPage() {
  const [formKey, setFormKey] = useState(0);

  const handleReset = () => {
    setFormKey((prev) => prev + 1);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#030303] text-zinc-100 selection:bg-violet-500/30 selection:text-violet-200 relative overflow-hidden">
      {/* Subtle grid background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Diagonal glowing bubbles */}
      <div className="absolute top-1/4 right-1/4 w-[350px] sm:w-[450px] aspect-square rounded-full bg-violet-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[350px] sm:w-[450px] aspect-square rounded-full bg-cyan-600/5 blur-[120px] pointer-events-none" />

      {/* Navigation Header */}
      <header className="w-full max-w-6xl mx-auto px-6 pt-8 pb-3 flex items-center justify-between relative z-10 motion-preset-fade motion-duration-500">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-200 transition-colors duration-300"
        >
          <svg
            className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </Link>

        <div className="text-xs font-semibold text-zinc-500 uppercase tracking-widest">
          {"// Contact portal"}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex items-start justify-center px-6 pt-4 pb-16 sm:pt-8 sm:pb-24 relative z-10">
        <div className="w-full max-w-xl mx-auto">
          {/* Header section inside form portal */}
          <div className="text-center mb-6 space-y-3 motion-preset-slide-up motion-duration-800">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/5 text-violet-400 text-xs font-medium tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
              </span>
              Get in Touch
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight bg-linear-to-r from-zinc-50 via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
              {"Let's build something great."}
            </h1>
            <p className="text-sm text-zinc-400 max-w-md mx-auto">
              {
                "Have a project in mind, a job opportunity, or just want to say hello? Drop a message below and I'll get back to you shortly."
              }
            </p>
          </div>

          {/* Form Container */}
          <div className="group relative w-full rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-6 sm:p-10 backdrop-blur-sm transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-800/30 hover:shadow-[0_0_50px_-12px_rgba(139,92,246,0.08)] motion-preset-slide-up motion-duration-800 motion-delay-150">
            <ContactFormContainer key={formKey} onReset={handleReset} />
          </div>

          {/* Alternative Direct Channels */}
          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-500 px-2 motion-preset-slide-up motion-duration-800 motion-delay-300">
            <div>Mails will be forwarded directly to mtajir903@gmail.com</div>
            <div className="flex gap-4">
              <a
                href="mailto:mtajir903@gmail.com"
                className="hover:text-zinc-300 transition-colors"
              >
                Direct Email
              </a>
              <span>•</span>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-zinc-300 transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 px-6 text-center text-xs text-zinc-600 relative z-10 border-t border-zinc-950/80">
        © {new Date().getFullYear()} Mohammed Tajir. All rights reserved.
      </footer>
    </div>
  );
}
