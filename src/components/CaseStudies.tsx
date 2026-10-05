import { useState } from 'react';
import { Layers, CheckCircle2, X, Github, ExternalLink } from 'lucide-react';
import type { CaseStudy } from '../types';
import { CASE_STUDIES } from '../data/portfolioData';

interface CaseStudiesProps {
  caseStudies?: CaseStudy[];
}

export default function CaseStudies({ caseStudies = CASE_STUDIES }: CaseStudiesProps) {
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);

  if (!caseStudies || caseStudies.length === 0) return null;

  return (
    <section className="py-20 bg-brand-dark relative" id="case-studies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="text-cyan-400 text-xs font-mono font-semibold tracking-wider uppercase mb-2">
              Featured Work & Systems
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-white tracking-tight leading-tight">
              Engineering Projects & Case Studies
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md mt-4 md:mt-0 font-normal">
            Production systems, commercial games, and scalable software engineered for high reliability, tight performance budgets, and real-world impact.
          </p>
        </div>

        {/* Case Studies Stack */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => {
            const isFirst = index === 0;
            const shortName = study.title.includes('—')
              ? study.title.split('—')[0].trim()
              : study.title.split('-')[0].trim();

            return (
              <article
                key={study.id}
                className="glass-card rounded-2xl p-6 sm:p-8 lg:p-10 border border-brand-border relative overflow-hidden transition-all duration-300 hover:border-cyan-500/40"
              >
                {isFirst && (
                  <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
                )}

                {/* Card Header Bar */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-brand-border pb-6">
                  <div>
                    {study.flagshipBadge && (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono border bg-cyan-950/80 text-cyan-300 border-cyan-800">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                        {study.flagshipBadge}
                      </span>
                    )}
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">
                      {study.title}
                    </h3>
                    {(study.company || study.period) && (
                      <p className="text-xs text-slate-400 font-mono mt-1">
                        {[study.company, study.period, study.role].filter(Boolean).join(' · ')}
                      </p>
                    )}
                  </div>

                  {/* Actions & Tech Stack */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {study.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded bg-brand-elevated text-slate-300 text-xs font-mono border border-brand-border"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* GitHub & Live Links if available */}
                    <div className="flex items-center gap-2">
                      {study.githubUrl && (
                        <a
                          href={study.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-brand-surface hover:bg-brand-elevated border border-brand-border text-slate-300 hover:text-white transition-colors"
                          title="View Repository"
                          aria-label="View Repository"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {study.liveUrl && (
                        <a
                          href={study.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-brand-surface hover:bg-brand-elevated border border-brand-border text-cyan-400 hover:text-cyan-300 transition-colors"
                          title="Live Demo / Website"
                          aria-label="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Grid content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
                  {/* Left Column: Problem & Engineering Solution */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <h4 className="text-xs font-semibold uppercase font-mono tracking-wider text-cyan-400">
                        The Challenge & Problem Scope
                      </h4>
                      <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                        {study.problem}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-semibold uppercase font-mono tracking-wider text-cyan-400">
                        Key Engineering Contributions
                      </h4>
                      <ul className="mt-3 space-y-2.5 text-sm text-slate-300">
                        {study.contributions.map((contribution, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="text-cyan-400 mt-1 shrink-0">▸</span>
                            <span className="leading-relaxed">{contribution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <button
                        type="button"
                        onClick={() => setSelectedStudy(study)}
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors underline underline-offset-4 cursor-pointer"
                      >
                        <Layers className="w-3.5 h-3.5" />
                        <span>Inspect Complete Technical Specs ➔</span>
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Interactive Architecture Box */}
                  <div className="lg:col-span-5 bg-brand-surface rounded-xl p-5 border border-brand-border flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between border-b border-brand-border pb-3 mb-4">
                        <span className="font-mono text-xs text-slate-300 font-bold uppercase tracking-wider truncate max-w-[200px]">
                          {shortName} Flow
                        </span>
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800 flex items-center gap-1 font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Production
                        </span>
                      </div>

                      {/* Step Nodes */}
                      {study.architectureFlow && study.architectureFlow.length > 0 ? (
                        <div className="space-y-2.5 font-mono text-xs">
                          {study.architectureFlow.map((flowStep, idx) => (
                            <div key={idx} className="space-y-1">
                              <div className="p-2.5 rounded bg-brand-dark border border-brand-border/70 flex items-center justify-between">
                                <span className="text-slate-200 font-medium">{flowStep.step}</span>
                                <span className="text-cyan-400 text-[11px] truncate max-w-[170px]">
                                  {flowStep.description}
                                </span>
                              </div>
                              {idx < study.architectureFlow!.length - 1 && (
                                <div className="text-center text-slate-500 text-[10px] py-0.5">
                                  ↓ {flowStep.subtext}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="p-4 rounded bg-brand-dark/50 border border-brand-border text-center text-xs text-slate-400 font-mono">
                          Modular decoupled subsystem architecture with zero-leak resource management.
                        </div>
                      )}
                    </div>

                    {/* Business Impact Box */}
                    {study.impact && study.impact.length > 0 && (
                      <div className="mt-6 pt-4 border-t border-brand-border/60">
                        <div className="text-xs font-semibold text-white mb-2 font-mono uppercase tracking-wider">
                          Verified Metric Impact:
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-center">
                          {study.impact.map((item, idx) => (
                            <div key={idx} className="p-2 rounded bg-brand-elevated border border-brand-border/50">
                              <div className="text-base font-bold text-cyan-400 font-mono">
                                {item.metric}
                              </div>
                              <div className="text-[10px] text-slate-400 font-medium mt-0.5">
                                {item.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-brand-surface border border-brand-border p-6 sm:p-8 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedStudy(null)}
              className="absolute top-5 right-5 p-2 rounded-lg bg-brand-elevated text-slate-400 hover:text-white hover:bg-brand-border transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                Technical Architecture Specification
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">{selectedStudy.title}</h3>
              <p className="text-xs text-slate-400 font-mono mt-1">
                {[selectedStudy.company, selectedStudy.period, `Role: ${selectedStudy.role}`]
                  .filter(Boolean)
                  .join(' · ')}
              </p>
            </div>

            <div className="space-y-6 text-sm text-slate-300">
              <div className="p-4 rounded-xl bg-brand-elevated border border-brand-border/80">
                <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono mb-2">
                  System Architecture Overview
                </h4>
                <p className="leading-relaxed">{selectedStudy.problem}</p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono mb-3">
                  Key Technical Capabilities Delivered
                </h4>
                <ul className="space-y-2">
                  {selectedStudy.contributions.map((c, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono mb-3">
                  Technology Stack & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedStudy.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-brand-dark border border-brand-border text-xs font-mono text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-brand-border flex items-center justify-between">
                <a
                  href="#contact"
                  onClick={() => setSelectedStudy(null)}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium text-xs shadow-glow-cyan transition-all"
                >
                  Discuss This Project
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedStudy(null)}
                  className="px-4 py-2 rounded-lg bg-brand-elevated text-slate-300 hover:text-white text-xs font-mono border border-brand-border cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
