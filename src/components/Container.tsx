import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Intro from "@/components/Intro";
import Sessions from "@/components/Sessions";
import CircleBackground from "@/components/CircleBackground";

export default function Container() {
  const main = useRef<HTMLDivElement | null>(null);
  const container = useRef<HTMLDivElement | null>(null);
  const intro = useRef<HTMLDivElement | null>(null);
  const [scrollTween, setScrollTween] = useState<GSAPTween | null>(null);

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
          end: `+=${container.current?.offsetWidth}`,
          snap: 1 / (sections.length - 1),
        },
      });
      setScrollTween(scrollTween);
      return scrollTween;
    },
    { scope: main },
  );
  return (
    <main ref={main} className="w-screen h-screen">
      <CircleBackground containerAnimation={scrollTween ?? undefined} />
      <div ref={container} className="w-max h-full flex flex-nowrap">
        <Intro ref={intro} className="w-screen h-screen panel" />
        <Sessions
          containerAnimation={scrollTween ?? undefined}
          className="w-screen h-screen panel"
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
          containerAnimation={scrollTween ?? undefined}
          className="w-screen h-screen panel"
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
          containerAnimation={scrollTween ?? undefined}
          className="w-screen h-screen panel"
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
          containerAnimation={scrollTween ?? undefined}
          className="w-screen h-screen panel"
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
