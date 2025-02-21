import { cn } from "@/lib/utils";
import { type HTMLAttributes, type ReactNode, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Sessions({
  title,
  videos,
  children,
  className,
  containerAnimation,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  title: string;
  children: ReactNode;
  videos: { url: string; title: string; speaker: string; role: string }[];
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
            scrub: true,
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
            scrub: true,
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
            scrub: true,
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
        "h-full flex gap-8 px-24 justify-between items-center overflow-auto",
        className,
      )}
      {...props}
    >
      <section className={"flex flex-col gap-4"}>
        <div className="flex flex-col gap-2">
          <h1 className="title text-4xl font-black">{title}</h1>
          <div className="desc max-w-lg w-max h-24 break-keep">{children}</div>
        </div>
        <div className="flex gap-4">
          {videos.map((video) => (
            <article key={video.title} className="vid flex flex-col gap-1">
              <div className="thumbnail aspect-video w-72 bg-gray-300"></div>
              <h2 className="vid-title text-2xl font-bold w-72 break-keep">
                {video.title}
              </h2>
              <p className="vid-speaker font-bold">{video.speaker}</p>
              <p className="vid-role">{video.role}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
