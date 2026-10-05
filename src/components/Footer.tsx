import { ArrowUp, Mail, Linkedin, Github, Globe, FileText } from 'lucide-react';
import type { PersonalInfo } from '../types';
import { PROFILE } from '../data/portfolioData';

interface FooterProps {
  personal?: PersonalInfo;
  onOpenResume?: () => void;
  onShowTeam?: () => void;
}

export default function Footer({ personal = PROFILE, onOpenResume, onShowTeam }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-brand-border bg-brand-dark py-8 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Identity */}
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span className="font-bold text-white">Xoraix Technologies</span>
          <span className="hidden sm:inline">·</span>
          <span className="text-slate-300">{personal.name}</span>
          <span className="text-slate-500 hidden md:inline">({personal.role})</span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-5 font-mono text-[11px]">
          {onShowTeam && (
            <button
              type="button"
              onClick={onShowTeam}
              className="text-cyan-400 hover:text-white transition-colors flex items-center gap-1 cursor-pointer font-bold"
            >
              <span>All Team Profiles</span>
            </button>
          )}

          <button
            type="button"
            onClick={scrollToTop}
            className="hover:text-cyan-400 transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>

          {onOpenResume && (
            <button
              type="button"
              onClick={onOpenResume}
              className="hover:text-cyan-400 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>CV Spec</span>
            </button>
          )}

          <a
            className="hover:text-cyan-400 transition-colors flex items-center gap-1"
            href={`mailto:${personal.email}`}
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>

          {personal.socials?.linkedin && (
            <a
              className="hover:text-cyan-400 transition-colors flex items-center gap-1"
              href={personal.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          )}

          {personal.socials?.github && (
            <a
              className="hover:text-cyan-400 transition-colors flex items-center gap-1"
              href={personal.socials.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          )}

          {personal.socials?.website && (
            <a
              className="hover:text-cyan-400 transition-colors flex items-center gap-1"
              href={personal.socials.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Website</span>
            </a>
          )}
        </div>

        {/* Built With Credit */}
        <div className="text-slate-500 font-mono text-[11px]">
          <span>
            {personal.highlights?.slice(0, 3).join(' · ') || 'Interactive Developer Portfolio'}
          </span>
        </div>
      </div>
    </footer>
  );
}
