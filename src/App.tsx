import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { CosmicHero } from './components/CosmicHero';
import { HeroSection } from './components/HeroSection';
import { InterestsSection } from './components/InterestsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { DreamSection } from './components/DreamSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { NetlifyConfigModal } from './components/NetlifyConfigModal';
import {
  DEFAULT_NETLIFY_SUBDOMAIN,
  ProjectItem,
  normalizeSubdomain,
} from './utils/portfolio';

export default function App() {
  const [subdomain, setSubdomain] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('suldee_netlify_subdomain');
      if (saved) return normalizeSubdomain(saved);
    }
    return DEFAULT_NETLIFY_SUBDOMAIN;
  });

  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isConfigOpen, setIsConfigOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('suldee_netlify_subdomain', subdomain);
    } catch {
      // Ignore localStorage errors
    }
  }, [subdomain]);

  const handleSaveSubdomain = (newSub: string) => {
    const cleaned = normalizeSubdomain(newSub);
    setSubdomain(cleaned);
  };

  return (
    <div className="min-h-screen bg-[#03060c] text-neutral-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Top Bar Navigation (Soft Galaxy styling) */}
      <Navbar
        subdomain={subdomain}
        onOpenConfig={() => setIsConfigOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Flagship Cosmic Hero Viewport (Exact match to reference mockup) */}
        <CosmicHero
          subdomain={subdomain}
          onSelectProjectModal={(project) => setSelectedProject(project)}
        />

        {/* Detailed Projects Section */}
        <ProjectsSection
          subdomain={subdomain}
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenConfig={() => setIsConfigOpen(true)}
        />

        {/* About Suld-Ochir & Profile Card Section */}
        <HeroSection subdomain={subdomain} />

        {/* Interests & Hobbies Bento Section */}
        <InterestsSection />

        {/* Dream: Software Engineer Section */}
        <DreamSection subdomain={subdomain} />

        {/* Contact Me Form Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer subdomain={subdomain} />

      {/* Project Detail Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Netlify Subdomain Configuration Modal */}
      <NetlifyConfigModal
        isOpen={isConfigOpen}
        currentSubdomain={subdomain}
        onSave={handleSaveSubdomain}
        onClose={() => setIsConfigOpen(false)}
      />
    </div>
  );
}
