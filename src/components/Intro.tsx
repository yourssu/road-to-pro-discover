import { GalleryVerticalEnd } from "lucide-react";
import { Line } from "./Line";

export default function Intro() {
  return (
    <main className="size-full flex gap-4 justify-between">
      <div className="pointer-events-none fixed inset-0 -z-10 w-full h-full rounded-none">
        <Line className="absolute inset-0 top-1/2 -translate-y-1/2 w-full text-green-500" />
        <Line className="absolute inset-0 top-1/2 -translate-y-1/2 w-full text-yellow-500" />
        <Line className="absolute inset-0 top-1/2 -translate-y-1/2 w-full text-gray-500" />
        <Line className="absolute inset-0 top-1/2 -translate-y-1/2 w-full text-red-500" />
      </div>
      <section className="flex flex-col gap-2 h-full justify-center pl-16 max-w-screen-md drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)]">
        <h1 className="text-8xl font-black">Road To Pro</h1>
        <h2 className="text-4xl font-bold">DISCOVER</h2>
        <p className="text-xl">우리가 발견한 숭실, 발견할 숭실</p>
        <hr />
        <article className="break-keep">
          안녕하세요. 유어슈입니다. 로드투프로 화이팅! 안녕하세요. 유어슈입니다.
          로드투프로 화이팅! 안녕하세요. 유어슈입니다. 로드투프로 화이팅!
          안녕하세요. 유어슈입니다. 로드투프로 화이팅! 안녕하세요. 유어슈입니다.
          로드투프로 화이팅! 안녕하세요. 유어슈입니다. 로드투프로 화이팅!
        </article>
      </section>
      <aside className="flex flex-col justify-center items-center gap-2 bg-gradient-to-r from-transparent via-black/70 to-black w-56">
        <GalleryVerticalEnd />
        <p className="text-center break-keep text-sm">스크롤하여 세션 보기</p>
      </aside>
    </main>
  );
}
