import sereal from "@/assets/sessions/Sereal.png";
import oscar from "@/assets/sessions/Oscar.png";
import brilliant from "@/assets/sessions/Brilliant.png";
import jayden from "@/assets/sessions/Jayden.png";
import umi from "@/assets/sessions/Umi.png";
import eatsteak from "@/assets/sessions/EATSTEAK.png";
import juun from "@/assets/sessions/Juun.png";
import dali from "@/assets/sessions/Dali.png";
import dona from "@/assets/sessions/Dona.png";

export interface Session {
  category: "project" | "planningDesign" | "engineering" | "operation";
  url: string;
  thumbnail: string;
  title: string;
  speaker: string;
  role: string;
  description: string;
}

export const sessions: Session[] = [
  {
    category: "project",
    url: "https://www.youtube.com/embed/FyUSUJLboSg",
    thumbnail: sereal,
    title: "Agile스럽게 움직여보기",
    speaker: "Sereal",
    role: "Project Manager / iOS Engineer",
    description: `이번 세션에서는 숨쉴때 서비스의 방향성을 설정하며 시도한 애자일 도입과, 빠른 개발·검증을 위한 스쿼드 시스템 구축 과정을 소개합니다.

사용자와 더 가까워지기 위해 개발 방식을 어떻게 변화시켰고, 어떤 시행착오를 거쳤으며, 이를 통해 얻은 경험을 공유합니다. 또한, 데이터 기반 검증, 타겟 이벤트 전략, 스쿼드 운영 방식 등을 살펴보며 숨쉴때의 성장 과정과 앞으로의 방향을 이야기하고자 합니다.`,
  },
  {
    category: "project",
    url: "https://www.youtube.com/embed/0hTmn0NIXf8",
    thumbnail: oscar,
    title: "학생들의 불편에 공감하기",
    speaker: "Oscar",
    role: "Project Manager",
    description: `유어슈에서는 아이디어를 스쿼드 단위로 실행하며 개발을 진행해 왔습니다. 특히, 처음으로 스쿼드를 구성해 개발한 프로젝트가 성적 알림 기능이었는데, 이는 학생들이 성적 공개 시기에 가장 필요로 하는 기능이라고 판단했기 때문입니다.

이 과정에서 테크 스펙 문서를 도입해 업무 효율성을 높였으며, 단기간 내 기능을 실현할 수 있었습니다. 이번 세션에서는 이러한 도입 과정과 실행 경험을 공유하고자 합니다.`,
  },
  {
    category: "project",
    url: "https://www.youtube.com/embed/bpBs9CjirSk",
    thumbnail: brilliant,
    title: "협력을 통해 새로운 가치 만들기",
    speaker: "Brilliant",
    role: "Project Manager",
    description: `이번 세션에서는 유어슈가 어떻게 협력하며 서비스 가치를 확장해왔는지, 그리고 협업 과정에서 겪은 시행착오와 해결 방안을 공유합니다.  

숭실대 학우들이 숨쉴때를 통해 필요한 정보를 한눈에 얻을 수 있도록, 앞으로도 다양한 파트너들과 협력 가능성을 열어두고자 합니다. 이 세션을 통해 사용자 중심의 문제 정의, 협력 파트너 선정 과정, 성공적인 커뮤니케이션 전략 등 폭넓은 인사이트를 얻어가시길 바랍니다.`,
  },
  {
    category: "planningDesign",
    url: "https://www.youtube.com/embed/nTBuuo150hY",
    thumbnail: jayden,
    title: "유어슈에서 PM이 자리잡기까지",
    speaker: "Jayden",
    role: "Project Management Lead / iOS Engineer",
    description: `유어슈에서 비교적 늦게 구성된 PM팀이 어떤 방향성을 설정했는지, 다양한 프로세스를 시도하며 어떤 시행착오를 겪었는지 소개합니다. 이후 회고를 통해 PM팀이 앞으로 나아가야 할 목표를 공유합니다.`,
  },
  {
    category: "planningDesign",
    url: "https://www.youtube.com/embed/7idpVrvGEiw",
    thumbnail: umi,
    title: "유어슈의 디자이너라서 할 수 있었던 일들",
    speaker: "Umi",
    role: "Product Design Lead",
    description: `유어슈 프로덕트 디자이너로서의 경험을 바탕으로, 프로덕트 디자인 팀이 실제로 어떤 일을 하며 성장해왔는지를 공유합니다.

다양한 프로젝트와 스터디를 통해 디자이너로서 역량을 키운 과정, 그리고 유어슈 내에서 문제를 발견하고 해결해 나간 경험을 소개합니다.`,
  },
  {
    category: "engineering",
    url: "https://www.youtube.com/embed/A_7To0h3G-E",
    thumbnail: eatsteak,
    title: "u-saint 스크래퍼, rusaint 제작기",
    speaker: "EATSTEAK",
    role: "Web Frontend Engineer",
    description: `u-saint의 정보를 데이터로 파싱하는 라이브러리인 rusaint를 만들며 세웠던 목표, 그리고 목표 달성을 위해 선택했던 해결책들을 살펴보며, 좋은 엔지니어링을 어떻게 해야 하는지 느꼈던 경험을 공유합니다.`,
  },
  {
    category: "engineering",
    url: "https://www.youtube.com/embed/c9Ub-tDxzcw",
    thumbnail: juun,
    title: "XState로 우아한 퍼널 만들기",
    speaker: "Juun",
    role: "Web Frontend Engineer",
    description: `여러 페이지에서 상태를 수집하는 퍼널 UI를 우아하게 만드는 방법에 대해 소개합니다.
다양한 방법들로 퍼널을 만들어보며 문제점을 분석해 보고 FSM 기반 상태 관리 도구인 XState로 유지보수 하기 좋고 재사용성이 높은 우아한 퍼널을 만드는 방법에 대해서 공유합니다.`,
  },
  {
    category: "operation",
    url: "https://www.youtube.com/embed/vHT7UkpsO2I",
    thumbnail: dali,
    title: "유어슈, 더 나은 원팀을 향해",
    speaker: "Dali",
    role: "Human Resources Lead",
    description: `조직이 목표를 달성하려면 어떻게 하나로 정렬될 수 있을까요?

유어슈 HR팀은 핵심가치를 기반으로 한 경험 설계를 통해 채용부터 성과 관리까지 모든 단계를 정렬하며, 조직의 원팀 문화를 만들어가고 있습니다. 이번 세션에서는 어떤 인재를 선발하고, 어떻게 성장시킬지에 대한 실전 인사이트를 공유하며, 핵심가치가 개인과 조직을 어떻게 연결하는지 소개합니다.

더 강한 원팀을 만들기 위한 HR팀의 전략과 경험 설계의 비법을 지금 확인하세요!`,
  },
  {
    category: "operation",
    url: "https://www.youtube.com/embed/CeTeB_HDKUI",
    thumbnail: dona,
    title: "월급 없는 조직을 운영하는 방법",
    speaker: "Dona",
    role: "Head Lead",
    description: `월급 없이 조직을 운영하는 방법은 무엇일까요?

유어슈는 “함께 만들어가는 당신의 숭실”이라는 슬로건 아래, 10개 부서와 약 80명의 멤버가 모여 숭실대 학생들을 위한 프로덕트를 만들어가는 조직입니다. 금전적 보상 없이도 구성원들은 가치 중심의 운영을 통해 협업을 이어가며, 소통을 바탕으로 내부 문제를 해결해왔습니다.

이번 세션에서는 TF 부재, 소통 부족 등 무보수 조직이 직면하는 문제를 어떻게 극복했는지 구체적인 사례를 통해 소개합니다. 이를 통해 사용자 중심의 문제 정의, 부서 간 협업, 성공적인 커뮤니케이션 전략에 대한 실질적인 인사이트를 얻어가시길 바랍니다.`,
  },
];
