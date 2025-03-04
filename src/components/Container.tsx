import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Intro from "@/components/Intro";
import Sessions from "@/components/Sessions";
import CircleBackground from "@/components/CircleBackground";
import { sessions } from "@/lib/sessions";
import Outro from "./Outro";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const target = [
  "#intro",
  "#project",
  "#planning_design",
  "#engineering",
  "#operation",
  "#outro",
];

export default function Container() {
  const main = useRef<HTMLDivElement | null>(null);
  const container = useRef<HTMLDivElement | null>(null);
  const intro = useRef<HTMLDivElement | null>(null);
  const [scrollTween, setScrollTween] = useState<GSAPTween | null>(null);
  const scrolling = useRef(false);

  useEffect(() => {
    const updateHash = () => {
      const t = scrollTween?.scrollTrigger;
      if (t && container.current) {
        const idx = Math.round(
          t.scroll() / (container.current.offsetWidth / target.length),
        );
        const currentSection = target[Math.min(idx, target.length - 1)];
        if (window.location.hash !== currentSection) {
          scrolling.current = true;
          window.location.hash = currentSection;
        }
      }
    };
    const hashChange = (e: HashChangeEvent) => {
      if (
        container.current &&
        scrollTween?.scrollTrigger &&
        !scrolling.current
      ) {
        const idx = Math.max(target.indexOf(window.location.hash), 0);
        scrollTween.scrollTrigger.scroll(
          (container.current.offsetWidth / target.length) * idx,
        );
      }
      if (scrolling.current) {
        scrolling.current = false;
      }
      e.preventDefault();
      e.stopPropagation();
    };
    window.addEventListener("hashchange", hashChange);
    ScrollTrigger.addEventListener("scrollEnd", updateHash);
    return () => {
      window.removeEventListener("hashchange", hashChange);
    };
  }, [scrollTween?.scrollTrigger]);

  useGSAP(
    () => {
      const sections = gsap.utils.toArray(".panel");
      const scrollTween = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        duration: 1,
        ease: "none",
        scrollTrigger: {
          trigger: main.current,
          pin: true,
          scrub: 0.1,
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
      <div ref={container} className="w-[600%] h-full flex flex-nowrap pt-24">
        <Intro ref={intro} className="w-screen h-full panel" />
        <Sessions
          id="_project"
          containerAnimation={scrollTween ?? undefined}
          className="w-screen h-full panel"
          title="Project"
          sessions={sessions.filter((s) => s.category === "project")}
        >
          <p>
            유어슈에서는 숭실대학교 학생들을 위한 프로덕트를 만들기 위해 TF
            단위로 프로젝트를 진행합니다. 이 과정에서 멤버들이 마주했던 고민과
            이를 해결하기 위한 노력들을 여러분과 함께 나눠 봅니다.
          </p>
        </Sessions>

        <Sessions
          id="_planning_design"
          containerAnimation={scrollTween ?? undefined}
          className="w-screen h-full panel"
          title="Planning & Design"
          sessions={sessions.filter((s) => s.category === "planningDesign")}
        >
          <p>
            유어슈의 프로덕트는 PM과 디자이너의 손을 거쳐 탄생합니다. 프로덕트
            매니저와 디자이너는 사용자들이 최상의 경험을 할 수 있도록 기획하고
            디자인합니다. 그들이 고민하고 만들어가는 과정의 이야기를 여러분과
            함께 나눠 봅니다.
          </p>
        </Sessions>

        <Sessions
          id="_engineering"
          containerAnimation={scrollTween ?? undefined}
          className="w-screen h-full panel"
          title="Engineering"
          sessions={sessions.filter((s) => s.category === "engineering")}
        >
          <p>
            유어슈의 엔지니어들은 프로덕트를 최적의 방식으로 구현하기 위해
            끊임없이 배우고, 팀원들과 소통하며 효율성을 극대화합니다. 그들이
            쌓아온 경험과 고민의 과정들을 여러분과 함께 나눠 봅니다.
          </p>
        </Sessions>

        <Sessions
          id="_operation"
          containerAnimation={scrollTween ?? undefined}
          className="w-screen h-full panel"
          title="Operation"
          sessions={sessions.filter((s) => s.category === "operation")}
        >
          <p>
            유어슈는 어떻게 운영될까요? 프로덕트 개발부터 운영, 홍보까지 직접
            진행하는 유어슈의 전반적인 흐름을 총괄하는 운영진과 HR의 비결을
            여러분과 함께 나눠 봅니다.
          </p>
        </Sessions>
        <Outro id="_outro" className="w-screen h-full panel" />
      </div>
    </main>
  );
}
