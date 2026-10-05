import { useState } from 'react';
import { Server, Layout, Sparkles, Database, Cloud, ShieldCheck, Cpu, Code2, Gamepad2, Layers } from 'lucide-react';
import type { SkillCategory } from '../types';
import { SKILL_CATEGORIES } from '../data/portfolioData';

interface SkillsGridProps {
  categories?: SkillCategory[];
}

export default function SkillsGrid({ categories = SKILL_CATEGORIES }: SkillsGridProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  if (!categories || categories.length === 0) return null;

  // Dynamically generate filter tabs from available categories
  const filterTabs = [
    { id: 'all', label: 'All Capabilities' },
    ...categories.map((cat, idx) => ({
      id: `cat-${idx}`,
      label: cat.name.split('&')[0].split('/')[0].trim(),
      categoryName: cat.name,
    })),
  ];

  const getCategoryIcon = (categoryName: string) => {
    const lower = categoryName.toLowerCase();
    if (lower.includes('game') || lower.includes('unity') || lower.includes('fps')) {
      return <Gamepad2 className="w-5 h-5 text-cyan-400" />;
    }
    if (lower.includes('backend') || lower.includes('server') || lower.includes('api')) {
      return <Server className="w-5 h-5 text-blue-400" />;
    }
    if (lower.includes('frontend') || lower.includes('ui') || lower.includes('design')) {
      return <Layout className="w-5 h-5 text-cyan-400" />;
    }
    if (lower.includes('ai') || lower.includes('intelligence') || lower.includes('machine')) {
      return <Sparkles className="w-5 h-5 text-purple-400" />;
    }
    if (lower.includes('database') || lower.includes('sql') || lower.includes('data')) {
      return <Database className="w-5 h-5 text-emerald-400" />;
    }
    if (lower.includes('cloud') || lower.includes('cross-platform') || lower.includes('devops')) {
      return <Cloud className="w-5 h-5 text-orange-400" />;
    }
    if (lower.includes('tool') || lower.includes('test') || lower.includes('workflow') || lower.includes('architecture')) {
      return <ShieldCheck className="w-5 h-5 text-indigo-400" />;
    }
    return <Code2 className="w-5 h-5 text-cyan-400" />;
  };

  const filteredCategories = categories.filter((cat, idx) => {
    if (selectedFilter === 'all') return true;
    return `cat-${idx}` === selectedFilter;
  });

  return (
    <section className="py-20 bg-brand-surface/75 backdrop-blur-sm relative border-t border-brand-border" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase mb-2">
            Technical Proficiency
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-white tracking-tight leading-tight">
            Verified Technical Stack & Competencies
          </h2>
          <p className="mt-3 text-slate-300 text-sm">
            Categorized technical capabilities built over years of production delivery without arbitrary percentage meters.
          </p>

          {/* Interactive Filter Controls */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-8 p-1.5 bg-brand-dark/90 rounded-xl border border-brand-border max-w-2xl mx-auto">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  selectedFilter === tab.id
                    ? 'bg-brand-elevated text-cyan-300 border border-cyan-700/60 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, idx) => {
            const isHighlighted = idx === 0;

            return (
              <div
                key={cat.name}
                className={`glass-card rounded-2xl p-6 border transition-all duration-300 ${
                  isHighlighted
                    ? 'border-cyan-500/40 shadow-glow-cyan/10 hover:border-cyan-400'
                    : 'border-brand-border/80 hover:border-cyan-500/30'
                }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl border border-brand-border bg-brand-elevated flex items-center justify-center shadow-sm">
                    {getCategoryIcon(cat.name)}
                  </div>
                  <h3 className="text-lg font-bold text-white leading-snug">{cat.name}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => {
                    const isFeatured =
                      cat.featuredSkills?.includes(skill) ??
                      false;

                    return (
                      <span
                        key={skill}
                        className={`px-3 py-1 rounded-lg text-xs font-mono border ${
                          isFeatured
                            ? 'bg-cyan-950/80 text-cyan-300 border-cyan-700/60 font-semibold'
                            : 'bg-brand-elevated text-slate-200 border-brand-border'
                        }`}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
