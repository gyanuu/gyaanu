import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText";
import ScrollSmoother from "gsap/dist/ScrollSmoother";

let pluginsRegistered = false;

export const registerGSAPPlugins = () => {
  if (typeof window !== "undefined" && !pluginsRegistered) {
    gsap.registerPlugin(useGSAP, SplitText, ScrollSmoother, ScrollTrigger);
    pluginsRegistered = true; // Ensure registration happens only once
  }
};

export { gsap };
