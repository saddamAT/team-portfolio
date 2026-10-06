import { useState, useMemo } from 'react';
import {
  ArrowRight,
  Users,
  Sparkles,
  Code2,
  Server,
  Briefcase,
  ChevronRight,
  ShieldCheck,
  Mail,
  CheckCircle2,
  ExternalLink,
  MapPin,
  FileText,
} from 'lucide-react';
import type { TeamMember } from '../types';

interface TeamDirectoryProps {
  members: TeamMember[];
  onSelectMember: (portfolioId: string) => void;
  isWhiteMode?: boolean;
}

export default function TeamDirectory({
  members,
  onSelectMember,
  isWhiteMode = false,
}: TeamDirectoryProps) {
  const [filterRole, setFilterRole] = useState<string>('All');

  const filterTabs = [
    'All',
    'Founders & Leadership',
    'Full Stack & AI',
    'Backend & Python',
    'Game Dev & Growth',
  ];

  const filteredMembers = useMemo(() => {
    return members.filter((m) => {
      // Role filter
      if (filterRole === 'Founders & Leadership') {
        const matchesRole =
          m.role.toLowerCase().includes('founder') ||
          m.role.toLowerCase().includes('ceo') ||
          m.role.toLowerCase().includes('lead');
        if (!matchesRole) return false;
      } else if (filterRole === 'Full Stack & AI') {
        const matchesRole =
          m.role.toLowerCase().includes('full stack') ||
          m.subTitle.toLowerCase().includes('ai') ||
          m.featuredSkills.some((s) => s.toLowerCase().includes('next') || s.toLowerCase().includes('react'));
        if (!matchesRole) return false;
      } else if (filterRole === 'Backend & Python') {
        const matchesRole =
          m.role.toLowerCase().includes('python') ||
          m.subTitle.toLowerCase().includes('backend') ||
          m.featuredSkills.some((s) => s.toLowerCase().includes('python') || s.toLowerCase().includes('django'));
        if (!matchesRole) return false;
      } else if (filterRole === 'Game Dev & Growth') {
        const matchesRole =
          m.role.toLowerCase().includes('game') ||
          m.role.toLowerCase().includes('business') ||
          m.portfolioId.includes('farhan');
        if (!matchesRole) return false;
      }

      return true;
    });
  }, [members, filterRole]);

  return (
    <section className="min-h-screen py-12 md:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Hero Banner */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-300 text-xs font-mono mb-5 shadow-sm backdrop-blur-sm">
            <Users className="w-3.5 h-3.5 text-cyan-400" />
            <span>Team</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
            Meet the Builders & Systems Architects of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300">
              Xoraix Technologies
            </span>
          </h1>

          <p className="mt-5 text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            Our multi-disciplinary team of senior full-stack engineers, AI systems architects, Python specialists, and game developers architect, build, and scale high-throughput digital products worldwide.
          </p>

          {/* Quick Highlight Stats Strip */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto">
            <div className="p-3.5 rounded-xl bg-brand-surface/70 border border-brand-border backdrop-blur-sm">
              <div className="text-2xl font-bold text-white">6</div>
              <div className="text-[11px] font-mono text-cyan-400">Core Engineers</div>
            </div>
            <div className="p-3.5 rounded-xl bg-brand-surface/70 border border-brand-border backdrop-blur-sm">
              <div className="text-2xl font-bold text-white">8+ Yrs</div>
              <div className="text-[11px] font-mono text-cyan-400">Avg Seniority</div>
            </div>
            <div className="p-3.5 rounded-xl bg-brand-surface/70 border border-brand-border backdrop-blur-sm">
              <div className="text-2xl font-bold text-white">25+</div>
              <div className="text-[11px] font-mono text-cyan-400">Shipped Systems</div>
            </div>
            <div className="p-3.5 rounded-xl bg-brand-surface/70 border border-brand-border backdrop-blur-sm">
              <div className="text-2xl font-bold text-emerald-400">100%</div>
              <div className="text-[11px] font-mono text-emerald-300">Delivery Record</div>
            </div>
          </div>

          {/* Filter Controls */}
          <div className="mt-10 flex items-center justify-center max-w-4xl mx-auto">
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 w-full sm:w-auto">
              {filterTabs.map((tab) => {
                const isActive = filterRole === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setFilterRole(tab)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-all cursor-pointer ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-600 via-cyan-500 to-cyan-400 text-white font-bold shadow-glow-cyan border border-cyan-300/40 scale-105'
                        : isWhiteMode
                        ? 'bg-white hover:bg-slate-200 text-slate-700 border border-slate-300'
                        : 'bg-brand-surface hover:bg-brand-elevated text-slate-300 hover:text-white border border-brand-border'
                    }`}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-3 text-[11px] font-mono text-slate-400 px-1" />
        </div>

        {/* Team Grid (Card Tiles) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMembers.map((member) => (
            <div
              key={member.slug}
              onClick={() => onSelectMember(member.portfolioId)}
              className="glass-card rounded-3xl border border-brand-border hover:border-cyan-500/60 transition-all duration-300 overflow-hidden flex flex-col group cursor-pointer shadow-xl hover:-translate-y-2 hover:shadow-cyan-500/15"
            >
              {/* Card Photo Tile Container */}
              <div className="relative aspect-[16/15] w-full bg-slate-900 overflow-hidden">
                <img
                  src={member.avatarUrl}
                  alt={member.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    // Fallback to stylized abstract background if photo missing
                    (e.currentTarget as HTMLImageElement).src = '/images/laptop-bg.jpg';
                  }}
                />

                {/* Top Badges Overlay */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10 pointer-events-none">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-brand-dark/90 text-cyan-300 border border-cyan-800 backdrop-blur-md shadow-md">
                    {member.role}
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-emerald-950/90 text-emerald-300 border border-emerald-800 backdrop-blur-md flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Available</span>
                  </span>
                </div>

                {/* Bottom Shadow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/25 to-transparent pointer-events-none" />

                {/* Hover Click Hint */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-cyan-950/90 text-cyan-300 text-xs font-mono border border-cyan-800 backdrop-blur-sm shadow-md">
                    <span>Explore Profile</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>

              {/* Card Content Details */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Name & Subtitle */}
                  <div className="mb-3">
                    <h2 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {member.name}
                    </h2>
                    <div className="text-xs font-mono text-cyan-400 font-medium mt-1">
                      {member.subTitle}
                    </div>
                  </div>

                  {/* Bio Description Snippet */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-5 line-clamp-3">
                    {member.description}
                  </p>
                </div>

                <div>
                  {/* Featured Skills Pills */}
                  <div className="mb-6">
                    <div className="text-[10px] font-mono uppercase text-slate-400 font-semibold mb-2">
                      Core Technologies:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {member.featuredSkills.slice(0, 5).map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-brand-elevated text-slate-200 border border-brand-border/80 group-hover:border-cyan-800/60 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                      {member.featuredSkills.length > 5 && (
                        <span className="px-2 py-1 rounded-md text-[10px] font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800">
                          +{member.featuredSkills.length - 5}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action CTA Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectMember(member.portfolioId);
                    }}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-cyan-400 hover:from-blue-500 hover:to-cyan-300 text-white font-bold text-xs font-mono tracking-wide shadow-glow-cyan flex items-center justify-center gap-2 group-hover:shadow-cyan-500/30 transition-all cursor-pointer"
                  >
                    <span>View Full Profile, CV & Projects</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredMembers.length === 0 && (
          <div className="text-center py-16 p-8 glass-card rounded-2xl border border-brand-border max-w-md mx-auto">
            <Users className="w-8 h-8 text-slate-400 mx-auto mb-3" />
            <div className="text-lg font-bold text-white">No team members found</div>
            <p className="text-xs text-slate-400 mt-1">
              Try adjusting your search query or selecting a different category filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setFilterRole('All');
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-cyan-950 border border-cyan-800 text-xs font-mono text-cyan-300 hover:bg-cyan-900 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Banner */}
        <div className="mt-16 text-center">
          <div className="glass-card rounded-2xl p-8 border border-brand-border max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="text-left">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1 font-bold">
                Collaborative Systems Architecture
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Looking to build high-scale web platforms or AI systems?
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Engage directly with our senior software engineers or consult on full-stack architecture.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onSelectMember('saddam-hussain')}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-mono font-bold text-xs shadow-glow-cyan flex items-center gap-2 whitespace-nowrap cursor-pointer transition-all hover:scale-105"
            >
              <span>Contact Engineering Leadership</span>
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
