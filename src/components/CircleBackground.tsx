"use client";
import { useLayoutEffect, useState } from "react";
import { Line } from "./Line";
import { cn } from "@/lib/utils";
import { useGSAP, type useGSAPReturn } from "@gsap/react";

export default function LineBackground() {
  const [lineDirection, setLineDirection] = useState<"horizontal" | "vertical">(
    "horizontal",
  );
  useLayoutEffect(() => {
    const updateDirection = () => {
      const ratio = window.innerWidth / window.innerHeight;
      if (ratio > 1) setLineDirection("horizontal");
      else setLineDirection("vertical");
    };
    updateDirection();
    window.addEventListener("resize", updateDirection);
  }, []);
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 w-full h-full rounded-none">
      {/* Green to Teal */}
      <Line
        className={cn(
          "absolute inset-0",
          lineDirection === "horizontal"
            ? "w-full top-1/2 -translate-y-1/2"
            : "w-[100vh] h-[100vh] left-1/2 -translate-x-1/2",
        )}
        fromColor="#16a34a"
        toColor="#0891b2"
        direction={lineDirection}
      />
      {/* Yellow to Orange */}
      <Line
        className={cn(
          "absolute inset-0",
          lineDirection === "horizontal"
            ? "w-full top-1/2 -translate-y-1/2"
            : "w-[100vh] h-[100vh] left-1/2 -translate-x-1/2",
        )}
        fromColor="#d97706"
        toColor="#e11d48"
        direction={lineDirection}
      />
      {/* Gray to Slate */}
      <Line
        className={cn(
          "absolute inset-0",
          lineDirection === "horizontal"
            ? "w-full top-1/2 -translate-y-1/2"
            : "w-[100vh] h-[100vh] left-1/2 -translate-x-1/2",
        )}
        fromColor="#4b5563"
        toColor="#cbd5e1"
        direction={lineDirection}
      />
      {/* Red to Fuchsia */}
      <Line
        className={cn(
          "absolute inset-0",
          lineDirection === "horizontal"
            ? "w-full top-1/2 -translate-y-1/2"
            : "w-[100vh] h-[100vh] left-1/2 -translate-x-1/2",
        )}
        fromColor="#dc2626"
        toColor="#4f46e5"
        direction={lineDirection}
      />
    </div>
  );
}
