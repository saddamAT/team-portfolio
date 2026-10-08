"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  AlertCircle,
  CheckCircle2,
  Cpu,
  Layers,
  UserRound,
} from "lucide-react";
import type { PortfolioData, ProjectGalleryItem } from "../types";

interface ProjectDetailPageProps {
  portfolio: PortfolioData;
  project: ProjectGalleryItem;
}

function buildFallbackChallenges(project: ProjectGalleryItem): string[] {
  return [
    `Deliver a polished ${project.category.toLowerCase()} experience while keeping the interface responsive across desktop and mobile workflows.`,
    `Coordinate the core stack across ${project.techStack.slice(0, 4).join(", ")} without adding friction to day-to-day user tasks.`,
  ];
}

function buildFallbackSolutions(project: ProjectGalleryItem): string[] {
  const stackSummary = project.techStack.slice(0, 5).join(", ");

  return [
    `Structured the implementation around reusable product surfaces, clear data flow, and production-oriented UI states.`,
    `Used ${stackSummary} to support maintainable delivery, smooth interactions, and reliable handoff for the project team.`,
  ];
}

export default function ProjectDetailPage({
  portfolio,
  project,
}: ProjectDetailPageProps) {
  const challenges = project.challenges?.length
    ? project.challenges
    : buildFallbackChallenges(project);
  const solutions = project.solutions?.length
    ? project.solutions
    : buildFallbackSolutions(project);
  const profileHref = `/?profile=${encodeURIComponent(portfolio.id)}#gallery`;

  return (
    <main className="min-h-screen bg-brand-dark text-slate-200 grid-bg-pattern">
      <section className="relative border-b border-brand-border bg-brand-surface/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <Link
            href={profileHref}
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-cyan-300 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to {portfolio.personal.name} projects</span>
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-cyan-300 text-xs font-mono mb-4">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>{project.category}</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                {project.projectTitle || project.title}
              </h1>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                {project.description}
              </p>
            </div>

            <div className="glass-card rounded-xl p-4 min-w-64">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/15 text-cyan-300 flex items-center justify-center">
                  <UserRound className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400">
                    Profile
                  </div>
                  <div className="text-sm font-bold text-white">
                    {portfolio.personal.name}
                  </div>
                </div>
              </div>
              {project.role && (
                <div className="mt-3 pt-3 border-t border-brand-border">
                  <div className="text-xs font-mono text-cyan-300">
                    {project.role}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-8">
            <div className="rounded-2xl overflow-hidden border border-brand-border bg-brand-surface shadow-2xl">
              <div className="flex items-center justify-between px-4 py-3 border-b border-brand-border bg-brand-dark/80">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
                  <Layers className="w-4 h-4" />
                  <span>Project Visual</span>
                </div>
                {project.featured && (
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-800">
                    Featured
                  </span>
                )}
              </div>
              <div className="bg-[#05070b]">
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={`${project.title} project screenshot`}
                    className="w-full max-h-[620px] object-contain object-top"
                  />
                ) : (
                  <div className="aspect-[16/9] flex items-center justify-center p-8 text-center">
                    <div>
                      <div className="text-lg font-bold text-white">
                        {project.title}
                      </div>
                      <div className="mt-1 text-xs font-mono text-cyan-300">
                        {project.category}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <section className="rounded-2xl bg-brand-surface/90 border border-brand-border p-5 sm:p-6">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-wide mb-4">
                  <AlertCircle className="w-4 h-4" />
                  <span>Technical Challenges</span>
                </div>
                <ul className="space-y-3 text-sm text-slate-300">
                  {challenges.map((challenge) => (
                    <li key={challenge} className="flex gap-3 leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-2xl bg-cyan-950/20 border border-cyan-800/70 p-5 sm:p-6">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-300 uppercase tracking-wide mb-4">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Engineering Solutions & Architecture</span>
                </div>
                <ul className="space-y-3 text-sm text-slate-200">
                  {solutions.map((solution) => (
                    <li key={solution} className="flex gap-3 leading-relaxed">
                      <CheckCircle2 className="mt-1 w-4 h-4 text-cyan-300 shrink-0" />
                      <span>{solution}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-6">
            <section className="rounded-2xl bg-brand-surface/90 border border-brand-border p-5 sm:p-6 sticky top-24">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-slate-400 font-bold mb-4">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>Technologies Utilized</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-brand-elevated text-cyan-300 border border-brand-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {(project.liveUrl || project.githubUrl) && (
                <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-brand-border">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold text-xs font-mono flex items-center justify-center gap-2 shadow-glow-cyan"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Visit Live Application</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-3 rounded-xl bg-brand-elevated hover:bg-brand-border text-white font-medium text-xs font-mono flex items-center justify-center gap-2 border border-brand-border"
                    >
                      <Github className="w-4 h-4" />
                      <span>View Source Code</span>
                    </a>
                  )}
                </div>
              )}
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}
