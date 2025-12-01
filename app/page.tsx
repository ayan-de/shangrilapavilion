import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full font-sans selection:bg-[#FFD700] selection:text-black">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 min-h-full min-w-full object-cover z-0"
      >
        <source src="/homeVideo.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="fixed top-0 left-0 h-full w-full bg-black/60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-[#FFD700]">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 flex items-center justify-between px-8 py-2 md:px-12 lg:px-16 z-50 bg-black/30 backdrop-blur-sm">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <Image
              src="/logo-no-bg.png"
              alt="Shangrila Pavilion Logo"
              width={60}
              height={60}
              className="object-cover"
            />
            <span className="text-2xl font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728]">
              Shangri-La Pavilion
            </span>
          </div>

          {/* Menu Section */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-[#BF953F]">
            <li>
              <a href="#home" className="hover:text-[#FCF6BA] transition-colors cursor-pointer">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#FCF6BA] transition-colors cursor-pointer">
                About
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-[#FCF6BA] transition-colors cursor-pointer">
                Gallery
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-[#FCF6BA] transition-colors cursor-pointer">
                Services
              </a>
            </li>
            <li>
              <a href="#testimonial" className="hover:text-[#FCF6BA] transition-colors cursor-pointer">
                Testimonial
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#FCF6BA] transition-colors cursor-pointer">
                Contact Us
              </a>
            </li>
          </ul>
          
          {/* Mobile Menu Icon (Optional) */}
          <div className="md:hidden text-[#FFD700]">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
        </nav>

        {/* Sections */}
        <main className="flex flex-col w-full">
          <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
            <h1 className="text-5xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728]">
              Welcome to Shangri-La Pavilion
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl text-[#FCF6BA]">
              Experience the epitome of luxury and elegance.
            </p>
          </section>

          <section id="about" className="min-h-screen flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-[#BF953F]">About Us</h2>
            <p className="text-lg md:text-xl max-w-3xl leading-relaxed">
              Discover our story and the passion that drives us to create unforgettable moments.
            </p>
          </section>

          <section id="gallery" className="min-h-screen flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-[#BF953F]">Gallery</h2>
            <p className="text-lg md:text-xl">
              Explore our visual journey.
            </p>
          </section>

          <section id="services" className="min-h-screen flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-[#BF953F]">Services</h2>
            <p className="text-lg md:text-xl">
              Tailored services to meet your every need.
            </p>
          </section>

          <section id="testimonial" className="min-h-screen flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-[#BF953F]">Testimonials</h2>
            <p className="text-lg md:text-xl">
              What our guests say about us.
            </p>
          </section>

          <section id="contact" className="min-h-screen flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-[#BF953F]">Contact Us</h2>
            <p className="text-lg md:text-xl">
              Get in touch with us today.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
