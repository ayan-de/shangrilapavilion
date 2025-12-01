import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden font-sans selection:bg-[#FFD700] selection:text-black">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 min-h-full min-w-full object-cover z-0"
      >
        <source src="/homeVideo.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 h-full w-full bg-black/60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-[#FFD700]">
        {/* Navbar */}
        <nav className="flex items-center justify-between px-8 py-6 md:px-12 lg:px-16">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <Image
              src="/logo-no-bg.png"
              alt="Shangrila Pavilion Logo"
              width={100}
              height={100}
              className="object-cover"
            />
            <span className="text-2xl font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728]">
              Shangri-La Pavilion
            </span>
          </div>

          {/* Menu Section */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-[#BF953F]">
            <li className="hover:text-[#FCF6BA] transition-colors cursor-pointer">
              Home
            </li>
            <li className="hover:text-[#FCF6BA] transition-colors cursor-pointer">
              About
            </li>
            <li className="hover:text-[#FCF6BA] transition-colors cursor-pointer">
              Gallery
            </li>
            <li className="hover:text-[#FCF6BA] transition-colors cursor-pointer">
              Services
            </li>
            <li className="hover:text-[#FCF6BA] transition-colors cursor-pointer">
              Testimonial
            </li>
            <li className="hover:text-[#FCF6BA] transition-colors cursor-pointer">
              Contact Us
            </li>
          </ul>
          
          {/* Mobile Menu Icon (Optional) */}
          <div className="md:hidden text-[#FFD700]">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
          {/* You can add hero content here later */}
        </main>
      </div>
    </div>
  );
}
