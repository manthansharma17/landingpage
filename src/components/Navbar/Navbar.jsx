import SocialIcons from "../Common/SocialIcons";

function KLogo() {
  return (
    <div className="w-10 h-10 flex items-center justify-center text-white">
      <svg
        className="w-full h-full fill-current"
        viewBox="0 0 40 40"
      >
        <path d="M12 4H18V16L28 4H35L22 19L36 36H29L18 22V36H12V4Z" />
      </svg>
    </div>
  );
}

function Navbar() {
  return (
    <header className="absolute top-0 left-0 w-full z-20 px-6 py-6 md:px-12 flex justify-between items-center">

      {/* Navigation */}

      <nav className="hidden md:flex items-center gap-2 glass-nav rounded-full px-2 py-2">

        <a
          href="#"
          className="bg-white/10 text-white px-6 py-2 rounded-full"
        >
          Home
        </a>

        <a
          href="#"
          className="text-white hover:bg-white/10 px-6 py-2 rounded-full transition"
        >
          About
        </a>

        <a
          href="#"
          className="text-white hover:bg-white/10 px-6 py-2 rounded-full transition"
        >
          Services
        </a>

        <a
          href="#"
          className="text-white hover:bg-white/10 px-6 py-2 rounded-full transition"
        >
          Contact
        </a>

      </nav>

      {/* Logo */}

      <div className="absolute left-1/2 -translate-x-1/2">
        <KLogo />
      </div>

      {/* Social Icons */}

      <SocialIcons />

    </header>
  );
}

export default Navbar;