import { cn } from '@/lib/utils';
import { forwardRef, type SVGProps, useMemo } from 'react';

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
    angle: Math.atan2(lengthY, lengthX)
  };
};

const controlPoint = (current: Point, previous: Point | null, next: Point | null, reverse = false): Point => {
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
    let y = random() * 50 + 25;
    points.push({ x, y });
  }
  points.push({ x: 100, y: 50 });

  let pathData = `M 0 ${startY} `;
  
  for (let i = 1; i < points.length; i++) {
    pathData += bezierCommand(points[i], i, points);
  }
  
  return pathData;
};

export const Line = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(function Line({ className, ...props }, ref) {
  const path = generatePath();

  return (
    <svg ref={ref} viewBox="0 0 100 100" className={cn("overflow-visible", className)} {...props}>
      <path
        d={path}
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
});
