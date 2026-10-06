import { useState } from "react";
import {
  ArrowUpRight,
  Menu,
  X,
  FileText,
  Sun,
  Moon,
  Users,
  Briefcase,
  Sparkles,
} from "lucide-react";
import type { PersonalInfo, PortfolioData } from "../types";
import { PROFILE } from "../data/portfolioData";

interface NavbarProps {
  personal?: PersonalInfo;
  hasBlueprint?: boolean;
  onOpenResume: () => void;
  isWhiteMode?: boolean;
  onToggleWhiteMode?: () => void;
  profiles?: PortfolioData[];
  activeProfileId?: string;
  onSelectProfile?: (id: string) => void;
  onShowTeam: () => void;
  currentView?: "portfolio" | "team";
}

export default function Navbar({
  personal = PROFILE,
  hasBlueprint = true,
  onOpenResume,
  isWhiteMode = false,
  onToggleWhiteMode,
  onShowTeam,
  currentView = "portfolio",
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Deriving initials
  const initials =
    personal.initials ||
    personal.name
      .split(" ")
      .filter(Boolean)
      .map((w) => w[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();

  const portfolioNavLinks = [
    { label: "About", href: "#hero" },
    { label: "Project Gallery", href: "#gallery" },
    { label: "Case Studies", href: "#case-studies" },
    ...(hasBlueprint
      ? [{ label: "Architecture", href: "#ai-architecture" }]
      : []),
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-border/80 bg-brand-dark/95 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Wordmark & Logo */}
        <button
          type="button"
          onClick={onShowTeam}
          className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-xl p-1.5 text-left cursor-pointer transition-transform hover:scale-[1.02]"
          title="Click to view all Xoraix Technologies team members"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-cyan-400 flex items-center justify-center font-mono font-bold text-white shadow-glow-cyan text-base overflow-hidden shrink-0">
            <img
              src="/images/farhan-projects-images/xoraix-fav.png"
              alt="Xoraix Logo"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLElement).style.display = "none";
              }}
            />
            <span className="font-mono font-bold text-white text-xs">
              {initials}
            </span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white tracking-tight text-base sm:text-lg group-hover:text-cyan-400 transition-colors leading-tight">
                Xoraix Technologies
              </span>
            </div>
          </div>
        </button>

        {/* Zone 2: Navigation Links */}
        <nav
          className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300"
          aria-label="Main Navigation"
        >
          {currentView === "portfolio" ? (
            <>
              {portfolioNavLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-cyan-400 transition-colors text-xs font-mono focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 rounded"
                >
                  {link.label}
                </a>
              ))}
            </>
          ) : (
            <div className="flex items-center gap-6 text-xs font-mono">
              <a
                href="/"
                className="text-cyan-400 font-bold hover:text-cyan-300 transition-colors flex items-center gap-1.5"
              >
                <Users className="w-3.5 h-3.5" />
                <span>Members</span>
              </a>
            </div>
          )}
        </nav>

        {/* Zone 3: Actions & Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Toggle (Dark / Light) */}
          {onToggleWhiteMode && (
            <button
              type="button"
              onClick={onToggleWhiteMode}
              className={`p-2 rounded-xl border transition-all cursor-pointer ${
                isWhiteMode
                  ? "bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-300"
                  : "bg-brand-surface hover:bg-brand-elevated text-cyan-300 border-brand-border"
              }`}
              title={
                isWhiteMode ? "Switch to Dark Mode" : "Switch to Light Mode"
              }
              aria-label="Toggle Theme Mode"
            >
              {isWhiteMode ? (
                <Moon className="w-4 h-4 text-slate-700" />
              ) : (
                <Sun className="w-4 h-4 text-cyan-300" />
              )}
            </button>
          )}

          {/* Contact / Hire CTA Button */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-cyan-400 hover:from-blue-500 hover:to-cyan-300 text-white font-bold text-xs font-mono shadow-glow-cyan transition-all hover:scale-105 whitespace-nowrap"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-brand-surface border border-brand-border cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 border-b border-brand-border bg-brand-dark/98 backdrop-blur-xl">
          <div className="flex flex-col space-y-3 pt-1">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onShowTeam();
              }}
              className="w-full text-left px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600/20 to-cyan-500/20 text-cyan-300 border border-cyan-800 text-xs font-mono font-bold flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4 text-cyan-400" />
                <span>All Team Member Tiles</span>
              </span>
              <span>View All →</span>
            </button>

            {currentView === "portfolio" && (
              <div className="space-y-1.5 pt-2">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 px-1">
                  Page Sections:
                </div>
                {portfolioNavLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-2 rounded-lg text-slate-200 hover:bg-brand-surface hover:text-cyan-400 text-xs font-mono flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            )}

            <div className="pt-3 border-t border-brand-border flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="flex-1 py-2 rounded-xl bg-brand-surface border border-brand-border text-center text-xs font-mono text-cyan-300 hover:bg-brand-elevated"
              >
                View Full CV
              </button>

              {onToggleWhiteMode && (
                <button
                  type="button"
                  onClick={onToggleWhiteMode}
                  className="py-2 px-3 rounded-xl bg-brand-surface border border-brand-border text-xs font-mono text-cyan-300 flex items-center gap-1.5"
                >
                  {isWhiteMode ? (
                    <Moon className="w-3.5 h-3.5" />
                  ) : (
                    <Sun className="w-3.5 h-3.5" />
                  )}
                  <span>{isWhiteMode ? "Dark" : "Light"}</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
