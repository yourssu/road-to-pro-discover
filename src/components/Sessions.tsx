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
        "w-full h-full flex gap-8 px-4 lg:px-24 justify-between items-center overflow-visible",
        className,
      )}
      {...props}
    >
      <section className={"flex flex-col gap-4"}>
        <div className="flex flex-col gap-2 w-full">
          <h1 className="title text-xl lg:text-4xl font-black">{title}</h1>
          <div className="desc text-sm lg:text-base lg:max-w-lg lg:w-max h-24 break-keep">
            {children}
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          {videos.map((video) => (
            <article
              key={video.title}
              className="vid flex flex-col gap-1 items-start w-full lg:w-72"
            >
              <div className="thumbnail aspect-video w-48 lg:w-72 bg-gray-300"></div>
              <div className="flex flex-wrap items-center lg:items-start lg:flex-col gap-1">
                <h2 className="vid-title text-lg lg:text-2xl font-bold break-keep basis-full lg:basis-auto">
                  {video.title}
                </h2>
                <p className="vid-speaker font-bold text-sm lg:text-base">
                  {video.speaker}
                </p>
                <p className="vid-role text-sm lg:text-base">{video.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
