import Link from "next/link";

const Header = () => {
  return (
    <header className="text-right hidden justify-end items-center gap-16 pt-2.5 pb-6 px-4 md:px-20 md:flex">
      <div className="border-b border-pink inline-block">
        <span>EN</span>
      </div>
      <nav className="text-xl flex items-center gap-8">
        <Link href="/" className="text-pink px-4">
          home
        </Link>
        <Link href="/" className="px-4">
          roadmap
        </Link>
        <Link href="/" className="px-4">
          vision
        </Link>
        <Link href="/" className="px-4">
          contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
