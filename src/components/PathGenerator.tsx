"use client";
import { type SVGProps } from "react";

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
  const startY = Math.random() * 50 + 25;

  const numPoints = Math.floor(Math.random() * 3) + 2;
  const points: Point[] =
    direction === "vertical" ? [{ x: startY, y: 0 }] : [{ x: 0, y: startY }];

  for (let i = 0; i < numPoints - 1; i++) {
    const x = Math.min(
      (100 / numPoints) * (i + 1) + Math.random() * 70 - 35,
      100,
    );
    const y = Math.random() * 50 + 25;
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

export interface PathGeneratorProps extends SVGProps<SVGPathElement> {
  direction?: "horizontal" | "vertical";
}

export const PathGenerator = function PathGenerator({
  direction,
  ...props
}: PathGeneratorProps) {
  const path = generatePath(
    direction === "vertical" ? "vertical" : "horizontal",
  );
  return <path className="path" d={path} {...props} />;
};
