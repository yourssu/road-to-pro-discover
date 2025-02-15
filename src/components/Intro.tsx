import { cn } from "@/lib/utils";
import { GalleryVerticalEnd } from "lucide-react";
import type { HTMLAttributes, RefAttributes } from "react";

export default function Intro({
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
      <article className="flex flex-col gap-2 h-full justify-center px-16 max-w-screen-md drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)] title">
        <h1 className="text-8xl font-black">Road To Pro</h1>
        <h2 className="text-4xl font-bold">DISCOVER</h2>
        <p className="text-xl">우리가 발견한 숭실, 발견할 숭실</p>
        <hr />
        <article className="break-keep">
          안녕하세요. 유어슈입니다. 로드투프로 화이팅! 안녕하세요. 유어슈입니다.
          로드투프로 화이팅! 안녕하세요. 유어슈입니다. 로드투프로 화이팅!
          안녕하세요. 유어슈입니다. 로드투프로 화이팅! 안녕하세요. 유어슈입니다.
          로드투프로 화이팅! 안녕하세요. 유어슈입니다. 로드투프로 화이팅!
        </article>
      </article>
      <aside className="w-full flex flex-col justify-center items-center bg-gradient-to-b md:bg-gradient-to-r via-black/70 to-black md:w-56 p-8">
        <div className="flex flex-col justify-center items-center gap-2 scroll-instructions">
          <GalleryVerticalEnd />
          <p className="text-center break-keep text-sm">스크롤하여 세션 보기</p>
        </div>
      </aside>
    </section>
  );
}
