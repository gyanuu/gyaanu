"use client";

import { useGSAP } from "@gsap/react";
import { ScrollIndicator } from "../icons/scroll-indicator";
import { registerGSAPPlugins, gsap } from "@/lib/gsap";
import SplitText from "gsap/dist/SplitText";
import { MapPinIcon } from "../icons/map-pin";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { socialLinks } from "@/lib/consts";
import { Download } from "lucide-react";

export const HeroSection = () => {
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > lastScrollY.current && scrollY > 40) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      lastScrollY.current = scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    registerGSAPPlugins();

    const tl = gsap.timeline();

    const line1Split = SplitText.create("#hero-line-1", {
      type: "chars",
      charsClass: "line1-chars",
    });
    const line2Split = SplitText.create("#hero-line-2", {
      type: "chars",
      charsClass: "line2-chars",
    });
    const paraSplit = SplitText.create("#hero-para", {
      type: "lines",
      linesClass: "para-lines",
    });

    tl.from("header", {
      duration: 0.5,
      opacity: 0,
      y: -200,
      ease: "circ",
    });

    tl.from(line1Split.chars, {
      duration: 0.5,
      opacity: 0,
      y: -50,
      stagger: {
        amount: 0.04,
        from: "start",
      },
      ease: "circ",
    });

    tl.from(line2Split.chars, {
      delay: 0.1,
      duration: 0.8,
      opacity: 0,
      y: -50,
      stagger: {
        amount: 0.1,
        from: "start",
      },
      ease: "circ",
    });

    tl.from(
      [
        ...paraSplit.lines,
        document.querySelector("#hero-location"),
        document.querySelector("#hero-social-links"),
        document.querySelector("#hero-scroll-indicator"),
      ],
      {
        duration: 1,
        opacity: 0,
        y: -50,
        stagger: {
          amount: 0.2,
          from: "start",
        },
        ease: "circ",
      }
    );
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline();
    if (showHeader) {
      tl.to("header", {
        duration: 0.5,
        y: 0,
        ease: "circ.out",
      });
    } else {
      tl.to("header", {
        duration: 0.5,
        y: -200,
        ease: "circ.in",
      });
    }
  }, [showHeader]);

  return (
    <div className="h-svh flex flex-col justify-center" id="home">
      <div className="h-16 sm:h-0"></div>
      <h1 className="sm:text-4xl text-3xl font-bold" id="hero-line-1">
        Hey there,
      </h1>
      <h2 className="sm:text-5xl text-4xl mt-2 font-semibold" id="hero-line-2">
        I&apos;m Gyaneshwar Singh
      </h2>
      <p className="mt-4 text-secondary-text" id="hero-para">
        I&#39;m a Full-Stack Developer and DevOps enthusiast creating efficient,
        scalable, and reliable applications.
      </p>
      <div className="flex items-center gap-2 mt-4" id="hero-location">
        <MapPinIcon className="inline-block w-5 h-5 text-secondary-text" />
        <p className="text-secondary-text">Jalandhar, India</p>
      </div>
      <div
        className="sm:mt-8 mt-6 flex gap-4 items-center"
        id="hero-social-links"
      >
        {socialLinks.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className=" text-secondary-text hover:text-primary-text transition-colors duration-300"
            >
              <Icon className="w-6 h-6" />
            </a>
          );
        })}
        <a
          href="https://drive.google.com/file/d/1MU5NHItnU1TYNheuqdonNu92qtOi-eYe/view?usp=sharing"
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline">
            <Download className="inline-block w-4 h-4 mr-1" />
            Resume
          </Button>
        </a>
      </div>
      <div
        className="flex items-center justify-center sm:mt-8 mt-6"
        id="hero-scroll-indicator"
      >
        <ScrollIndicator className="w-8 h-8 text-secondary-text animate-bounce duration-1000" />
      </div>
    </div>
  );
};
