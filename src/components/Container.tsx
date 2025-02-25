import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Intro from "@/components/Intro";
import Sessions from "@/components/Sessions";
import CircleBackground from "@/components/CircleBackground";

const target = [
  "#intro",
  "#project",
  "#planning_design",
  "#engineering",
  "#operation",
];

export default function Container() {
  const main = useRef<HTMLDivElement | null>(null);
  const container = useRef<HTMLDivElement | null>(null);
  const intro = useRef<HTMLDivElement | null>(null);
  const [scrollTween, setScrollTween] = useState<GSAPTween | null>(null);

  useEffect(() => {
    const hashChange = (e: HashChangeEvent) => {
      if (container.current && scrollTween?.scrollTrigger) {
        const idx = Math.max(target.indexOf(window.location.hash), 0);
        scrollTween.scrollTrigger.scroll(
          (container.current.offsetWidth / (target.length - 1)) * 0.95 * idx,
        );
      }
      e.preventDefault();
      e.stopPropagation();
    };
    window.addEventListener("hashchange", hashChange);
    return () => {
      window.removeEventListener("hashchange", hashChange);
    };
  }, [scrollTween?.scrollTrigger]);

  useGSAP(
    () => {
      const sections = gsap.utils.toArray(".panel");
      const scrollTween = gsap.to(sections, {
        xPercent: -105 * (sections.length - 1),
        duration: 1,
        ease: "none",
        scrollTrigger: {
          trigger: main.current,
          pin: true,
          scrub: 0.5,
          start: "left left",
          end: () => `+=${container.current!.offsetWidth}`,
        },
      });
      setScrollTween(scrollTween);
      return scrollTween;
    },
    { scope: main },
  );

  // Initial Animation
  useGSAP(
    () => {
      const initTl = gsap.timeline({});
      const introGradient = [
        "oklch(100% 0 3)",
        "oklch(87.92% 0 0)",
        "oklch(49.26% 0 0)",
        "oklch(32.11% 0 0)",
      ];
      const classes = ["first", "second", "third", "fourth"];
      classes.forEach((c, i) => {
        initTl.add(
          gsap.set(`#circle_gradient .${c}`, {
            stopColor: introGradient[i],
          }),
        );
      });
      initTl.add(
        gsap.fromTo(
          ".main-circle",
          {
            yPercent: 0,
            ease: "easeOut",
          },
          {
            duration: 1.7,
            yPercent: -40,
            ease: "easeOut",
          },
        ),
      );
      initTl.add(
        gsap.from(".description", {
          duration: 0.5,
          opacity: 0,
          ease: "easeOut",
        }),
        ">",
      );
      return initTl;
    },
    {
      scope: main,
    },
  );
  return (
    <main ref={main} className="w-screen h-full overflow-hidden">
      <CircleBackground containerAnimation={scrollTween ?? undefined} />
      <div ref={container} className="w-[500vw] h-full flex flex-nowrap pt-24">
        <Intro ref={intro} className="w-screen h-full panel" />
        <Sessions
          id="_project"
          containerAnimation={scrollTween ?? undefined}
          className="w-screen h-full panel"
          title="Project"
          videos={[
            {
              url: "",
              title: "애자일스럽게 움직여보기",
              speaker: "Sereal",
              role: "Project Manager / iOS Engineer",
            },
            {
              url: "",
              title: "학생들의 불편에 공감하기",
              speaker: "Oscar",
              role: "Project Manager",
            },
            {
              url: "",
              title: "협력을 통해 새로운 가치만들기",
              speaker: "Brilliant",
              role: "Project Manager",
            },
          ]}
        >
          <p>
            유어슈에서는 숭실대학교 학생들을 위한 프로덕트를 만들기 위해 TF
            단위의 프로젝트가 진행됩니다. 유어슈의 Product를 만들어내는 멤버들이
            했던 고민과 이를 해결하기 위한 활동을 여러분들과 공유합니다.
          </p>
        </Sessions>

        <Sessions
          id="_planning_design"
          containerAnimation={scrollTween ?? undefined}
          className="w-screen h-full panel"
          title="Planning & Design"
          videos={[
            {
              url: "",
              title: "제목 짓기가 어려워",
              speaker: "Jayden",
              role: "Project Management Lead / iOS Engineer",
            },
            {
              url: "",
              title: "유어슈의 디자이너라서 할 수 있었던 일들",
              speaker: "Umi",
              role: "Product Design Lead",
            },
          ]}
        >
          <p>
            유어슈의 프로덕트는 PM과 디자이너의 손을 거쳐 탄생하게 됩니다.
            프로덕트 매니저와 디자이너는 사용자들이 최적의 프로덕트를 경험할 수
            있게끔 설계 및 디자인을 진행합니다. 유어슈의 PM과 Designer의
            이야기를 여러분들과 공유합니다.
          </p>
        </Sessions>

        <Sessions
          id="_engineering"
          containerAnimation={scrollTween ?? undefined}
          className="w-screen h-full panel"
          title="Engineering"
          videos={[
            {
              url: "",
              title: "u-saint 스크래퍼, rusaint 제작기",
              speaker: "EATSTEAK",
              role: "Web Frontend Engineer",
            },
            {
              url: "",
              title: "XState로 퍼널 UI 만들기",
              speaker: "Juun",
              role: "Web Frontend Engineer",
            },
          ]}
        >
          <p>
            유어슈의 엔지니어들은 프로덕트를 최적의 방법으로 구현하기 위해
            끊임없이 배울 뿐만 아니라, 팀원들과 이야기하면서 효율성을
            극대화시킵니다. 유어슈 엔지니어들의 경험을 여러분들과 공유합니다.
          </p>
        </Sessions>

        <Sessions
          id="_operation"
          containerAnimation={scrollTween ?? undefined}
          className="w-screen h-full panel"
          title="Operation"
          videos={[
            {
              url: "",
              title: "세션명을 입력하세요",
              speaker: "Dail",
              role: "Human Resources Lead",
            },
            {
              url: "",
              title: "숭실대를 직접 바꿔가는 학생들",
              speaker: "Dona",
              role: "Head Lead",
            },
          ]}
        >
          <p>
            유어슈라는 조직은 어떻게 운영되고 있을까요? 프로덕트 개발부터 운영,
            홍보까지 직접 진행하는 유어슈, 이러한 유어슈를 전반적으로 총괄하고
            있는 운영진과 HR의 비결을 여러분들과 공유합니다.
          </p>
        </Sessions>
      </div>
    </main>
  );
}
