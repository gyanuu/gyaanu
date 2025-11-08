"use client";

import { registerGSAPPlugins } from "@/lib/gsap";
import { useGSAP } from "@gsap/react";
import { JavaScriptIcon } from "../icons/technologies/javascript";
import { TypeScriptIcon } from "../icons/technologies/typescript";
import { PythonIcon } from "../icons/technologies/python";
import { GoLangIcon } from "../icons/technologies/golang";
import { CppIcon } from "../icons/technologies/cpp";
import { ReactIcon } from "../icons/technologies/react";
import { NextIcon } from "../icons/technologies/next";
import { AstroIcon } from "../icons/technologies/astro";
import { TailwindIcon } from "../icons/technologies/tailwind";
import { NodeIcon } from "../icons/technologies/node";
import { BunIcon } from "../icons/technologies/bun";
import { GitIcon } from "../icons/technologies/git";
import { KubernetesIcon } from "../icons/technologies/kubernetes";
import { DockerIcon } from "../icons/technologies/docker";
import { AWSIcon } from "../icons/technologies/aws";

const lists = [
  {
    title: "Languages",
    items: [
      {
        name: "JavaScript",
        icon: JavaScriptIcon,
        subtext: "Proficient",
      },
      {
        name: "TypeScript",
        icon: TypeScriptIcon,
        subtext: "Proficient",
      },
      {
        name: "Python",
        icon: PythonIcon,
        subtext: "Competent",
      },
      {
        name: "Go",
        icon: GoLangIcon,
        subtext: "Working Knowledge",
      },
      {
        name: "C++",
        icon: CppIcon,
        subtext: "Working Knowledge",
      },
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      {
        name: "Node.js",
        icon: NodeIcon,
        subtext: "Proficient",
      },
      {
        name: "Bun",
        icon: BunIcon,
        subtext: "Proficient",
      },
      {
        name: "React",
        icon: ReactIcon,
        subtext: "Proficient",
      },
      {
        name: "Next.js",
        icon: NextIcon,
        subtext: "Proficient",
      },
      {
        name: "Astro",
        icon: AstroIcon,
        subtext: "Proficient",
      },
      {
        name: "Tailwind CSS",
        icon: TailwindIcon,
        subtext: "Proficient",
      },
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      {
        name: "Docker",
        icon: DockerIcon,
        subtext: "Proficient",
      },
      {
        name: "Kubernetes",
        icon: KubernetesIcon,
        subtext: "Competent",
      },
      {
        name: "Git",
        icon: GitIcon,
        subtext: "Proficient",
      },
      {
        name: "AWS",
        icon: AWSIcon,
        subtext: "Working Knowledge",
      },
    ],
  },
];

export const ToolsAndTechnologiesSection = () => {
  useGSAP(() => {
    registerGSAPPlugins();

    // const split = new SplitText(".tools-text", { type: "lines" });

    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: "#tools",
    //     start: "top 90%",
    //     end: "bottom 70%",
    //     scrub: true,
    //   },
    // });

    // tl.from("#tools-title", {
    //   duration: 0.5,
    //   opacity: 0,
    //   x: -50,
    //   ease: "circ",
    // });

    // tl.from(split.lines, {
    //   duration: 0.5,
    //   opacity: 0,
    //   x: -50,
    //   stagger: {
    //     amount: 0.04,
    //     from: "start",
    //   },
    //   ease: "circ",
    // });
  }, []);

  return (
    <div className="mt-28" id="tools">
      <h3 className="text-2xl font-semibold relative inline" id="tools-title">
        Tools & Technologies
        <div className="absolute left-0 bottom-0 h-0.5 bg-primary-text w-[55px]" />
      </h3>

      <div className="mt-6 space-y-6">
        {lists.map((list) => (
          <div key={list.title}>
            <h4 className="text-lg font-semibold mb-2">{list.title}</h4>
            <div className="flex flex-wrap gap-4">
              {list.items.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    className="px-3 py-2 flex gap-3 items-center border border-primary-text rounded-lg hide-pointer hover:scale-110 transition-transform duration-200 ease-in-out"
                    key={item.name}
                  >
                    <Icon className="w-7 h-7 text-primary-text" />

                    <div>
                      <p className="font-medium">{item.name}</p>
                      {/* <p className="ml-2 text-xs text-secondary-text">
                        {item.subtext}
                      </p> */}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
