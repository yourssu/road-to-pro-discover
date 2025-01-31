"use client";
import { Line } from "./Line";

export default function LineBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 w-full h-full rounded-none">
      {/* Green to Teal */}
      <Line
        className="absolute inset-0 top-1/2 -translate-y-1/2 w-full"
        fromColor="#16a34a"
        toColor="#0891b2"
      />
      {/* Yellow to Orange */}
      <Line
        className="absolute inset-0 top-1/2 -translate-y-1/2 w-full"
        fromColor="#d97706"
        toColor="#e11d48"
      />
      {/* Gray to Slate */}
      <Line
        className="absolute inset-0 top-1/2 -translate-y-1/2 w-full"
        fromColor="#4b5563"
        toColor="#cbd5e1"
      />
      {/* Red to Fuchsia */}
      <Line
        className="absolute inset-0 top-1/2 -translate-y-1/2 w-full"
        fromColor="#dc2626"
        toColor="#4f46e5"
      />
    </div>
  );
}
