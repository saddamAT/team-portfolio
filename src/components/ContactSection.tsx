import { useState } from "react";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Globe,
  Copy,
  Check,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";
import type { PersonalInfo, ContactConfig, ContactFormData } from "../types";
import { PROFILE } from "../data/portfolioData";
import { submitContactAction } from "../actions";

interface ContactSectionProps {
  personal?: PersonalInfo;
  config?: ContactConfig;
}

export default function ContactSection({
  personal = PROFILE,
  config,
}: ContactSectionProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  const defaultProjectType =
    config?.projectTypes?.[0] || "Technical Architecture & Engineering";
  const defaultBudget =
    config?.budgetOptions?.[0] || "Full-Time Role / High-Impact Contract";

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    projectType: defaultProjectType,
    budget: defaultBudget,
    message: "",
  });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2400);
    } catch {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2400);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    setFormSuccess(null);
    setIsSubmitting(true);

    const res = await submitContactAction(formData, personal.name, personal.email);

    if (res.success) {
      setFormSuccess(
        res.message ||
          `Thank you! Your message has been transmitted to ${personal.name}.`,
      );
      setFormData({
        name: "",
        email: "",
        company: "",
        projectType: defaultProjectType,
        budget: defaultBudget,
        message: "",
      });
    } else {
      setFormError(
        res.error ||
          "Failed to transmit message. Please check the fields or email directly.",
      );
    }
    setIsSubmitting(false);
  };

  const projectTypes = config?.projectTypes || [
    "Senior Role Inquiry",
    "Commercial Game Development",
    "System Architecture Consulting",
    "Performance Optimization & Profiling",
    "Cross-Platform Porting",
  ];

  const budgetOptions = config?.budgetOptions || [
    "Full-Time Role",
    "Contract: $10,000 – $25,000",
    "Contract: $25,000 – $50,000+",
    "Consulting / Advisory",
  ];

  return (
    <section
      className="py-20 bg-brand-surface/75 backdrop-blur-sm relative border-t border-brand-border"
      id="contact"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-brand-border shadow-2xl">
          {/* Header Banner */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-400 text-xs font-mono mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {config?.availableNotice || personal.status}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-white tracking-tight leading-tight">
              {config?.headline || "Let's Build Something Exceptional"}
            </h2>
            <p className="mt-3 text-slate-300 text-sm">
              {config?.subtext ||
                `Looking for an experienced ${personal.role} to lead technical execution or scale your systems?`}
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-12">
            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-brand-elevated border border-brand-border flex flex-col items-center justify-between">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3">
                <Mail className="w-6 h-6" />
              </div>
              <div className="text-xs font-mono text-slate-400 mb-1">
                Direct Email
              </div>
              <a
                className="text-white font-medium text-xs break-all hover:text-cyan-400 transition-colors"
                href={`mailto:${personal.email}`}
              >
                {personal.email}
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="mt-4 px-3 py-1.5 rounded-lg bg-brand-surface hover:bg-brand-elevated text-slate-300 text-xs font-mono flex items-center gap-1.5 border border-brand-border transition-colors cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-sans font-medium">
                      Copied! ✓
                    </span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* LinkedIn / Social Card */}
            {personal.socials?.linkedin ? (
              <div className="p-5 rounded-2xl bg-brand-elevated border border-brand-border flex flex-col items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-3">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div className="text-xs font-mono text-slate-400 mb-1">
                  Professional Network
                </div>
                <div className="text-white font-medium text-xs">
                  LinkedIn Profile
                </div>
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-4 py-1.5 rounded-lg bg-brand-surface hover:bg-brand-elevated text-cyan-300 text-xs font-mono border border-brand-border transition-colors"
                >
                  Connect on LinkedIn ➔
                </a>
              </div>
            ) : personal.socials?.github ? (
              <div className="p-5 rounded-2xl bg-brand-elevated border border-brand-border flex flex-col items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-slate-700/20 border border-slate-600/30 flex items-center justify-center text-slate-200 mb-3">
                  <Github className="w-6 h-6" />
                </div>
                <div className="text-xs font-mono text-slate-400 mb-1">
                  Source Code
                </div>
                <div className="text-white font-medium text-xs">
                  GitHub Repositories
                </div>
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-4 py-1.5 rounded-lg bg-brand-surface hover:bg-brand-elevated text-cyan-300 text-xs font-mono border border-brand-border transition-colors"
                >
                  View GitHub ➔
                </a>
              </div>
            ) : (
              <div className="p-5 rounded-2xl bg-brand-elevated border border-brand-border flex flex-col items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3">
                  <Globe className="w-6 h-6" />
                </div>
                <div className="text-xs font-mono text-slate-400 mb-1">
                  Location
                </div>
                <div className="text-white font-medium text-xs">
                  {personal.location}
                </div>
                <span className="mt-4 text-[11px] font-mono text-emerald-400">
                  Available Globally
                </span>
              </div>
            )}

            {/* Phone or GitHub Card */}
            {personal.phone ? (
              <div className="p-5 rounded-2xl bg-brand-elevated border border-brand-border flex flex-col items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="text-xs font-mono text-slate-400 mb-1">
                  Direct Phone / WhatsApp
                </div>
                <a
                  className="text-white font-medium text-xs hover:text-emerald-400 transition-colors"
                  href={`tel:${personal.phone}`}
                >
                  {personal.phone}
                </a>
                <a
                  href={`tel:${personal.phone}`}
                  className="mt-4 px-4 py-1.5 rounded-lg bg-brand-surface hover:bg-brand-elevated text-slate-300 text-xs font-mono border border-brand-border transition-colors"
                >
                  Call or Message
                </a>
              </div>
            ) : personal.socials?.github ? (
              <div className="p-5 rounded-2xl bg-brand-elevated border border-brand-border flex flex-col items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-slate-700/20 border border-slate-600/30 flex items-center justify-center text-slate-200 mb-3">
                  <Github className="w-6 h-6" />
                </div>
                <div className="text-xs font-mono text-slate-400 mb-1">
                  Open Source & Code
                </div>
                <div className="text-white font-medium text-xs">
                  GitHub Repositories
                </div>
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-4 py-1.5 rounded-lg bg-brand-surface hover:bg-brand-elevated text-cyan-300 text-xs font-mono border border-brand-border transition-colors"
                >
                  View GitHub ➔
                </a>
              </div>
            ) : personal.socials?.website ? (
              <div className="p-5 rounded-2xl bg-brand-elevated border border-brand-border flex flex-col items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-3">
                  <Globe className="w-6 h-6" />
                </div>
                <div className="text-xs font-mono text-slate-400 mb-1">
                  Website
                </div>
                <div className="text-white font-medium text-xs">
                  Official Domain
                </div>
                <a
                  href={personal.socials.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-4 py-1.5 rounded-lg bg-brand-surface hover:bg-brand-elevated text-cyan-300 text-xs font-mono border border-brand-border transition-colors"
                >
                  Visit Website ➔
                </a>
              </div>
            ) : (
              <div className="p-5 rounded-2xl bg-brand-elevated border border-brand-border flex flex-col items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3">
                  <Globe className="w-6 h-6" />
                </div>
                <div className="text-xs font-mono text-slate-400 mb-1">
                  Status
                </div>
                <div className="text-white font-medium text-xs">
                  {personal.status}
                </div>
                <span className="mt-4 text-[11px] font-mono text-cyan-400">
                  Available
                </span>
              </div>
            )}
          </div>

          {/* Feedback Banners */}
          {formSuccess && (
            <div className="mb-6 p-4 rounded-xl bg-emerald-950/80 border border-emerald-700/80 text-emerald-200 text-xs font-mono flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>{formSuccess}</span>
            </div>
          )}

          {formError && (
            <div className="mb-6 p-4 rounded-xl bg-rose-950/80 border border-rose-700/80 text-rose-200 text-xs font-mono flex items-center gap-3">
              <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
              <span>{formError}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-mono text-slate-300 mb-2"
                >
                  Name *
                </label>
                <input
                  id="Full Name"
                  type="text"
                  required
                  placeholder="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-brand-dark/90 border border-brand-border text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-mono text-slate-300 mb-2"
                >
                  Email Address*
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-brand-dark/90 border border-brand-border text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label
                  htmlFor="company"
                  className="block text-xs font-mono text-slate-300 mb-2"
                >
                  Company (Optional)
                </label>
                <input
                  id="company"
                  type="text"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-brand-dark/90 border border-brand-border text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="projectType"
                  className="block text-xs font-mono text-slate-300 mb-2"
                >
                  Inquiry / Project Scope
                </label>
                <select
                  id="projectType"
                  value={formData.projectType}
                  onChange={(e) =>
                    setFormData({ ...formData, projectType: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-brand-dark/90 border border-brand-border text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors cursor-pointer"
                >
                  {projectTypes.map((pt) => (
                    <option
                      key={pt}
                      value={pt}
                      className="bg-brand-dark text-white"
                    >
                      {pt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="budget"
                  className="block text-xs font-mono text-slate-300 mb-2"
                >
                  Target Engagement
                </label>
                <select
                  id="budget"
                  value={formData.budget}
                  onChange={(e) =>
                    setFormData({ ...formData, budget: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-brand-dark/90 border border-brand-border text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors cursor-pointer"
                >
                  {budgetOptions.map((bo) => (
                    <option
                      key={bo}
                      value={bo}
                      className="bg-brand-dark text-white"
                    >
                      {bo}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs font-mono text-slate-300 mb-2"
              >
                Project Overview or Role Details *
              </label>
              <textarea
                id="message"
                required
                rows={4}
                placeholder="Share your project goals, technology requirements, or role specification..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 rounded-xl bg-brand-dark/90 border border-brand-border text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-[11px] font-mono text-slate-400">
                🔒 Direct transmission to {personal.name}
              </span>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold text-sm shadow-glow-cyan transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Direct Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
