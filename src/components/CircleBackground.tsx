"use client";

import { cn } from "@/lib/utils";
import { useLayoutEffect, useRef, useState } from "react";
import { PathGenerator } from "@/components/PathGenerator";
import { useCircleScrollAnimation } from "@/anim/useCircleScrollAnimation";
import { useCursorMovementAnimation } from "@/anim/useCursorMovementAnimation";

export default function CircleBackground({
  containerAnimation,
}: {
  containerAnimation?: GSAPTween;
}) {
  const [deviceOrientation, setDeviceOrientation] = useState<
    "horizontal" | "vertical"
  >("horizontal");
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
  useCircleScrollAnimation(containerAnimation);
  useCursorMovementAnimation(ref);

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
            <stop className="first" offset="0%" stopColor="oklch(100% 0 3)" />
            <stop
              className="second"
              offset="18%"
              stopColor="oklch(87.92% 0 0)"
            />
            <stop
              className="third"
              offset="75%"
              stopColor="oklch(49.26% 0 0)"
            />
            <stop
              className="fourth"
              offset="100%"
              stopColor="oklch(32.11% 0 0)"
            />
          </radialGradient>
          <PathGenerator id="project_path" />
          <PathGenerator id="plan_path_1" />
          <PathGenerator id="plan_path_2" />
          <PathGenerator id="plan_path_3" />
          <PathGenerator id="eng_path" />
          <PathGenerator id="op_path" />
        </defs>
        <circle
          className="main-circle"
          cx="50"
          cy="80"
          r="30"
          fill="url(#circle_gradient)"
        ></circle>
        <circle
          className="project-circle"
          cx="0"
          cy="0"
          r="7.5"
          fill="url(#circle_gradient)"
        ></circle>
        <circle
          className="plan-circle-1"
          cx="0"
          cy="0"
          r="7.5"
          fill="url(#circle_gradient)"
        ></circle>
        <circle
          className="plan-circle-2"
          cx="0"
          cy="0"
          r="7.5"
          fill="url(#circle_gradient)"
        ></circle>
        <circle
          className="plan-circle-3"
          cx="0"
          cy="0"
          r="7.5"
          fill="url(#circle_gradient)"
        ></circle>
        <circle
          className="eng-circle"
          cx="0"
          cy="0"
          r="14"
          fill="url(#circle_gradient)"
        ></circle>
        <circle
          className="op-circle"
          cx="0"
          cy="0"
          r="14"
          fill="url(#circle_gradient)"
        ></circle>
      </svg>
    </div>
  );
}
