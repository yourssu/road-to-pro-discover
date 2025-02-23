import { RefObject, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const useCursorMovementAnimation = <T extends HTMLElement>(
  containerRef: RefObject<T | null>,
) => {
  const ref = containerRef;
  const mouseAnim = useRef<{
    x: gsap.QuickToFunc;
    y: gsap.QuickToFunc;
  }>(null);
  const mousePosPercent = useRef<{ x: number; y: number }>(null);

  useGSAP(() => {
    if (!mouseAnim.current) {
      const xTo = gsap.quickTo(ref.current, "x", {
        duration: 0.6,
        ease: "power2",
      });

      const yTo = gsap.quickTo(ref.current, "y", {
        duration: 0.6,
        ease: "power2",
      });

      mouseAnim.current = { x: xTo, y: yTo };
    }

    return gsap.to("#circle_gradient", {
      duration: 0.018,
      ease: "power2",
      repeat: -1,
      onRepeat: () => {
        if (mousePosPercent.current) {
          gsap.set("#circle_gradient", {
            attr: {
              fx: Math.min(
                Math.max((mousePosPercent.current.x + 1) / 2, 0.25),
                0.75,
              ),
              fy: Math.min(
                Math.max((mousePosPercent.current.y + 1) / 2, 0.25),
                0.75,
              ),
            },
            ease: "power2.out",
          });
        }
      },
    });
  });

  window.addEventListener("mousemove", (e) => {
    if (mouseAnim.current) {
      const { x, y } = {
        x: (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2),
        y: (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2),
      };
      mousePosPercent.current = { x, y };
      const amp = 15;
      mouseAnim.current.x(x * amp * -1);
      mouseAnim.current.y(y * amp * -1);
    }
  });
};
