import { useState, useEffect } from 'react';
import ParticleCanvas from './components/ParticleCanvas';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MetricsStrip from './components/MetricsStrip';
import ProjectGallery from './components/ProjectGallery';
import CaseStudies from './components/CaseStudies';
import AISystemsArchitecture from './components/AISystemsArchitecture';
import ExperienceTimeline from './components/ExperienceTimeline';
import EducationCertifications from './components/EducationCertifications';
import SkillsGrid from './components/SkillsGrid';
import EngineeringPhilosophy from './components/EngineeringPhilosophy';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import TeamDirectory from './components/TeamDirectory';
import {
  DEFAULT_PORTFOLIO,
  ALL_PROFILES,
  TEAM_MEMBERS,
  getPortfolioById,
} from './data/portfolioData';
import type { PortfolioData, PersonalInfo, ContactConfig } from './types';
import { Users, Sparkles } from 'lucide-react';

const XORAIX_TECH_CONTACT: PersonalInfo = {
  name: 'Xoraix Technologies',
  initials: 'XT',
  role: 'Technology Studio',
  headline: 'Contact Xoraix Technologies',
  shortBio: 'Product engineering partner for AI systems, cloud platforms, and modern digital experiences.',
  email: 'contact@xoraixtechnologies.com',
  phone: '+1 914 520 6076',
  location: 'Remote / Global',
  status: 'Building high-impact software products and AI workflows worldwide',
  hireable: true,
  highlights: [],
  socials: {
    linkedin: 'https://linkedin.com/company/xoraix',
    website: 'https://xoraixtechnologies.com',
    email: 'contact@xoraixtechnologies.com',
    phone: '+1 914 520 6076',
  },
};

const XORAIX_CONTACT_CONFIG: ContactConfig = {
  headline: 'Contact Xoraix Technologies',
  subtext:
    'Need a senior engineering partner for product development, AI automation, cloud systems, or full-stack delivery? Let’s talk about your roadmap and build the next phase together.',
  availableNotice: 'Global Remote • Product Engineering & AI Systems',
  projectTypes: [
    'AI Product Development',
    'Full-Stack SaaS Engineering',
    'Cloud Architecture & Platform Design',
    'Workflow Automation & AI Systems',
    'Performance Optimization & Product Scaling',
  ],
  budgetOptions: [
    'Consulting / Advisory',
    'Project-Based Engagement',
    'Retainer Partnership',
    'Full-Time / Nearshore Team',
  ],
};

