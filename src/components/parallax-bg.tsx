"use client";

import { gsap } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { JSX, useEffect, useState } from "react";

const generateStars = (count: number) => {
  return Array.from({ length: count }, (_, i) => {
    const size = Math.floor(Math.random() * 5) + 1;
    const left = Math.random() * 100;
    const top = Math.random() * 120 - 20;

    return (
      <div
        key={i}
        className={`absolute rounded-full bg-white star-${i} star-size-${size}`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          left: `${left}lvw`,
          top: `${top}lvh`,
          opacity: 0,
        }}
      />
    );
  });
};

export const ParallaxBg = () => {
  const [stars, setStars] = useState<JSX.Element[]>([]);

  useGSAP(() => {
    const allStarsClasses = [
      ".star-size-1",
      ".star-size-2",
      ".star-size-3",
      ".star-size-4",
      ".star-size-5",
    ];

    gsap.to(allStarsClasses.join(", "), {
      opacity: 0.2,
      duration: 1,
    });

    const stars: HTMLElement[] = gsap.utils.toArray(allStarsClasses.join(", "));

    stars.forEach((star) => {
      const size = parseInt(
        (star as HTMLElement).className.match(/star-size-(\d+)/)?.[1] || "1"
      );

      const getMovementRange = (size: number) => {
        switch (size) {
          case 1:
            return { x: 20, y: 15 };
          case 2:
            return { x: 30, y: 20 };
          case 3:
            return { x: 40, y: 25 };
          case 4:
            return { x: 50, y: 30 };
          case 5:
            return { x: 60, y: 35 };
          default:
            return { x: 30, y: 20 };
        }
      };

      const range = getMovementRange(size);
      const duration = 15 + Math.random() * 30;
      const tl = gsap.timeline({ repeat: -1, yoyo: true });
      const waypoints = 7 + Math.floor(Math.random() * 3);

      // Create a wrapper element for the free movement
      const wrapper = document.createElement("div");
      wrapper.style.position = "absolute";
      wrapper.style.width = "100%";
      wrapper.style.height = "100%";
      star.parentNode?.insertBefore(wrapper, star);
      wrapper.appendChild(star);

      // Free movement animation on the wrapper
      for (let i = 0; i < waypoints; i++) {
        const x = (Math.random() - 0.5) * range.x;
        const y = (Math.random() - 0.5) * range.y;

        tl.to(wrapper, {
          x: x,
          y: y,
          duration: duration / waypoints,
          ease: "sine.inOut",
        });
      }

      // Parallax scroll animation on the star itself
      gsap.to(star, {
        y: 200 * (size / 5), // Different speeds based on star size
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      // Scale animation
      if (Math.random() > 0.7) {
        gsap.to(star, {
          scale: 1.2,
          duration: 3 + Math.random() * 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    });
  }, [stars]);

  useEffect(() => {
    if (!window) return;
    const isMobile = window.innerWidth < 768;
    const starCount = isMobile ? 50 : 150;
    setStars(generateStars(starCount));
  }, []);

  return <div className="bg fixed -z-10 h-lvh w-dvw">{stars}</div>;
};
