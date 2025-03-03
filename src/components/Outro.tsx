import { cn } from "@/lib/utils";
import { HTMLAttributes, useRef } from "react";
import discover from "@/assets/discover.svg";
import logo from "@/assets/logo.svg";
import { GitHub } from "@/icons/GitHub";
import { Instagram } from "@/icons/Instagram";
import { YouTube } from "@/icons/YouTube";
import { IcExternalLinkLine } from "@yourssu/handy-icons-react";

export default function Outro({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & {
  containerAnimation?: GSAPTween;
}) {
  const outro = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={outro}
      className={cn(
        "h-full flex gap-4 justify-center flex-col md:flex-row items-stretch",
        className,
      )}
      {...props}
    >
      <article
        id="_outro"
        className="flex flex-col gap-8 h-full justify-center items-center px-16 max-w-screen-md"
      >
        <img src={discover} alt="DISCOVER" className="max-w-none w-[40vw]" />
        <article className="break-keep flex flex-col gap-4 justify-center items-center description">
          <h2 className="font-bold text-lg lg:text-xl">
            발견과 여정의 시작, 우리는 어디를 향해 걸어가고 있나요?
          </h2>
          <a
            href="https://yourssu.com/recruiting"
            target="_blank"
            className="mt-4 flex gap-2 items-center text-base lg:text-lg font-bold text-center whitespace-nowrap opacity-75 hover:scale-105 hover:opacity-100 active:scale-95 transition-all"
          >
            <IcExternalLinkLine className="size-8" />
            YOURSSU 리크루팅 지원하기 (~03.08)
          </a>
          <p className="text-sm lg:text-base text-center md:w-max md:max-w-screen-md">
            숭실대학교 학생회관 244호 / ⓒ 2025 Yourssu. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://yourssu.com" target="_blank">
              <img
                src={logo}
                className="size-8 opacity-75 hover:scale-105 hover:opacity-100 active:scale-95 transition-all"
                alt="YOURSSU"
              />
            </a>
            <a href="https://instagram.com/yourssu_official" target="_blank">
              <Instagram className="size-8 text-white/75 hover:scale-105 hover:text-white active:scale-95 transition-all" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCtV-n-YcisSXiQc82g0mjFg"
              target="_blank"
            >
              <YouTube className="size-8 text-white/75 hover:scale-105 hover:text-white active:scale-95 transition-all" />
            </a>
            <a
              href="https://github.com/yourssu"
              target="_blank"
            >
              <GitHub className="size-8 text-white/75 hover:scale-105 hover:text-white active:scale-95 transition-all" />
            </a>
          </div>
        </article>
      </article>
    </section>
  );
}
