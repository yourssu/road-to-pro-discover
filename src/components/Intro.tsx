import { GalleryVerticalEnd } from "lucide-react";

export default function Intro() {
  return (
    <main className="h-full flex gap-4 justify-between flex-col md:flex-row items-stretch">
      <section className="flex flex-col gap-2 h-full justify-center px-16 max-w-screen-md drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)]">
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
      <aside className="w-full flex flex-col justify-center items-center gap-2 bg-gradient-to-b md:bg-gradient-to-r from-transparent via-black/70 to-black md:w-56 p-8">
        <GalleryVerticalEnd />
        <p className="text-center break-keep text-sm">스크롤하여 세션 보기</p>
      </aside>
    </main>
  );
}
