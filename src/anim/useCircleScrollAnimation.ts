import { CircleAnimDef, circleDefs } from "@/lib/def";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const gradients = Object.fromEntries([
  ...Object.entries(circleDefs).map(([k, v]) => [k, v.gradient]),
  [
    "intro",
    [
      "oklch(100% 0 3)",
      "oklch(87.92% 0 0)",
      "oklch(49.26% 0 0)",
      "oklch(32.11% 0 0)",
    ],
  ],
]) as Record<
  | "intro"
  | "project"
  | "planningDesign"
  | "engineering"
  | "operation"
  | "outro",
  [string, string, string, string]
>;

export const useCircleScrollAnimation = (containerAnimation?: GSAPTween) =>
  useGSAP(
    () => {
      if (containerAnimation) {
        const tl = gsap.timeline({
          delay: 3,
          scrollTrigger: {
            containerAnimation,
            scrub: true,
          },
        });

        const addCircle = (
          circleSelector: string,
          r: number,
          pathSelector: string,
          currentPanel: string,
          nextPanel?: string,
        ) => {
          const randBreakpoint = Math.random() * 0.5 + 0.35;
          tl.add(
            gsap.fromTo(
              circleSelector,
              {
                attr: {
                  r,
                },
                scale: 0,
                opacity: 0,
              },
              {
                scale: 1,
                opacity: 0.75,
                duration: 1,
                motionPath: {
                  path: pathSelector,
                  start: 0,
                  end: randBreakpoint,
                },
                ease: "power3.in",
                scrollTrigger: {
                  trigger: currentPanel,
                  start: "left 70%",
                  end: "left 10%",
                  scrub: true,
                  containerAnimation,
                },
              },
            ),
          );
          if (!nextPanel) return;
          tl.add(
            gsap.fromTo(
              circleSelector,
              {
                scale: 1,
              },
              {
                scale: 0.25,
                duration: 1,
                immediateRender: false,
                motionPath: {
                  path: pathSelector,
                  start: randBreakpoint,
                  end: 1,
                },
                ease: "power3.in",
                scrollTrigger: {
                  trigger: nextPanel,
                  start: "left 170%",
                  end: "left 50%",
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
                opacity: 0.75,
              },
              {
                xPercent: 150,
                opacity: 0,
                duration: 1,
                immediateRender: false,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: nextPanel,
                  start: "left 80%",
                  end: "left 10%",
                  scrub: true,
                  containerAnimation,
                },
              },
            ),
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
                    start: "left 140%",
                    containerAnimation,
                  },
                },
                {
                  stopColor: to[i],
                  ease: "power3.in",
                  duration: 1,
                  immediateRender: false,
                  scrollTrigger: {
                    trigger,
                    start: "left 100%",
                    end: "left 30%",
                    scrub: true,
                    containerAnimation,
                  },
                },
              ),
            );
          });
        };

        const setupCirclePanel = (
          def: CircleAnimDef,
          prevGradient: [string, string, string, string],
        ) => {
          tl.addLabel(def.name);
          const qtyArr = [...Array(def.qty)];

          qtyArr.forEach((_, i) => {
            addCircle(
              `.${def.name}-circle-${i}`,
              def.r,
              `#${def.name}_path_${i}`,
              def.panel,
              def.nextPanel,
            );
          });

          setGradient(def.panel, prevGradient, def.gradient);
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
              duration: 1,
              scrollTrigger: {
                trigger: "#_intro",
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
              duration: 1,
              scrollTrigger: {
                trigger: "#_project",
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
                trigger: "#_project",
                start: "left 80%",
                end: "left 40%",
                scrub: true,
                containerAnimation,
              },
            },
          ),
        );

        setupCirclePanel(circleDefs.project, gradients.intro);
        setupCirclePanel(circleDefs.planningDesign, gradients.project);
        setupCirclePanel(circleDefs.engineering, gradients.planningDesign);
        setupCirclePanel(circleDefs.operation, gradients.engineering);
        setupCirclePanel(circleDefs.outro, gradients.operation);

        setGradient("#_intro", gradients.intro, gradients.intro);

        return tl;
      }
    },
    { dependencies: [containerAnimation] },
  );
