import React from "react";
import "./App.css";
import { siteData } from "./content/siteData";
import { AppShell } from "./components/layout/AppShell";
import { HomeSection } from "./components/sections/HomeSection";
import { AboutSection } from "./components/sections/AboutSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { WorkSection } from "./components/sections/WorkSection";
import { VisualExperimentationsSection } from "./components/sections/VisualExperimentationsSection";
import { ServicesSection } from "./components/sections/ServicesSection";
import { FooterSection } from "./components/sections/FooterSection";

// PUBLIC_INTERFACE
function App() {
  /** Single-page, typography-first portfolio application. */
  return (
    <AppShell navItems={siteData.nav}>
      <main id="main" className="site-main" role="main">
        <HomeSection data={siteData.home} />
        <AboutSection data={siteData.about} />
        <ExperienceSection data={siteData.experience} />
        <WorkSection data={siteData.work} />
        <VisualExperimentationsSection data={siteData.visualExperimentations} />
        <ServicesSection data={siteData.services} />
      </main>
      <FooterSection data={siteData.footer} />
    </AppShell>
  );
}

export default App;
