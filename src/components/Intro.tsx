import { cn } from "@/lib/utils";
import type { HTMLAttributes, RefAttributes } from "react";
import discover from "@/assets/discover.svg";
import { preload } from "react-dom";
import { IcArrowsChevronRightFilled } from "@yourssu/handy-icons-react";

export default function Intro({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>) {
  preload(discover, { as: "image" });
  return (
    <section
      className={cn(
        "h-full flex gap-4 justify-center flex-col md:flex-row items-stretch",
        className,
      )}
      {...props}
    >
      <article
        id="_intro"
        className="flex flex-col gap-8 h-full justify-center items-center px-16 max-w-screen-md"
      >
        <img src={discover} alt="DISCOVER" className="max-w-none w-[80vw]" />
        <article className="break-keep flex flex-col gap-4 justify-center items-center description">
          <h2 className="text-2xl lg:text-5xl font-bold text-center whitespace-nowrap">
            우리가 발견한, 발견할
          </h2>
          <p className="text-sm lg:text-lg text-center md:w-max md:max-w-screen-md">
            YOURSSU는 숭실대 학생들을 위한 서비스를 직접 만들고 운영하는 것을
            목표로 하는 학생들의 모임입니다. 이번 <strong>Road to Pro</strong>
            에서는 우리가 유어슈에서 활동하며 <strong>발견한</strong> 것들,
            그리고 앞으로 <strong>발견할</strong>&nbsp;것들을 담았습니다.
            유어슈의 일원으로서 프로젝트를 진행하며 겪었던 고민과 해결해야 했던
            과제들, 그리고 앞으로 나아갈 방향에 대해 여러분과 함께 나누고자
            합니다.
          </p>
        </article>
      </article>
      <footer className="absolute flex items-center right-0 bottom-0 p-4 opacity-75">
        <p className="text-sm mr-2">아래로 스크롤해서 더 보기</p>
        <IcArrowsChevronRightFilled
          className="size-6 -mx-1 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
        <IcArrowsChevronRightFilled
          className="size-6 -mx-1 animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <IcArrowsChevronRightFilled
          className="size-6 -mx-1 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </footer>
    </section>
  );
}
