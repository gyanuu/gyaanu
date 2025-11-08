import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const sections = {
      home: [document.getElementById("home")],
      about: [
        document.getElementById("about"),
        document.getElementById("tools"),
        document.getElementById("education"),
      ],
      projects: [document.getElementById("projects")],
      contact: [document.getElementById("contact")],
    };

    const handleScroll = () => {
      let current = Object.keys(sections)[0];
      for (const id of Object.keys(sections)) {
        for (const el of sections[id as keyof typeof sections]) {
          if (!el) continue;
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-5 left-0 right-0 z-30 w-full flex items-stretch justify-center gap-2 h-8 sm:h-10 sm:gap-4">
      <div className="h-full aspect-square rounded-full border border-primabg-primary-text backdrop-blur-md bg-white/5 shadow-2xl items-center justify-center font-bold text-2xl sm:text-3xl hidden sm:flex hide-pointer hover:invert transition-all duration-300">
        G
      </div>
      <nav className=" rounded-full border border-primabg-primary-text backdrop-blur-md p-1 space-x-2 bg-white/5 shadow-2xl h-full flex">
        <a
          href="#home"
          className={cn(
            "hide-pointer px-4 sm:px-5 h-full text-xs sm:text-base flex items-center hover:bg-primary-text hover:text-primary-bg transition-colors duration-300 rounded-full",
            {
              "border border-primabg-primary-text bg-white/20":
                activeSection === "home",
            }
          )}
        >
          Home
        </a>
        <a
          href="#about"
          className={cn(
            "hide-pointer px-4 sm:px-5 h-full text-xs sm:text-base flex items-center hover:bg-primary-text hover:text-primary-bg transition-colors duration-300 rounded-full",
            {
              "border border-primabg-primary-text bg-white/20":
                activeSection === "about",
            }
          )}
        >
          About
        </a>
        <a
          href="#projects"
          className={cn(
            "hide-pointer px-4 sm:px-5 h-full text-xs sm:text-base flex items-center hover:bg-primary-text hover:text-primary-bg transition-colors duration-300 rounded-full",
            {
              "border border-primabg-primary-text bg-white/20":
                activeSection === "projects",
            }
          )}
        >
          Projects
        </a>
        <a
          href="#contact"
          className={cn(
            "hide-pointer px-4 sm:px-5 h-full text-xs sm:text-base flex items-center hover:bg-primary-text hover:text-primary-bg transition-colors duration-300 rounded-full",
            {
              "border border-primabg-primary-text bg-white/20":
                activeSection === "contact",
            }
          )}
        >
          Contact
        </a>
      </nav>
    </header>
  );
};
