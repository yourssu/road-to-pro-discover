"use client";

import { cn } from "@/lib/utils";
import { useLayoutEffect, useRef, useState } from "react";
import { PathGenerator } from "@/components/PathGenerator";
import { useCircleScrollAnimation } from "@/anim/useCircleScrollAnimation";
import { useCursorMovementAnimation } from "@/anim/useCursorMovementAnimation";
import { CircleAnimDef, circleDefs } from "@/lib/def";

function generatePath(circleDef: CircleAnimDef) {
  const qtyArr = [...Array(circleDef.qty)];

  return (
    <>
      {qtyArr.map((_, i) => (
        <PathGenerator key={i} id={`${circleDef.name}_path_${i}`} />
      ))}
      )
    </>
  );
}

function generateCircle(circleDef: CircleAnimDef) {
  const qtyArr = [...Array(circleDef.qty)];

  return (
    <>
      {qtyArr.map((_, i) => (
        <circle
          key={i}
          className={`${circleDef.name}-circle-${i}`}
          cx="0"
          cy="0"
          r="0"
          fill="url(#circle_gradient)"
        ></circle>
      ))}
    </>
  );
}

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
          "overflow-visible absolute inset-0",
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
          {generatePath(circleDefs.project)}
          {generatePath(circleDefs.planningDesign)}
          {generatePath(circleDefs.engineering)}
          {generatePath(circleDefs.operation)}
          {generatePath(circleDefs.outro)}
        </defs>
        <circle
          className="main-circle opacity-65"
          cx="50"
          cy="80"
          r="30"
          fill="url(#circle_gradient)"
        ></circle>
        {generateCircle(circleDefs.project)}
        {generateCircle(circleDefs.planningDesign)}
        {generateCircle(circleDefs.engineering)}
        {generateCircle(circleDefs.operation)}
        {generateCircle(circleDefs.outro)}
      </svg>
    </div>
  );
}
