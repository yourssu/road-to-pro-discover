import logo from "@/assets/logo.svg";
import { ListLine } from "@/icons/ListLine";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverPortal,
  PopoverTrigger,
} from "@radix-ui/react-popover";

export default function Header() {
  return (
    <header className="fixed inset-0 w-full h-24 px-8 py-4 bg-gradient-to-b z-30 from-gray-800/65">
      <nav className="flex gap-4 justify-between items-center h-full">
        <a href="#" className="flex items-center gap-4">
          <img src={logo} className="size-12 lg:size-16" />
          <div className="shrink-0 w-0.5 self-stretch my-4 bg-white/50" />
          <h1 className="font-bold text-lg lg:text-2xl">Road To Pro</h1>
        </a>
        <Popover>
          <PopoverTrigger asChild>
            <button className="cursor-pointer dropdown-btn hover:scale-105 rounded-lg transition-all active:scale-95 active:bg-white/25">
              <ListLine className="size-12 lg:size-16 text-white" />
            </button>
          </PopoverTrigger>
          <PopoverPortal>
            <PopoverContent
              align="end"
              className="bg-white text-black rounded-2xl p-4 items-start gap-4 w-72"
            >
              <div>
                <h1>Navigation</h1>
                <button>
                  <h1>Road To Pro / 2021</h1>
                  <p>구르다 보면 보이는 것들</p>
                </button>
                <div>
                  <h1>Road To Pro: Discover</h1>
                  <ul>
                    <li>
                      <a href="#project">Project</a>
                    </li>
                    <li>
                      <a href="#planning_design">Planning & Design</a>
                    </li>
                    <li>
                      <a href="#engineering">Engineering</a>
                    </li>
                    <li>
                      <a href="#operation">Operation</a>
                    </li>
                  </ul>
                </div>
              </div>
              <PopoverClose>X</PopoverClose>
            </PopoverContent>
          </PopoverPortal>
        </Popover>
      </nav>
    </header>
  );
}
