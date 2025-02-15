import { cn } from "@/lib/utils";
import type { useGSAPReturn } from "@gsap/react";
import type { HTMLAttributes, RefAttributes } from "react";
import SessionCategory from "./SessionCategory";

export default function Sessions({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & RefAttributes<HTMLDivElement>) {
  return (
    <section
      className={cn(
        "h-full flex gap-8 px-24 justify-between items-center overflow-auto",
        className,
      )}
      {...props}
    >
      <div className="flex gap-8 px-24 justify-start items-start">
        <SessionCategory
          title="Project"
          videos={[
            {
              url: "",
              title: "세션명을 입력하세요",
              speaker: "Sereal",
              role: "Project Manager / iOS Engineer",
            },
            {
              url: "",
              title: "세션명을 입력하세요",
              speaker: "Oscar",
              role: "Project Manager",
            },
            {
              url: "",
              title: "세션명을 입력하세요",
              speaker: "Brilliant",
              role: "Project Manager",
            },
          ]}
        >
          <p>
            세션 소개 글<br />
            세션 소개 글
          </p>
        </SessionCategory>

        <SessionCategory
          title="Planning & Design"
          videos={[
            {
              url: "",
              title: "세션명을 입력하세요",
              speaker: "Jayden",
              role: "Project Management Lead / iOS Engineer",
            },
            {
              url: "",
              title: "세션명을 입력하세요",
              speaker: "Umi",
              role: "Product Design Lead",
            },
          ]}
        >
          <p>
            세션 소개 글<br />
            세션 소개 글
          </p>
        </SessionCategory>

        <SessionCategory
          title="Engineering"
          videos={[
            {
              url: "",
              title: "Astro로 나만의 멋진 블로그 만들기",
              speaker: "EATSTEAK",
              role: "Web Frontend Engineer",
            },
            {
              url: "",
              title: "세션명을 입력하세요",
              speaker: "Juun",
              role: "Web Frontend Engineer",
            },
          ]}
        >
          <p>
            세션 소개 글<br />
            세션 소개 글
          </p>
        </SessionCategory>

        <SessionCategory
          title="Operation"
          videos={[
            {
              url: "",
              title: "세션명을 입력하세요",
              speaker: "Dail",
              role: "Human Resources Lead",
            },
          ]}
        >
          <p>
            세션 소개 글<br />
            세션 소개 글
          </p>
        </SessionCategory>
      </div>
    </section>
  );
}
