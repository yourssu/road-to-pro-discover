import logo from "@/assets/logo.svg";

export default function Header() {
  return (
    <header className="fixed inset-0 w-full h-24 px-8 py-4 bg-gradient-to-b z-30 from-gray-800/65">
      <nav className="flex gap-4 justify-start items-center h-full">
        <a href="#" className="flex items-center gap-4">
          <img src={logo.src} className="size-16" />
          <div className="shrink-0 w-0.5 self-stretch my-4 bg-white/50" />
          <h1 className="font-bold text-2xl">Road To Pro</h1>
        </a>
      </nav>
    </header>
  );
}
