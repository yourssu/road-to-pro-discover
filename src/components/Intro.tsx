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
            우리가 발견한, 발견할
          </h2>
          <p className="text-lg text-center md:w-max md:max-w-screen-md">
            YOURSSU는 숭실대 학생들을 위한 서비스를 직접 만들고, 운영하고,
            홍보하자는 목표를 향해 나아가는 학생들로 이루어져 있습니다. Road to
            Pro는 이러한 유어슈의 멤버들이 각자의 목표를 이루기 위해 경험했던
            것들과 배우게 된 것들을 다른 학생들과 공유하는 자리입니다.
          </p>
          <p className="text-lg text-center md:w-max md:max-w-screen-md">
            이번 Road to Pro는 우리가 유어슈에서 활동하면서 “발견한”, 그리고
            앞으로 “발견할” 것들에 대해 담게 되었습니다. 유어슈의 일원이 되어
            프로젝트를 진행하면서 멤버들이 했던 고민이나 해결해야 했던 과제,
            그리고 앞으로 도전해 나아갈 방향성을 여러분들과 함께 공유하고자
            합니다.
          </p>
        </article>
      </article>
    </section>
  );
}
