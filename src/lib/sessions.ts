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
    url: "https://www.youtube.com/watch?v=FyUSUJLboSg",
    thumbnail: sereal,
    title: "Agile스럽게 움직여보기",
    speaker: "Sereal",
    role: "Project Manager / iOS Engineer",
  },
  {
    category: "project",
    url: "https://www.youtube.com/watch?v=0hTmn0NIXf8",
    thumbnail: oscar,
    title: "학생들의 불편에 공감하기",
    speaker: "Oscar",
    role: "Project Manager",
  },
  {
    category: "project",
    url: "https://www.youtube.com/watch?v=bpBs9CjirSk",
    thumbnail: brilliant,
    title: "협력을 통해 새로운 가치 만들기",
    speaker: "Brilliant",
    role: "Project Manager",
  },
  {
    category: "planningDesign",
    url: "https://youtu.be/nTBuuo150hY",
    thumbnail: jayden,
    title: "유어슈에서 PM이 자리잡기까지",
    speaker: "Jayden",
    role: "Project Management Lead / iOS Engineer",
  },
  {
    category: "planningDesign",
    url: "https://youtu.be/7idpVrvGEiw",
    thumbnail: umi,
    title: "유어슈의 디자이너라서 할 수 있었던 일들",
    speaker: "Umi",
    role: "Product Design Lead",
  },
  {
    category: "engineering",
    url: "https://youtu.be/A_7To0h3G-E",
    thumbnail: eatsteak,
    title: "u-saint 스크래퍼, rusaint 제작기",
    speaker: "EATSTEAK",
    role: "Web Frontend Engineer",
  },
  {
    category: "engineering",
    url: "https://youtu.be/c9Ub-tDxzcw",
    thumbnail: juun,
    title: "XState로 우아한 퍼널 만들기",
    speaker: "Juun",
    role: "Web Frontend Engineer",
  },
  {
    category: "operation",
    url: "https://youtu.be/vHT7UkpsO2I",
    thumbnail: dali,
    title: "유어슈, 더 나은 원팀을 향해",
    speaker: "Dail",
    role: "Human Resources Lead",
  },
  {
    category: "operation",
    url: "https://youtu.be/CeTeB_HDKUI",
    thumbnail: dona,
    title: "월급 없는 조직을 운영하는 방법",
    speaker: "Dona",
    role: "Head Lead",
  },
];
