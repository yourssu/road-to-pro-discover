import noise from "@/assets/noise.png";

export default function Background() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-10 w-full h-full bg-repeat opacity-[0.01] rounded-none"
      style={{ backgroundImage: `url(${noise}` }}
    ></div>
  );
}
