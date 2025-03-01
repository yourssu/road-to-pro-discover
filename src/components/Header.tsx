import logo from "@/assets/logo.svg";
import NavigationPopover from "./NavigationPopover";
import { preload } from "react-dom";

export default function Header() {
  preload(logo, { as: "image" });
  return (
    <header className="fixed inset-0 w-full h-24 px-8 py-4 bg-gradient-to-b z-30 from-gray-800/65">
      <nav className="flex gap-4 justify-between items-center h-full">
        <a href="#" className="flex items-center gap-4">
          <img src={logo} className="size-12 lg:size-16" alt="YOURSSU" />
          <div className="shrink-0 w-0.5 self-stretch my-4 bg-white/50" />
          <h1 className="font-bold text-lg lg:text-2xl">Road To Pro</h1>
        </a>
        <NavigationPopover />
      </nav>
    </header>
  );
}
