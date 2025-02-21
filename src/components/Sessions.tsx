import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode, RefAttributes } from "react";

export default function Sessions({
  title,
  videos,
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> &
  RefAttributes<HTMLDivElement> & {
    title: string;
    children: ReactNode;
    videos: { url: string; title: string; speaker: string; role: string }[];
  }) {
  return (
    <section
      className={cn(
        "h-full flex gap-8 px-24 justify-between items-center overflow-auto",
        className,
      )}
      {...props}
    >
      <section className={"flex flex-col gap-4"}>
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-black">{title}</h1>
          <div className="max-w-lg w-max h-24 break-keep">{children}</div>
        </div>
        <div className="flex gap-4">
          {videos.map((video) => (
            <article className="flex flex-col gap-1">
              <div className="aspect-video w-72 bg-gray-300"></div>
              <h2 className="text-2xl font-bold w-72 break-keep">
                {video.title}
              </h2>
              <p className="font-bold">{video.speaker}</p>
              <p>{video.role}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
