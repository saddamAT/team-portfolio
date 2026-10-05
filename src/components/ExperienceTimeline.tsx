import type { ExperienceItem } from '../types';
import { EXPERIENCES } from '../data/portfolioData';

interface ExperienceTimelineProps {
  items?: ExperienceItem[];
}

export default function ExperienceTimeline({ items = EXPERIENCES }: ExperienceTimelineProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className="py-20 bg-brand-dark relative" id="experience">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase mb-2">
            Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-white tracking-tight leading-tight">
            Professional Work Experience
          </h2>
          <p className="mt-3 text-slate-400 text-sm">
            Chronological track record of engineering roles, technical ownership, architecture, and delivered impact.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-brand-border ml-4 sm:ml-8 space-y-12">
          {items.map((exp, index) => {
            const isFirst = index === 0;
            const isSecond = index === 1;

            return (
              <div key={`${exp.company}-${exp.period}`} className="relative pl-6 sm:pl-10">
                {/* Bullet indicator */}
                <span
                  className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full ring-4 ring-brand-dark ${
                    isFirst ? 'bg-cyan-500' : isSecond ? 'bg-blue-500' : 'bg-slate-500'
                  }`}
                />

                <div
                  className={`glass-card p-6 sm:p-8 rounded-2xl border ${
                    isFirst ? 'border-cyan-500/40 shadow-glow-cyan/10' : 'border-brand-border'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-mono border ${
                        exp.active || isFirst
                          ? 'bg-cyan-950/80 text-cyan-300 border-cyan-800'
                          : 'bg-brand-surface text-slate-300 border-brand-border'
                      }`}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <div
                    className={`text-sm font-semibold font-mono mb-3 ${
                      isFirst
                        ? 'text-cyan-400'
                        : isSecond
                        ? 'text-blue-400'
                        : 'text-slate-300'
                    }`}
                  >
                    {exp.company} · {exp.location}
                    {exp.employmentType && (
                      <span className="text-slate-500 text-xs ml-2 font-normal">
                        ({exp.employmentType})
                      </span>
                    )}
                  </div>

                  {exp.summary && (
                    <p className="text-sm text-slate-300 mb-3 italic">
                      {exp.summary}
                    </p>
                  )}

                  <ul className="space-y-2 text-sm text-slate-300 leading-relaxed list-disc list-outside ml-4">
                    {exp.bulletPoints.map((point, i) => (
                      <li key={i} className="leading-relaxed">
                        {point}
                      </li>
                    ))}
                  </ul>

                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-brand-border/60 flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-brand-dark/80 border border-brand-border/80 text-[11px] font-mono text-cyan-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
