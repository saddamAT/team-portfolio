import { useState } from 'react';
import { Copy, Check, MapPin, Sparkles, Linkedin, Github, Globe, ArrowRight, FileText } from 'lucide-react';
import type { PersonalInfo } from '../types';
import { PROFILE } from '../data/portfolioData';

interface HeroProps {
  personal?: PersonalInfo;
  onOpenResume?: () => void;
}

export default function Hero({ personal = PROFILE, onOpenResume }: HeroProps) {
  const [copied, setCopied] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  const initials =
    personal.initials ||
    personal.name
      .split(' ')
      .filter(Boolean)
      .map((w) => w[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden grid-bg-pattern" id="hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & Engineering Highlights */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Engineering Focus Chip */}
            <div className="flex items-center gap-3 mb-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-surface/90 border border-brand-border text-xs text-slate-300 shadow-sm backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="font-semibold text-white">{personal.role}</span>
                {personal.secondaryTitle && (
                  <>
                    <span className="text-slate-500">·</span>
                    <span className="text-cyan-400 font-mono text-[11px]">{personal.secondaryTitle}</span>
                  </>
                )}
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-[clamp(2.3rem,5vw,4.25rem)] font-extrabold text-white tracking-tight leading-[1.12]">
              {personal.name} <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-300">
                {personal.headline}
              </span>
            </h1>

            {/* Bio summary */}
            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              {personal.shortBio}
            </p>

            {/* Quick Specs Row */}
            <div className="mt-7 flex flex-wrap gap-3 sm:gap-4 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-1.5 bg-brand-surface/90 px-3 py-1.5 rounded-md border border-brand-border">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{personal.location}</span>
              </div>
              {personal.highlights?.[0] && (
                <div className="flex items-center gap-1.5 bg-brand-surface/90 px-3 py-1.5 rounded-md border border-brand-border">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{personal.highlights[0]}</span>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#gallery"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold text-sm shadow-glow-cyan transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>Explore Projects & Gallery</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Conditional CV Button */}
              {onOpenResume && (
                <button
                  type="button"
                  onClick={onOpenResume}
                  className="px-5 py-3.5 rounded-xl bg-brand-surface hover:bg-brand-elevated border border-brand-border text-slate-200 font-semibold text-sm flex items-center gap-2 transition-all cursor-pointer"
                  title="View / Download Profile"
                >
                  <FileText className="w-4 h-4 text-cyan-400" />
                  <span>View Profile</span>
                </button>
              )}

              {/* Conditional LinkedIn */}
              {personal.socials?.linkedin && (
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-brand-surface hover:bg-brand-elevated border border-brand-border text-slate-200 transition-all"
                  title="LinkedIn Profile"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                </a>
              )}

              {/* Conditional GitHub */}
              {personal.socials?.github && (
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-brand-surface hover:bg-brand-elevated border border-brand-border text-slate-200 transition-all"
                  title="GitHub Profile"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4 text-slate-300 hover:text-white" />
                </a>
              )}

              {/* Conditional Website */}
              {personal.socials?.website && (
                <a
                  href={personal.socials.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-brand-surface hover:bg-brand-elevated border border-brand-border text-slate-200 transition-all"
                  title="Portfolio Website"
                  aria-label="Portfolio Website"
                >
                  <Globe className="w-4 h-4 text-cyan-400" />
                </a>
              )}

              {/* Copy Email Button */}
              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-4 py-3.5 rounded-xl bg-brand-surface/70 hover:bg-brand-surface border border-brand-border text-slate-300 font-mono text-xs flex items-center gap-2 transition-all cursor-pointer group"
                title="Click to copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-emerald-400 font-sans font-medium">Copied! ✓</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors shrink-0" />
                    <span>{personal.email}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: High-Res Portrait in Engineered Tech Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md tech-border-glow p-2 rounded-2xl bg-brand-surface/90 shadow-2xl backdrop-blur-sm">
              {/* Subtle decorative corner brackets */}
              <div className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-cyan-400" />
              <div className="absolute -top-2 -right-2 w-5 h-5 border-t-2 border-r-2 border-blue-400" />
              <div className="absolute -bottom-2 -left-2 w-5 h-5 border-b-2 border-l-2 border-cyan-400" />
              <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-blue-400" />

              {/* Engineer Photo Image Container */}
              <div className="relative overflow-hidden rounded-xl bg-slate-900 border border-brand-border aspect-[3/4]">
                {personal.avatarUrl && !imageError ? (
                  <img
                    src={personal.avatarUrl}
                    alt={`${personal.name} - ${personal.role}`}
                    referrerPolicy="no-referrer"
                    loading="eager"
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500 ease-out"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-950 p-6 text-center">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-cyan-400 flex items-center justify-center font-mono font-bold text-white text-3xl shadow-glow-cyan mb-4">
                      {initials}
                    </div>
                    <span className="text-xl font-bold text-white">{personal.name}</span>
                    <span className="text-xs text-cyan-300 font-mono mt-1">{personal.role}</span>
                  </div>
                )}

                {/* Bottom Gradient Overlay for Identity Label */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-dark via-brand-dark/85 to-transparent p-5 pt-14 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-bold text-lg leading-tight">{personal.name}</h3>
                      <p className="text-xs text-cyan-300 font-mono">{personal.role}</p>
                    </div>
                    <div className="px-2.5 py-1 rounded bg-cyan-950/80 border border-cyan-700/60 text-cyan-300 text-[11px] font-mono font-semibold shadow-sm">
                      {personal.status.includes('Senior') ? 'Senior' : 'Active'}
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 mt-2 font-mono flex items-center gap-1.5">
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
                    {personal.location}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
