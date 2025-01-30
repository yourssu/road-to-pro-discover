import logo from "@/assets/logo.svg";

export default function Header() {
  return (
    <header className="fixed inset-0 w-full h-24 px-8 py-4 backdrop-blur bg-gradient-to-b from-gray-800/65 border-gray-600/50 border-b">
      <nav className="flex gap-4 items-center h-full">
        <a href="#" className="flex items-center gap-2">
          <img src={logo.src} className="size-16" />
          <h1 className="font-bold text-2xl invisible">
            ROAD TO PRO
            <span className="ml-2 text-base font-medium">DISCOVER</span>
          </h1>
        </a>
      </nav>
    </header>
  );
}
