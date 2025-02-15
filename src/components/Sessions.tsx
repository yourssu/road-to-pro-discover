import { cn } from "@/lib/utils";
import { GalleryVerticalEnd } from "lucide-react";
import type { HTMLAttributes, RefAttributes } from "react";

export default function Sessions({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>) {
  return (
    <section
      className={cn(
        "h-full flex gap-4 justify-between flex-col md:flex-row items-stretch",
        className,
      )}
      {...props}
    >
      <article className="bg-gradient-to-b md:bg-gradient-to-r via-black/70 from-black grow flex flex-col gap-2 h-full justify-center px-16 max-w-screen-md drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)]">
        <h1 className="text-8xl font-black">Sessions</h1>
      </article>
    </section>
  );
}
