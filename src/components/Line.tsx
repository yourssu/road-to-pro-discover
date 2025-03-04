/* Unused; reserved for a record */
"use client";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { type SVGProps, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

type Point = {
  x: number;
  y: number;
};

type LineResult = {
  length: number;
  angle: number;
};

const line = (pointA: Point, pointB: Point): LineResult => {
  const lengthX = pointB.x - pointA.x;
  const lengthY = pointB.y - pointA.y;
  return {
    length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
    angle: Math.atan2(lengthY, lengthX),
  };
};

const controlPoint = (
  current: Point,
  previous: Point | null,
  next: Point | null,
  reverse = false,
): Point => {
  const p = previous || current;
  const n = next || current;
  const smoothing = 0.2;
  const o = line(p, n);
  const angle = o.angle + (reverse ? Math.PI : 0);
  const length = o.length * smoothing;
  const x = current.x + Math.cos(angle) * length;
  const y = current.y + Math.sin(angle) * length;
  return { x, y };
};

const bezierCommand = (point: Point, i: number, a: Point[]): string => {
  const { x: cpsX, y: cpsY } = controlPoint(a[i - 1], a[i - 2], point);
  const { x: cpeX, y: cpeY } = controlPoint(point, a[i - 1], a[i + 1], true);
  return `C ${cpsX},${cpsY} ${cpeX},${cpeY} ${point.x},${point.y}`;
};

const generatePath = (direction: "horizontal" | "vertical"): string => {
  const random = () => {
    const x = Math.random();
    return x - Math.floor(x);
  };

  const startY = random() * 50 + 25;

  const numPoints = Math.floor(random() * 3) + 2;
  const points: Point[] =
    direction === "vertical" ? [{ x: startY, y: 0 }] : [{ x: 0, y: startY }];

  for (let i = 0; i < numPoints - 1; i++) {
    const x = Math.min((100 / numPoints) * (i + 1) + random() * 70 - 35, 100);
    const y = random() * 50 + 25;
    if (direction === "vertical") points.push({ x: y, y: x });
    else points.push({ x, y });
  }
  if (direction === "vertical") points.push({ x: 50, y: 100 });
  else points.push({ x: 100, y: 50 });

  let pathData = direction === "vertical" ? `M ${startY} 0` : `M 0 ${startY} `;

  for (let i = 1; i < points.length; i++) {
    pathData += bezierCommand(points[i], i, points);
  }

  return pathData;
};

export interface LineProps extends SVGProps<SVGSVGElement> {
  direction?: "horizontal" | "vertical";
  fromColor: string;
  toColor: string;
}

export const Line = function Line({
  direction,
  className,
  fromColor,
  toColor,
  ...props
}: LineProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const idRef = useRef(uuidv4().replaceAll("-", ""));
  const path = generatePath(
    direction === "vertical" ? "vertical" : "horizontal",
  );
  useEffect(() => {
    if (!svgRef.current) return;
    const strokeWidth = 4.5;
    const colors = [fromColor, toColor];
    const gradientPath: SVGPathElement | null =
      svgRef.current.querySelector(".path");
    const dotsGroup = svgRef.current.querySelector(".dots");
    const oldChildrens = svgRef.current.querySelectorAll(".dots circle");
    oldChildrens.forEach((child) => child.remove());
    if (gradientPath && dotsGroup) {
      const dotsDensity = 0.7 * strokeWidth;
      const numberOfDots = Math.ceil(
        (dotsDensity * gradientPath.getTotalLength()) / strokeWidth,
      );
      for (let idx = 0; idx <= numberOfDots; idx++) {
        const circle = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "circle",
        );
        dotsGroup.appendChild(circle);

        gsap.set(circle, {
          attr: {
            cx: 0,
            cy: 0,
            r: 0.5 * strokeWidth,
            fill: gsap.utils.interpolate(colors, idx / numberOfDots),
          },
        });

        gsap.to(circle, {
          motionPath: {
            path: gradientPath,
            start: 0,
            end: idx / numberOfDots,
          },
          duration: 2,
          ease: "power2.inOut",
        });
      }
    }
  }, [svgRef, direction]);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 100 100"
      className={cn("overflow-visible", className)}
      {...props}
    >
      <defs>
        <path className="path" id={idRef.current} d={path} />
        <mask id={`${idRef.current}-mask`}>
          <use
            href={`#${idRef.current}`}
            strokeWidth="4"
            fill="none"
            stroke="white"
            strokeLinecap="round"
          />
        </mask>
      </defs>
      <g className="dots" mask={`url(#${idRef.current}-mask)`}></g>
    </svg>
  );
};
