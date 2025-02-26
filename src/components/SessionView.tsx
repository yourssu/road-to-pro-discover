import { Session } from "@/lib/sessions";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import { ChevronLeft } from "lucide-react";

export default function SessionView({ session }: { session: Session }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <article
          key={session.title}
          className="vid flex flex-col gap-1 items-start w-full lg:w-72 cursor-pointer"
        >
          <div className="thumbnail aspect-video w-48 lg:w-72 hover:scale-105 active:scale-95 transition-all">
            <img
              src={session.thumbnail}
              alt={session.title}
              className="w-full"
            />
          </div>
          <div className="flex flex-wrap items-center lg:items-start lg:flex-col gap-1">
            <h2 className="vid-title text-lg lg:text-2xl font-bold break-keep basis-full lg:basis-auto">
              {session.title}
            </h2>
            <p className="vid-speaker font-bold text-sm lg:text-base">
              {session.speaker}
            </p>
            <p className="vid-role text-sm lg:text-base">{session.role}</p>
          </div>
        </article>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 bg-black/85 z-20" />
        <DialogContent className="w-full h-full fixed inset-0 z-30">
          <section className="flex flex-col items-stretch w-full h-full container mx-auto mt-24 p-4 lg:p-8">
            <DialogClose className="self-stretch py-4 cursor-pointer hover:animate-pulse">
              <ChevronLeft className="size-8" />
            </DialogClose>
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
              <article className="grow">
                <iframe
                  src={session.url}
                  title=""
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full aspect-video"
                />
              </article>
              <aside className="flex flex-col justify-end shrink-0 gap-1">
                <h1 className="text-xl lg:text-4xl font-bold break-keep">
                  {session.title}
                </h1>
                <div className="flex gap-2 mb-4">
                  <p className="font-bold text-base lg:text-lg">
                    {session.speaker}
                  </p>
                  <p className="text-base lg:text-lg">{session.role}</p>
                </div>
                <p className="text-sm lg:text-sm lg:max-w-72 break-keep">
                  {session.description}
                </p>
                <div className="flex gap-2 my-2 items-center">
                  <button className="rounded-xl shadow-sm hover:shadow-lg bg-amber-700 text-white font-bold py-2 px-4 hover:bg-amber-800 transition-all cursor-pointer">
                    공유
                  </button>
                  <a
                    href={`mailto:${session.speaker.toLowerCase()}.urssu@gmail.com`}
                    className="rounded-xl shadow-sm hover:shadow-lg bg-amber-700 text-white font-bold py-2 px-4 hover:bg-amber-800 transition-all"
                  >
                    메일 보내기
                  </a>
                </div>
              </aside>
            </div>
          </section>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
