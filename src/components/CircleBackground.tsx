"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function CircleBackground({
  containerAnimation,
}: {
  containerAnimation?: GSAPTween;
}) {
  const ref = useRef<HTMLDivElement>(null);
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
  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 -z-10 w-full h-full rounded-none"
    ></div>
  );
}
