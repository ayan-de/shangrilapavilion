import React from 'react';

export default function Gallery() {
  // Creating an array of 8 items for the dummy placeholders
  const images = Array(8).fill(null);

  return (
    <section id="gallery" className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-20">
      <h2 className="text-4xl md:text-6xl font-bold mb-4 text-[#BF953F]">Gallery</h2>
      <p className="text-lg md:text-xl text-[#FCF6BA]/90 mb-12 max-w-2xl">
        Explore our visual journey through the lens of elegance and luxury.
      </p>
      
      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl px-4">
        {images.map((_, index) => (
          <div 
            key={index} 
            className="group relative aspect-square rounded-2xl overflow-hidden border border-[#BF953F]/20 bg-black/40 backdrop-blur-sm shadow-lg hover:shadow-[#BF953F]/20 transition-all duration-500"
          >
            {/* Placeholder Visual */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1} 
                stroke="currentColor" 
                className="w-12 h-12 text-[#BF953F]/30"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
            </div>
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
              <span className="text-[#BF953F] font-medium tracking-widest uppercase text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                View Image
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <button className="mt-16 px-10 py-3 border border-[#BF953F] text-[#BF953F] hover:bg-[#BF953F] hover:text-black transition-all duration-300 uppercase tracking-widest text-sm font-semibold rounded-sm cursor-pointer">
        Show More
      </button>
    </section>
  );
}
