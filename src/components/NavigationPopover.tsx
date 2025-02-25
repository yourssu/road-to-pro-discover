import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverPortal,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { IcCloseLine, IcListLine } from "@yourssu/handy-icons-react";

export default function NavigationPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="cursor-pointer dropdown-btn hover:scale-105 rounded-lg transition-all active:scale-95 active:bg-white/25">
          <IcListLine className="size-12 lg:size-16 text-white" />
        </button>
      </PopoverTrigger>
      <PopoverPortal>
        <PopoverContent
          align="end"
          className="bg-neutral-100 text-neutral-900 rounded-2xl p-2 gap-4 w-72 drop-shadow-lg z-10"
        >
          <div className="flex flex-col gap-2 grow">
            <div className="flex justify-between items-center px-2 pt-2">
              <h1 className="font-bold">Road To Pro: Discover</h1>
              <PopoverClose asChild>
                <IcCloseLine className="cursor-pointer size-6 text-netural-900 hover:scale-105 hover:bg-black/25 rounded-lg p-1 transition-all active:scale-95" />
              </PopoverClose>
            </div>
            <hr className="border-neutral-400 mx-2" />
            <div>
              <ul className="ml-2">
                <li className="rounded-lg hover:bg-neutral-600/25 active:bg-neutral-600/50 active:scale-95 transition-all py-1 px-2">
                  <a href="#project" className="w-full inline-block">
                    Project
                  </a>
                </li>
                <li className="rounded-lg hover:bg-neutral-600/25 active:bg-neutral-600/50 active:scale-95 transition-all py-1 px-2">
                  <a href="#planning_design" className="w-full inline-block">
                    Planning & Design
                  </a>
                </li>
                <li className="rounded-lg hover:bg-neutral-600/25 active:bg-neutral-600/50 active:scale-95 transition-all py-1 px-2">
                  <a href="#engineering" className="w-full inline-block">
                    Engineering
                  </a>
                </li>
                <li className="rounded-lg hover:bg-neutral-600/25 active:bg-neutral-600/50 active:scale-95 transition-all py-1 px-2">
                  <a href="#operation" className="w-full inline-block">
                    Operation
                  </a>
                </li>
              </ul>
            </div>
            <h1 className="text-sm font-bold text-neutral-500 px-2">
              Previous Events
            </h1>
            <hr className="border-neutral-400 mx-2" />
            <a
              href="https://event.yourssu.com/2021"
              target="_blank"
              className="rounded-lg hover:bg-neutral-600/25 transition-all p-2 active:bg-neutral-600/50 active:scale-95"
            >
              <h1 className="font-bold">Road To Pro / 2021</h1>
              <p className="text-sm text-neutral-600">
                구르다 보면 보이는 것들
              </p>
            </a>
          </div>
        </PopoverContent>
      </PopoverPortal>
    </Popover>
  );
}
