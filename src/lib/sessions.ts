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
}

export const sessions: Session[] = [
  {
    category: "project",
    url: "",
    thumbnail: sereal,
    title: "애자일스럽게 움직여보기",
    speaker: "Sereal",
    role: "Project Manager / iOS Engineer",
  },
  {
    category: "project",
    url: "",
    thumbnail: oscar,
    title: "학생들의 불편에 공감하기",
    speaker: "Oscar",
    role: "Project Manager",
  },
  {
    category: "project",
    url: "",
    thumbnail: brilliant,
    title: "협력을 통해 새로운 가치만들기",
    speaker: "Brilliant",
    role: "Project Manager",
  },
  {
    category: "planningDesign",
    url: "",
    thumbnail: jayden,
    title: "제목 짓기가 어려워",
    speaker: "Jayden",
    role: "Project Management Lead / iOS Engineer",
  },
  {
    category: "planningDesign",
    url: "",
    thumbnail: umi,
    title: "유어슈의 디자이너라서 할 수 있었던 일들",
    speaker: "Umi",
    role: "Product Design Lead",
  },
  {
    category: "engineering",
    url: "",
    thumbnail: eatsteak,
    title: "u-saint 스크래퍼, rusaint 제작기",
    speaker: "EATSTEAK",
    role: "Web Frontend Engineer",
  },
  {
    category: "engineering",
    url: "",
    thumbnail: juun,
    title: "XState로 퍼널 UI 만들기",
    speaker: "Juun",
    role: "Web Frontend Engineer",
  },
  {
    category: "operation",
    url: "",
    thumbnail: dali,
    title: "세션명을 입력하세요",
    speaker: "Dail",
    role: "Human Resources Lead",
  },
  {
    category: "operation",
    url: "",
    thumbnail: dona,
    title: "숭실대를 직접 바꿔가는 학생들",
    speaker: "Dona",
    role: "Head Lead",
  },
];
