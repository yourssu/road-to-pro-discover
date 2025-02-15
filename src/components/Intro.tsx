import { cn } from "@/lib/utils";
import type { HTMLAttributes, RefAttributes } from "react";
import discover from "@/assets/discover.svg";

export default function Intro({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>) {
  return (
    <section
      className={cn(
        "h-full flex gap-4 justify-center flex-col md:flex-row items-stretch",
        className,
      )}
      {...props}
    >
      <article className="flex flex-col gap-8 h-full justify-center items-center px-16 max-w-screen-md">
        <img
          src={discover.src}
          alt="DISCOVER"
          className="max-w-none w-[80vw]"
        />
        <article className="break-keep flex flex-col gap-4 justify-center items-center description">
          <h2 className="text-5xl font-bold text-center whitespace-nowrap">
            우리가 발견한 숭실, 발견할 숭실
          </h2>
          <p className="text-lg text-center md:w-max md:max-w-screen-md">
            안녕하세요. 유어슈입니다. 로드투프로 화이팅! 안녕하세요.
            유어슈입니다. 로드투프로 화이팅! 안녕하세요. 유어슈입니다.
            로드투프로 화이팅! 안녕하세요. 유어슈입니다. 로드투프로 화이팅!
            안녕하세요. 유어슈입니다. 로드투프로 화이팅! 안녕하세요.
            유어슈입니다. 로드투프로 화이팅!
          </p>
        </article>
      </article>
    </section>
  );
}
