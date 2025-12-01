'use client';

import React, { useState, useRef } from 'react';

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Creating an array of 6 service reels
  const services = [
    { id: 1, title: 'Wedding Ceremonies', description: 'Elegant and unforgettable wedding experiences' },
    { id: 2, title: 'Corporate Events', description: 'Professional gatherings with sophistication' },
    { id: 3, title: 'Birthday Celebrations', description: 'Memorable moments for your special day' },
    { id: 4, title: 'Anniversary Parties', description: 'Celebrate milestones in luxury' },
    { id: 5, title: 'Gala Dinners', description: 'Exquisite dining experiences' },
    { id: 6, title: 'Cultural Events', description: 'Traditional celebrations with modern elegance' },
  ];

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const itemWidth = container.scrollWidth / services.length;
      container.scrollTo({
        left: itemWidth * index,
        behavior: 'smooth',
      });
      setCurrentIndex(index);
    }
  };

  const handlePrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : services.length - 1;
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex < services.length - 1 ? currentIndex + 1 : 0;
    scrollToIndex(newIndex);
  };

  return (
    <section id="services" className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-black/40 backdrop-blur-sm">
      <h2 className="text-4xl md:text-6xl font-bold mb-4 text-[#BF953F]">Services</h2>
      <p className="text-lg md:text-xl text-[#FCF6BA]/90 mb-16 max-w-2xl text-center">
        Discover our premium services tailored to make your events extraordinary.
      </p>

      {/* Carousel Container */}
      <div className="relative w-full max-w-7xl">
        {/* Left Arrow Button */}
        <button
          onClick={handlePrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-16 md:h-16 bg-black/60 backdrop-blur-sm border border-[#BF953F]/40 rounded-full flex items-center justify-center hover:bg-[#BF953F]/20 hover:border-[#BF953F] transition-all duration-300 group -translate-x-4 md:-translate-x-8"
          aria-label="Previous service"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 md:w-8 md:h-8 text-[#BF953F] group-hover:text-[#FCF6BA] transition-colors"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Scrollable Reels Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide px-4 md:px-16"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              className="flex-shrink-0 w-[280px] md:w-[320px] lg:w-[380px] scroll-snap-align-center"
              style={{ scrollSnapAlign: 'center' }}
            >
              {/* Reel Card - Vertical Video Format */}
              <div className="group relative aspect-[9/14] rounded-3xl overflow-hidden border border-[#BF953F]/30 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] shadow-2xl hover:shadow-[#BF953F]/30 transition-all duration-500">
                {/* Placeholder Video Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    className="w-20 h-20 text-[#BF953F]/20 group-hover:text-[#BF953F]/40 transition-colors duration-300"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                    />
                  </svg>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1 h-8 bg-gradient-to-b from-[#BF953F] to-[#FCF6BA]"></div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#FCF6BA]">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-sm md:text-base text-[#BF953F]/80 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#BF953F]/30 backdrop-blur-sm border-2 border-[#FCF6BA] flex items-center justify-center transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-8 h-8 md:w-10 md:h-10 text-[#FCF6BA] ml-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>

                {/* Service Number Badge */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-[#BF953F]/40 flex items-center justify-center">
                  <span className="text-[#BF953F] font-bold text-sm">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow Button */}
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-12 h-12 md:w-16 md:h-16 bg-black/60 backdrop-blur-sm border border-[#BF953F]/40 rounded-full flex items-center justify-center hover:bg-[#BF953F]/20 hover:border-[#BF953F] transition-all duration-300 group translate-x-4 md:translate-x-8"
          aria-label="Next service"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 md:w-8 md:h-8 text-[#BF953F] group-hover:text-[#FCF6BA] transition-colors"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex gap-2 mt-12">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-[#BF953F] w-8'
                : 'bg-[#BF953F]/30 hover:bg-[#BF953F]/60'
            }`}
            aria-label={`Go to service ${index + 1}`}
          />
        ))}
      </div>

      {/* View All Services Button */}
      <button className="mt-12 px-10 py-3 border border-[#BF953F] text-[#BF953F] hover:bg-[#BF953F] hover:text-black transition-all duration-300 uppercase tracking-widest text-sm font-semibold rounded-sm cursor-pointer">
        View All Services
      </button>

      {/* Custom CSS for hiding scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
