import Image from "next/image";

function Header() {
  return (
    <header className="bg-[hsl(180,29%,50%)]">
      <div className="hidden sm:block relative w-full">
        <Image src="/bg-header-desktop.svg" alt="banner" width={0} height={0} className="w-full h-auto" priority />
      </div>
      <div className="sm:hidden relative w-full">
        <Image src="/bg-header-mobile.svg" alt="banner" width={0} height={0} className="w-full h-auto" priority />
      </div>
    </header>
  );
}

export default Header;