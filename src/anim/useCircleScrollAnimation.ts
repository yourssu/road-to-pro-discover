import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const useCircleScrollAnimation = (containerAnimation?: GSAPTween) =>
  useGSAP(
    () => {
      if (containerAnimation) {
        const tl = gsap.timeline({
          scrollTrigger: {
            containerAnimation,
            markers: true,
            scrub: true,
          },
        });
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
                end: "left 0%",
                scrub: true,
                containerAnimation,
              },
            },
          ),
        );
        tl.add(
          gsap.to(".project-circle", {
            motionPath: {},
          }),
        );
        return tl;
      }
    },
    { dependencies: [containerAnimation] },
  );
