"use client";

export const AboutSection = () => {
  // useGSAP(() => {
  //   registerGSAPPlugins();

  //   const split = new SplitText(".about-text", { type: "lines" });

  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: "#about",
  //       start: "top 90%",
  //       end: "bottom 70%",
  //       scrub: true,
  //     },
  //   });

  //   tl.from("#about-title", {
  //     duration: 0.5,
  //     opacity: 0,
  //     // x: -50,
  //     ease: "circ",
  //   });

  //   tl.from(split.lines, {
  //     duration: 2,
  //     opacity: 0,
  //     // x: -50,
  //     stagger: {
  //       amount: 0.04,
  //       from: "start",
  //     },
  //     ease: "circ",
  //   });
  // }, []);

  return (
    <div id="about">
      <h3 className="text-2xl font-semibold relative inline" id="about-title">
        About Me
        <div className="absolute left-0 bottom-0 h-0.5 bg-primary-text w-[55px]" />
      </h3>
      <p className="mt-8 text-secondary-text about-text">
        I am a fullstack developer with a passion for creating efficient and
        scalable web applications. My expertise lies in both frontend and
        backend development, allowing me to build complete solutions that meet
        user needs. I am particularly interested in DevOps practices, which help
        streamline development processes and improve application performance.
      </p>
    </div>
  );
};
