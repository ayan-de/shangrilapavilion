'use client';

import React, { useState } from 'react';

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);

  // Google-style reviews data
  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      rating: 5,
      date: '2 weeks ago',
      review: 'Absolutely stunning venue! We had our wedding at Shangri-La Pavilion and it exceeded all our expectations. The staff was incredibly professional and the ambiance was magical. Highly recommend!',
      avatar: 'SJ'
    },
    {
      id: 2,
      name: 'Michael Chen',
      rating: 5,
      date: '1 month ago',
      review: 'Perfect location for corporate events. The facilities are top-notch and the service is impeccable. Our annual gala was a huge success thanks to the amazing team here.',
      avatar: 'MC'
    },
    {
      id: 3,
      name: 'Priya Sharma',
      rating: 5,
      date: '3 weeks ago',
      review: 'We celebrated our 25th anniversary here and it was unforgettable. The attention to detail, the elegant decor, and the exceptional service made our special day truly memorable.',
      avatar: 'PS'
    },
    {
      id: 4,
      name: 'David Williams',
      rating: 5,
      date: '1 week ago',
      review: 'Outstanding venue with world-class amenities. The team went above and beyond to ensure our event was flawless. Will definitely be coming back for future celebrations!',
      avatar: 'DW'
    },
    {
      id: 5,
      name: 'Aisha Rahman',
      rating: 5,
      date: '2 months ago',
      review: 'The most beautiful pavilion in the city! From the initial consultation to the final execution, everything was handled with utmost professionalism. Our guests are still talking about it!',
      avatar: 'AR'
    },
    {
      id: 6,
      name: 'James Anderson',
      rating: 5,
      date: '3 months ago',
      review: 'Exceptional service and breathtaking venue. The Shangri-La Pavilion team made our daughter\'s birthday celebration absolutely perfect. Thank you for creating such wonderful memories!',
      avatar: 'JA'
    }
  ];

  const displayedReviews = showAll ? reviews : reviews.slice(0, 3);

  // Render star rating
  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`w-5 h-5 ${
              index < rating ? 'text-[#FFD700]' : 'text-[#BF953F]/20'
            }`}
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
            />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section id="testimonial" className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-black/40 backdrop-blur-sm">
      <h2 className="text-4xl md:text-6xl font-bold mb-4 text-[#BF953F]">Testimonials</h2>
      <p className="text-lg md:text-xl text-[#FCF6BA]/90 mb-4 max-w-2xl text-center">
        What our guests say about us
      </p>

      {/* Google Rating Summary */}
      <div className="flex items-center gap-4 mb-12">
        <div className="flex items-center gap-2">
          <span className="text-5xl font-bold text-[#FFD700]">5.0</span>
          <div className="flex flex-col">
            {renderStars(5)}
            <span className="text-[#BF953F]/70 text-sm mt-1">Based on {reviews.length} reviews</span>
          </div>
        </div>
        <div className="w-px h-12 bg-[#BF953F]/30"></div>
        <div className="flex items-center gap-2">
          <svg className="w-8 h-8 text-[#BF953F]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          <span className="text-[#FCF6BA] font-medium">Google Reviews</span>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mb-12">
        {displayedReviews.map((review) => (
          <div
            key={review.id}
            className="group bg-black/40 backdrop-blur-sm border border-[#BF953F]/30 rounded-2xl p-6 hover:border-[#BF953F] hover:shadow-lg hover:shadow-[#BF953F]/20 transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#BF953F] to-[#B38728] flex items-center justify-center text-black font-bold text-sm">
                  {review.avatar}
                </div>
                <div>
                  <h3 className="text-[#FCF6BA] font-semibold">{review.name}</h3>
                  <p className="text-[#BF953F]/60 text-xs">{review.date}</p>
                </div>
              </div>
            </div>

            {/* Rating */}
            <div className="mb-3">
              {renderStars(review.rating)}
            </div>

            {/* Review Text */}
            <p className="text-[#FCF6BA]/80 text-sm leading-relaxed">
              {review.review}
            </p>

            {/* Google Icon */}
            <div className="mt-4 pt-4 border-t border-[#BF953F]/20 flex items-center gap-2">
              <svg className="w-4 h-4 text-[#BF953F]/60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="text-[#BF953F]/60 text-xs">Posted on Google</span>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {!showAll && reviews.length > 3 && (
        <button
          onClick={() => setShowAll(true)}
          className="px-10 py-3 border border-[#BF953F] text-[#BF953F] hover:bg-[#BF953F] hover:text-black transition-all duration-300 uppercase tracking-widest text-sm font-semibold rounded-sm cursor-pointer"
        >
          Show More Reviews
        </button>
      )}

      {/* Show Less Button */}
      {showAll && (
        <button
          onClick={() => setShowAll(false)}
          className="px-10 py-3 border border-[#BF953F] text-[#BF953F] hover:bg-[#BF953F] hover:text-black transition-all duration-300 uppercase tracking-widest text-sm font-semibold rounded-sm cursor-pointer"
        >
          Show Less
        </button>
      )}

      {/* Write Review CTA */}
      <div className="mt-8 text-center">
        <p className="text-[#BF953F]/70 text-sm mb-3">Have you experienced our services?</p>
        <button className="px-8 py-2 bg-gradient-to-r from-[#BF953F] to-[#B38728] text-black font-semibold uppercase tracking-widest text-xs rounded-lg hover:from-[#FCF6BA] hover:to-[#BF953F] transition-all duration-300">
          Write a Review
        </button>
      </div>
    </section>
  );
}
