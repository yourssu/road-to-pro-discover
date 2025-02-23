import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const gradients: Record<
  "intro" | "project" | "planningDesign" | "engineering" | "operation",
  [string, string, string, string]
> = {
  intro: [
    "oklch(100% 0 3)",
    "oklch(87.92% 0 0)",
    "oklch(49.26% 0 0)",
    "oklch(32.11% 0 0)",
  ],
  project: [
    "oklch(67.65% 0.2026 41.87)",
    "oklch(59.56% 0.1771 42.17)",
    "oklch(34.18% 0.095 45.06)",
    "oklch(23.02% 0.0582 49.9)",
  ],
  planningDesign: [
    "oklch(61.65% 0.2126 11.33)",
    "oklch(56.6% 0.2155 15.07)",
    "oklch(32.27% 0.117 12.88)",
    "oklch(21.35% 0.0711 9.78)",
  ],
  engineering: [
    "oklch(68.25% 0.1743 249.8)",
    "oklch(61.56% 0.194179 253.7)",
    "oklch(35.49% 0.1051 251.64)",
    "oklch(23.01% 0.0618 247.91)",
  ],
  operation: [
    "oklch(73.38% 0.2465 142.17)",
    "oklch(63.84% 0.2139 142.13)",
    "oklch(35.82% 0.1177 141.71)",
    "oklch(24.13% 0.0772 141.09)",
  ],
};

export const useCircleScrollAnimation = (containerAnimation?: GSAPTween) =>
  useGSAP(
    () => {
      if (containerAnimation) {
        const tl = gsap.timeline({
          scrollTrigger: {
            containerAnimation,
            scrub: true,
          },
        });

        const addCircle = (
          circleSelector: string,
          pathSelector: string,
          currentPanel: string,
          nextPanel: string,
        ) => {
          tl.add(
            gsap.fromTo(
              circleSelector,
              {
                scale: 0,
              },
              {
                scale: 1,
                motionPath: {
                  path: pathSelector,
                  start: 0,
                  end: 0.5,
                },
                ease: "power3.in",
                scrollTrigger: {
                  trigger: currentPanel,
                  start: "left 90%",
                  end: "left 0%",
                  scrub: true,
                  containerAnimation,
                },
              },
            ),
          );
          tl.add(
            gsap.fromTo(
              circleSelector,
              {
                scale: 1,
              },
              {
                scale: 0.25,
                motionPath: {
                  path: pathSelector,
                  start: 0.5,
                  end: 1,
                },
                ease: "power3.in",
                scrollTrigger: {
                  trigger: nextPanel,
                  start: "left 100%",
                  end: "left 20%",
                  scrub: true,
                  containerAnimation,
                },
              },
            ),
          );

          tl.add(
            gsap.to(circleSelector, {
              xPercent: 150,
              opacity: 0,
              ease: "power3.out",
              scrollTrigger: {
                trigger: nextPanel,
                start: "left 40%",
                end: "left 10%",
                scrub: true,
                containerAnimation,
              },
            }),
          );
        };

        const setGradient = (
          trigger: string,
          from: [string, string, string, string],
          to: [string, string, string, string],
        ) => {
          const classes = ["first", "second", "third", "fourth"];
          classes.forEach((c, i) => {
            tl.add(
              gsap.fromTo(
                `#circle_gradient .${c}`,
                {
                  stopColor: from[i],
                  scrollTrigger: {
                    trigger,
                    start: "left 100%",
                    containerAnimation,
                  },
                },
                {
                  stopColor: to[i],
                  ease: "power3.in",
                  overwrite: false,
                  scrollTrigger: {
                    trigger,
                    start: "left 90%",
                    end: "left 0%",
                    scrub: true,
                    containerAnimation,
                  },
                },
              ),
            );
          });
        };

        tl.addLabel("intro");
        // disappearing main-circle
        tl.add(
          gsap.fromTo(
            ".main-circle",
            {
              scale: 1,
            },
            {
              scale: 0.25,
              ease: "circ.inOut",
              scrollTrigger: {
                trigger: "#intro",
                start: "right 100%",
                end: "right 0%",
                scrub: true,
                containerAnimation,
              },
            },
          ),
        );
        tl.add(
          gsap.fromTo(
            ".main-circle",
            {
              xPercent: 0,
              yPercent: -40,
              scrollTrigger: {
                trigger: "#project",
                start: "left 80%",
                end: "left 20%",
                scrub: true,
                containerAnimation,
              },
            },
            {
              xPercent: 150,
              yPercent: -15,
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: "#project",
                start: "left 80%",
                end: "left 40%",
                scrub: true,
                containerAnimation,
              },
            },
          ),
        );

        tl.addLabel("project");

        addCircle(
          ".project-circle",
          "#project_path",
          "#project",
          "#planning_design",
        );

        setGradient("#project", gradients.intro, gradients.project);

        tl.addLabel("planning");

        addCircle(
          ".plan-circle-1",
          "#plan_path_1",
          "#planning_design",
          "#engineering",
        );
        addCircle(
          ".plan-circle-2",
          "#plan_path_2",
          "#planning_design",
          "#engineering",
        );
        addCircle(
          ".plan-circle-3",
          "#plan_path_3",
          "#planning_design",
          "#engineering",
        );
        setGradient(
          "#planning_design",
          gradients.project,
          gradients.planningDesign,
        );

        tl.addLabel("engineering");

        addCircle(".eng-circle", "#eng_path", "#engineering", "#operation");
        setGradient(
          "#engineering",
          gradients.planningDesign,
          gradients.engineering,
        );

        tl.addLabel("operation");

        tl.add(
          gsap.fromTo(
            ".op-circle",
            {
              scale: 0,
            },
            {
              scale: 2,
              motionPath: {
                path: "#op_path",
                start: 0,
                end: 0.5,
              },
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: "#operation",
                start: "left 50%",
                end: "left 0%",
                scrub: true,
                containerAnimation,
              },
            },
          ),
        );
        setGradient("#operation", gradients.engineering, gradients.operation);

        setGradient(
          "#intro",
          [
            "oklch(100% 0 3)",
            "oklch(87.92% 0 0)",
            "oklch(49.26% 0 0)",
            "oklch(32.11% 0 0)",
          ],
          [
            "oklch(100% 0 3)",
            "oklch(87.92% 0 0)",
            "oklch(49.26% 0 0)",
            "oklch(32.11% 0 0)",
          ],
        );

        return tl;
      }
    },
    { dependencies: [containerAnimation] },
  );
