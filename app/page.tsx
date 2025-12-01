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

          <section id="about" className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 md:px-16 gap-12 py-20 bg-black/40 backdrop-blur-sm">
            {/* Left Side - Image */}
            <div className="w-full md:w-1/2 relative h-[300px] md:h-[500px] rounded-2xl overflow-hidden border border-[#BF953F]/30 shadow-2xl shadow-[#BF953F]/10">
              <Image
                src="/about-us.png"
                alt="About Shangri-La Pavilion"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Right Side - Text */}
            <div className="w-full md:w-1/2 text-left space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold text-[#BF953F]">About Us</h2>
              <div className="space-y-4 text-lg md:text-xl text-[#FCF6BA]/90 leading-relaxed font-light">
                <p>
                  Welcome to <span className="text-[#FFD700] font-medium">Shangri-La Pavilion</span>, where timeless elegance meets modern luxury. Nestled in the heart of the city, our venue is a sanctuary of sophistication, designed to transform your special moments into unforgettable memories.
                </p>
                <p>
                  With a passion for excellence and an eye for detail, we curate experiences that transcend the ordinary. Whether it's a grand wedding, an intimate gathering, or a corporate gala, our dedicated team ensures every aspect is executed with flawless precision and grace.
                </p>
                <p>
                  Discover a world where your vision comes to life amidst breathtaking architecture and unparalleled service.
                </p>
              </div>
              <button className="mt-8 px-8 py-3 border border-[#BF953F] text-[#BF953F] hover:bg-[#BF953F] hover:text-black transition-all duration-300 uppercase tracking-widest text-sm font-semibold">
                Read More
              </button>
            </div>
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

        {/* Footer */}
        <footer className="w-full py-8 bg-black/80 backdrop-blur-sm text-center text-[#BF953F]">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex gap-6">
              {/* Facebook Link */}
              <a
                href="https://www.facebook.com/ShangriLaPavilion"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FCF6BA] transition-colors"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>

              {/* Instagram Link */}
              <a
                href="https://www.facebook.com/ShangriLaPavilion"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#FCF6BA] transition-colors"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
            <p className="text-sm uppercase tracking-widest">
              copyright © 2025. all rights reserved by Shangri-La Pavilion
            </p>
          </div>
        </footer>      </div>
    </div>
  );
}
