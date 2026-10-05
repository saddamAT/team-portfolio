import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import type { EducationItem, CertificationItem } from '../types';

interface EducationCertificationsProps {
  education?: EducationItem[];
  certifications?: CertificationItem[];
}

export default function EducationCertifications({
  education = [],
  certifications = [],
}: EducationCertificationsProps) {
  if (education.length === 0 && certifications.length === 0) return null;

  return (
    <section className="py-16 bg-brand-surface/50 border-t border-brand-border relative" id="education">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Education */}
          {education.length > 0 && (
            <div className={certifications.length > 0 ? 'lg:col-span-6' : 'lg:col-span-12'}>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Education & Academic Credentials
                </h3>
              </div>

              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl glass-card border border-brand-border hover:border-cyan-500/30 transition-colors"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-bold text-white text-base">{edu.degree}</h4>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-800">
                        {edu.period}
                      </span>
                    </div>
                    <div className="text-sm font-mono text-cyan-400 mt-1 flex items-center gap-2">
                      <span>{edu.institution}</span>
                      {edu.location && (
                        <>
                          <span className="text-slate-500">·</span>
                          <span className="text-slate-400 flex items-center gap-1 text-xs">
                            <MapPin className="w-3 h-3 text-slate-500" />
                            {edu.location}
                          </span>
                        </>
                      )}
                    </div>
                    {edu.details && (
                      <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
                        {edu.details}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Right Column: Certifications */}
          {certifications.length > 0 && (
            <div className={education.length > 0 ? 'lg:col-span-6' : 'lg:col-span-12'}>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Award className="w-4 h-4" />
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Professional Certifications
                </h3>
              </div>

              <div className="space-y-3">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-brand-elevated border border-brand-border/80 flex items-center justify-between gap-3 hover:border-purple-500/40 transition-colors"
                  >
                    <div>
                      <h4 className="font-semibold text-white text-sm">{cert.title}</h4>
                      {cert.issuer && (
                        <p className="text-xs text-slate-400 font-mono mt-0.5">{cert.issuer}</p>
                      )}
                    </div>
                    {cert.period && (
                      <span className="text-xs font-mono text-cyan-300 shrink-0 flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-cyan-500" />
                        {cert.period}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
