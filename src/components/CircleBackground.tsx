"use client";

import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLayoutEffect, useRef, useState } from "react";

export default function CircleBackground({
  containerAnimation,
}: {
  containerAnimation?: GSAPTween;
}) {
  const [deviceOrientation, setDeviceOrientation] = useState<
    "horizontal" | "vertical"
  >("horizontal");
  const mouseAnim = useRef<{
    x: gsap.QuickToFunc;
    y: gsap.QuickToFunc;
  }>(null);
  const mousePosPercent = useRef<{ x: number; y: number }>(null);
  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const updateOrientation = () => {
      const ratio = window.innerWidth / window.innerHeight;
      if (ratio > 1) setDeviceOrientation("horizontal");
      else setDeviceOrientation("vertical");
    };
    updateOrientation();
    window.addEventListener("resize", updateOrientation);
  }, []);

  // Scroll animation
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
        return tl;
      }
    },
    { scope: ref, dependencies: [containerAnimation] },
  );
  // Cursor animation
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
          console.log(mousePosPercent.current);
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

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 -z-10 w-full h-full rounded-none"
    >
      <svg
        viewBox="0 0 100 100"
        className={cn(
          "overflow-visible absolute inset-0 opacity-50",
          deviceOrientation === "horizontal"
            ? "w-full top-1/2 -translate-y-1/2"
            : "w-[100vh] h-[100vh] left-1/2 -translate-x-1/2",
        )}
      >
        <defs>
          <radialGradient id="circle_gradient" fx="25%" fy="25%">
            <stop offset="0%" stopColor="oklch(100% 0 3)" />
            <stop offset="18%" stopColor="oklch(87.92% 0 0)" />
            <stop offset="75%" stopColor="oklch(49.26% 0 0)" />
            <stop offset="100%" stopColor="oklch(32.11% 0 0)" />
          </radialGradient>
        </defs>
        <circle
          className="main-circle"
          cx="50"
          cy="60"
          r="30"
          fill="url(#circle_gradient)"
        ></circle>
      </svg>
    </div>
  );
}
