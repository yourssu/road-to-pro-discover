import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Intro from "./Intro";
import Sessions from "./Sessions";
import LineBackground from "./LineBackground";

export default function Container() {
  const main = useRef<HTMLDivElement | null>(null);
  const container = useRef<HTMLDivElement | null>(null);
  const intro = useRef<HTMLDivElement | null>(null);
  const sessions = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const sections = gsap.utils.toArray(".panel");
      const scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        duration: 2,
        ease: "none",
        scrollTrigger: {
          trigger: main.current,
          pin: true,
          scrub: true,
          markers: true,
          end: `+=${container.current?.offsetWidth}`,
        },
      });
      return scrollTween;
    },
    { scope: main },
  );
  return (
    <main ref={main} className="w-screen h-screen">
      <LineBackground />
      <div ref={container} className="w-[200%] h-full flex flex-nowrap">
        <Intro ref={intro} className="w-screen h-screen panel" />
        <Sessions ref={sessions} className="w-screen h-screen panel" />
      </div>
    </main>
  );
}
