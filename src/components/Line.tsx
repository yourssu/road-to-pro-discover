"use client";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useEffect, useRef, type SVGProps } from "react";
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
  reverse = false
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

const generatePath = (): string => {
  const random = () => {
    const x = Math.random();
    return x - Math.floor(x);
  };

  const startY = random() * 50 + 25;

  const numPoints = Math.floor(random() * 3) + 2;
  const points: Point[] = [{ x: 0, y: startY }];

  for (let i = 0; i < numPoints - 1; i++) {
    const x = Math.min((100 / numPoints) * (i + 1) + random() * 70 - 35, 100);
    const y = random() * 50 + 25;
    points.push({ x, y });
  }
  points.push({ x: 100, y: 50 });

  let pathData = `M 0 ${startY} `;

  for (let i = 1; i < points.length; i++) {
    pathData += bezierCommand(points[i], i, points);
  }

  return pathData;
};

export interface LineProps extends SVGProps<SVGSVGElement> {
  fromColor: string;
  toColor: string;
}

export const Line = function Line({
  className,
  fromColor,
  toColor,
  ...props
}: LineProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const id = uuidv4().replaceAll("-", "");
  const path = generatePath();
  useEffect(() => {
    if (!svgRef.current) return;
    const strokeWidth = 4.5;
    const colors = [fromColor, toColor];
    const gradientPath: SVGPathElement | null =
      svgRef.current.querySelector(".path");
    const dotsGroup = svgRef.current.querySelector(".dots");
    if (gradientPath && dotsGroup) {
      const dotsDensity = 0.7 * strokeWidth;
      const numberOfDots = Math.ceil(
        (dotsDensity * gradientPath.getTotalLength()) / strokeWidth
      );
      for (let idx = 0; idx <= numberOfDots; idx++) {
        const circle = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "circle"
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
  }, [svgRef]);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 100 100"
      className={cn("overflow-visible", className)}
      {...props}
    >
      <defs>
        <path className="path" id={id} d={path} />
        <mask id={`${id}-mask`}>
          <use
            href={`#${id}`}
            strokeWidth="4"
            fill="none"
            stroke="white"
            strokeLinecap="round"
          />
        </mask>
      </defs>
      <g className="dots" mask={`url(#${id}-mask)`}></g>
    </svg>
  );
};
