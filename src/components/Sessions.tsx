import { cn } from "@/lib/utils";
import { type HTMLAttributes, type ReactNode, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Session } from "@/lib/sessions";
import SessionView from "./SessionView";

export default function Sessions({
  title,
  sessions,
  children,
  className,
  containerAnimation,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  title: string;
  children: ReactNode;
  sessions: Session[];
  containerAnimation?: GSAPTween;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      if (containerAnimation) {
        gsap.from(".title", {
          xPercent: 10,
          opacity: 0,
          ease: "easeInOut",
          scrollTrigger: {
            trigger: ref.current,
            containerAnimation,
            start: "center 100%",
            end: "center 50%",
          },
        });
        gsap.from(".desc", {
          xPercent: 10,
          opacity: 0,
          ease: "easeInOut",
          scrollTrigger: {
            trigger: ref.current,
            containerAnimation,
            start: "center 90%",
            end: "center 50%",
          },
        });
        gsap.from(".vid", {
          xPercent: 20,
          opacity: 0,
          ease: "easeInOut",
          scrollTrigger: {
            trigger: ref.current,
            containerAnimation,
            start: "center 70%",
            end: "center 50%",
          },
        });
      }
    },
    {
      scope: ref,
      dependencies: [containerAnimation],
    },
  );
  return (
    <section
      ref={ref}
      className={cn(
        "w-full h-full flex gap-8 px-4 lg:px-24 justify-between items-center overflow-visible",
        className,
      )}
      {...props}
    >
      <section className={"flex flex-col gap-4 lg:gap-8"}>
        <div className="flex flex-col gap-2 w-full">
          <h1 className="title text-xl lg:text-6xl font-black">{title}</h1>
          <div className="desc text-sm lg:text-lg lg:max-w-lg lg:w-max h-24 break-keep">
            {children}
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          {sessions.map((session) => (
            <SessionView session={session} />
          ))}
        </div>
      </section>
    </section>
  );
}
