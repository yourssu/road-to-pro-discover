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
    description: `이번 세션에서는 숨쉴때 서비스의 방향성을 설정하며 시도했던 애자일 도입과, 빠른 개발과 검증을 위한 목적 조직인 스쿼드 시스템의 도입 과정에 대해 소개합니다.
유저와 더 가까워지고, 더욱 유용한 서비스를 제공하기 위해기존의 개발 방식을 어떻게 변화시켰고, 어떤 시행착오를 겪었으며, 이를 통해 얻은 경험이 무엇인지 공유드립니다.
이 과정에서 데이터 기반의 검증, 타겟 이벤트 전략, 스쿼드의 운영 방식, 빠른 의사결정과 실험이 가능했던 이유 등을 다루며, 숨쉴때가 어떻게 발전해왔고 앞으로 어디로 나아가고자 하는지에 소개해 드리고자 합니다.
완벽한 기획보다 빠른 실행을 통한 실험과 개선이 어떻게 숨쉴때를 변화시켰는지, 그리고 유어슈이기에 가능했던 도전과 성장의 과정을 확인해보세요!`,
  },
  {
    category: "project",
    url: "https://www.youtube.com/embed/0hTmn0NIXf8",
    thumbnail: oscar,
    title: "학생들의 불편에 공감하기",
    speaker: "Oscar",
    role: "Project Manager",
    description: `항상 유어슈에서 생각한 일들을 스쿼드화시켜서 진행을 해보았습니다. 유어슈에서 스쿼드를 처음 생성하면서 진행한 개발이었습니다. 숭실대 학생들이 제일 잘 아는 숭실대학생들이 필요한 것들을 생각해보면서 많은 기능들 중에 성적알림이라는 기능을 먼저 도입하려고 했는데요, 학생들이 성적 공개시기에 가장 필요한 기능이라고 생각해서 시작하게 되었습니다. 그러한 과정에서 새로도입한 테크스펙이라는 문서를 통해 업무의 효율성을 증진시켰습니다.이러한 것들을 단기간에 실현할 수 있었던 과정들을 소개하도록 하겠습니다!`,
  },
  {
    category: "project",
    url: "https://www.youtube.com/embed/bpBs9CjirSk",
    thumbnail: brilliant,
    title: "협력을 통해 새로운 가치 만들기",
    speaker: "Brilliant",
    role: "Project Manager",
    description: `이번 세션에서는 유어슈 어떻게 협력하여 서비스의 가치를 확장해 나갔는지, 그리고 협업 과정에서 겪은 시행착오와 해결 방안을 나눌 예정입니다. 숭실대 학우들이 필요한 정보를 “숨쉴때” 한 번에 얻을 수 있도록, 저희는 앞으로도 열린 태도로 더 다양한 파트너들과의 협력 가능성을 모색해나갈 계획입니다.
여러분께서는 이 세션을 통해 사용자 중심의 문제 정의**, 협력 파트너 선정 과정**, 그리고 성공적인 커뮤니케이션 전략까지 폭넓은 인사이트를 얻으실 수 있을 것입니다.`,
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
    description: `유어슈의 프로덕트 디자이너로서의 경험을 바탕으로, 프로덕트 디자인팀이 실제로 어떤 일을 하는지, 그리고 그 과정에서 어떤 성장과 배움이 있었는지에 대해 나눕니다. 특히 다양한 프로젝트와 스터디를 통해 디자이너로서의 역량을 어떻게 키웠는지, 그리고 유어슈 내에서 문제를 발견하고 이를 해결하는 과정을 소개합니다.`,
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
    speaker: "Dail",
    role: "Human Resources Lead",
    description: `조직이 목표를 달성하려면, 어떻게 하나로 정렬될 수 있을까요? 

조직의 원팀을 향한 여정, 유어슈 HR팀은 핵심가치를 기반으로 한 경험 설계로, 채용부터 성과 관리까지 모든 단계를 하나로 정렬시킵니다. 어떤 사람을 뽑고, 어떻게 성장시킬지에 대한 실전 인사이트를 나누며, 핵심가치가 어떻게 개인과 조직을 연결하지 공유합니다. 더 강한 원팀을 만들기 위한 여정의 시작, HR팀만의 경험 설계의 비법을 지금 바로 확인하세요!`,
  },
  {
    category: "operation",
    url: "https://www.youtube.com/embed/CeTeB_HDKUI",
    thumbnail: dona,
    title: "월급 없는 조직을 운영하는 방법",
    speaker: "Dona",
    role: "Head Lead",
    description: `월급 없는 조직을 운영하는 방법은 무엇일까요?

숭실대생을 위한 프로덕트를 만드는 학생 조직, 유어슈는 "함께 만들어가는 당신의 숭실"이라는 슬로건 아래 10개의 부서와 약 80명의 액티브 멤버가 모여 활동하고 있습니다. 이러한 무보수 조직에서도 헤드리드를 비롯한 구성원들은 내부에서 발생하는 다양한 문제들을 소통으로 극복해왔습니다.
오늘 이 세션에서는, 금전적 보상 대신 '가치'만을 무기로 운영되는 유어슈가 TF 부재, 소통 부재 등의 내부 문제들을 어떻게 해결해 나갔는지 구체적인 사례를 통해 소개합니다. 이를 통해 여러분은 사용자 중심의 문제 정의, 부서 간 협업, 그리고 성공적인 커뮤니케이션 전략에 대한 실질적인 인사이트를 얻으실 수 있을 것입니다.`,
  },
];