export default function App() {
  // Determine initial view and active developer from URL
  const [view, setView] = useState<'team' | 'member'>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const queryDev = params.get('profile') || params.get('dev') || params.get('id');
      if (queryDev) {
        return 'member';
      }
      const path = window.location.pathname.replace(/^\//, '').toLowerCase();
      if (path && (path.includes('saddam') || path.includes('arslan') || path.includes('farhan') || path.includes('bakar') || path.includes('kamran') || path.includes('taha'))) {
        return 'member';
      }
    }
    // Default to the Team Homepage with card tiles as requested
    return 'team';
  });

  const [activePortfolio, setActivePortfolio] = useState<PortfolioData>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const queryDev = params.get('profile') || params.get('dev') || params.get('id');
      if (queryDev) {
        return getPortfolioById(queryDev);
      }
      const path = window.location.pathname.replace(/^\//, '').toLowerCase();
      if (path) {
        return getPortfolioById(path);
      }
    }
    return DEFAULT_PORTFOLIO;
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isWhiteMode, setIsWhiteMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme_mode') === 'light';
    }
    return false;
  });

  useEffect(() => {
    if (isWhiteMode) {
      document.documentElement.classList.add('white-mode');
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.remove('white-mode');
      document.documentElement.classList.add('dark');
    }
  }, [isWhiteMode]);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (!hash) return;

    const timer = window.setTimeout(() => {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);

    return () => window.clearTimeout(timer);
  }, [view, activePortfolio]);

  // Dynamically update document title, meta tags, and JSON-LD
  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (view === 'team') {
        const fullTitle = 'Xoraix Technologies — Core Engineering Team & Portfolios';
        document.title = fullTitle;
        const descMeta = document.querySelector('meta[name="description"]');
        if (descMeta) {
          descMeta.setAttribute(
            'content',
            'Meet the builders, senior full-stack architects, AI engineers, and game developers of Xoraix Technologies.'
          );
        }
      } else {
        const fullTitle = `${activePortfolio.personal.name} — ${activePortfolio.personal.role} | Xoraix Technologies`;
        document.title = fullTitle;

        const descMeta = document.querySelector('meta[name="description"]');
        if (descMeta) {
          descMeta.setAttribute('content', activePortfolio.personal.shortBio);
        }
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
          ogTitle.setAttribute('content', fullTitle);
        }
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) {
          ogDesc.setAttribute('content', activePortfolio.personal.shortBio);
        }

        // Dynamic JSON-LD structured data injection
        let ldJsonScript = document.getElementById('dynamic-jsonld') as HTMLScriptElement | null;
        if (!ldJsonScript) {
          ldJsonScript = document.createElement('script');
          ldJsonScript.id = 'dynamic-jsonld';
          ldJsonScript.type = 'application/ld+json';
          document.head.appendChild(ldJsonScript);
        }
        ldJsonScript.text = JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: activePortfolio.personal.name,
          jobTitle: activePortfolio.personal.role,
          description: activePortfolio.personal.shortBio,
          image: activePortfolio.personal.avatarUrl,
          email: activePortfolio.personal.email,
          address: {
            '@type': 'PostalAddress',
            addressLocality: activePortfolio.personal.location,
          },
          sameAs: Object.values(activePortfolio.personal.socials).filter(
            (url) => url && typeof url === 'string' && url.startsWith('http')
          ),
          knowsAbout: activePortfolio.skillCategories.flatMap((sc) => sc.skills),
        });
      }
    }
  }, [view, activePortfolio]);

  // Listen for browser back / forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const queryDev = params.get('profile') || params.get('dev') || params.get('id');
      if (queryDev) {
        setActivePortfolio(getPortfolioById(queryDev));
        setView('member');
      } else {
        const path = window.location.pathname.replace(/^\//, '').toLowerCase();
        if (path && (path.includes('saddam') || path.includes('arslan') || path.includes('farhan') || path.includes('bakar') || path.includes('kamran') || path.includes('taha'))) {
          setActivePortfolio(getPortfolioById(path));
          setView('member');
        } else {
          setView('team');
        }
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleToggleWhiteMode = () => {
    setIsWhiteMode((prev) => {
      const next = !prev;
      localStorage.setItem('theme_mode', next ? 'light' : 'dark');
      return next;
    });
  };

  // Navigates to a specific team member detail page
  const handleSelectMember = (portfolioId: string) => {
    const found = getPortfolioById(portfolioId);
    if (found) {
      setActivePortfolio(found);
      setView('member');
      if (typeof window !== 'undefined') {
        const newUrl = new URL(window.location.href);
        newUrl.searchParams.set('profile', found.id);
        window.history.pushState({ profile: found.id }, '', newUrl.toString());
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  // Returns to the Team Directory Homepage
  const handleShowTeam = () => {
    setView('team');
    if (typeof window !== 'undefined') {
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.delete('profile');
      newUrl.searchParams.delete('dev');
      newUrl.searchParams.delete('id');
      window.history.pushState({}, '', newUrl.pathname);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`relative min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden font-sans transition-colors duration-300 ${
        isWhiteMode ? 'white-mode bg-[#f8fafc] text-slate-800' : 'bg-[#080a0f] text-slate-200'
      }`}
    >
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Interactive Constellation & Antigravity Canvas Backdrop */}
      <ParticleCanvas isWhiteMode={isWhiteMode} />

      {/* Top Navigation Bar */}
      <Navbar
        personal={activePortfolio.personal}
        hasBlueprint={!!activePortfolio.blueprint}
        onOpenResume={() => setIsResumeOpen(true)}
        isWhiteMode={isWhiteMode}
        onToggleWhiteMode={handleToggleWhiteMode}
        onShowTeam={handleShowTeam}
        currentView={view === 'team' ? 'team' : 'portfolio'}
      />

      {/* VIEW 1: Team Directory Homepage (Tiles of All Employees) */}
      {view === 'team' ? (
        <main className="relative z-10">
          <TeamDirectory
            members={TEAM_MEMBERS}
            onSelectMember={handleSelectMember}
            isWhiteMode={isWhiteMode}
          />

          <ContactSection
            personal={XORAIX_TECH_CONTACT}
            config={XORAIX_CONTACT_CONFIG}
          />
        </main>
      ) : (
        /* VIEW 2: Employee Specific Detail Page */
        <main className="relative z-10">
          {/* Hero Section */}
          <Hero
            personal={activePortfolio.personal}
            onOpenResume={() => setIsResumeOpen(true)}
          />

          {/* Key Metrics Strip */}
          <MetricsStrip metrics={activePortfolio.metrics} />

          {/* Featured Project Gallery with Bar Chart Statistics */}
          <ProjectGallery
            projects={activePortfolio.projectGallery}
            developerName={activePortfolio.personal.name}
          />

          {/* Flagship Case Studies */}
          <CaseStudies caseStudies={activePortfolio.caseStudies} />

          {/* Architecture Blueprint & Interactive Live Simulator (if present) */}
          {activePortfolio.blueprint && (
            <AISystemsArchitecture blueprint={activePortfolio.blueprint} />
          )}

          {/* Experience Timeline */}
          <ExperienceTimeline items={activePortfolio.experiences} />

          {/* Education & Academic / Professional Credentials */}
          <EducationCertifications
            education={activePortfolio.education}
            certifications={activePortfolio.certifications}
          />

          {/* Technical Skills Grid */}
          <SkillsGrid categories={activePortfolio.skillCategories} />

          {/* Engineering Philosophies */}
          {activePortfolio.philosophies && (
            <EngineeringPhilosophy philosophies={activePortfolio.philosophies} />
          )}

          {/* Contact & Direct Communication Section */}
          <ContactSection
            personal={activePortfolio.personal}
            config={activePortfolio.contactConfig}
          />
        </main>
      )}

      {/* Footer */}
      <Footer
        personal={view === 'team' ? XORAIX_TECH_CONTACT : activePortfolio.personal}
        onOpenResume={view === 'team' ? undefined : () => setIsResumeOpen(true)}
        onShowTeam={handleShowTeam}
      />

      {/* Curriculum Vitae Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        portfolio={activePortfolio}
      />
    </div>
  );
}
