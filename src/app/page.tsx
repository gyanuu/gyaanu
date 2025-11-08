"use client";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ParallaxBg } from "@/components/parallax-bg";
import { AboutSection } from "@/components/sections/about";
import { EducationSection } from "@/components/sections/education";
import { HeroSection } from "@/components/sections/hero";
import { ToolsAndTechnologiesSection } from "@/components/sections/tools";
import { useGSAP } from "@gsap/react";
import { registerGSAPPlugins } from "@/lib/gsap";
import { ProjectsSection } from "@/components/sections/projects";
import { Pointer } from "@/components/magicui/pointer";
import { Toaster } from "@/components/ui/sonner";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  useGSAP(() => {
    registerGSAPPlugins();

    // ScrollSmoother.create({
    //   content: "main",
    // });
  }, []);

  return (
    <div>
      <Toaster />
      <Pointer></Pointer>

      <ParallaxBg />
      <Header />
      <main className="p-5 pt-0 max-w-[65ch] mx-auto">
        <HeroSection />

        <AboutSection />

        <ToolsAndTechnologiesSection />

        <EducationSection />

        <ProjectsSection />

        <ContactSection />

        <Footer />
      </main>
    </div>
  );
}
