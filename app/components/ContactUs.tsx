'use client';

import React, { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-black/40 backdrop-blur-sm">
      <h2 className="text-3xl md:text-5xl font-bold mb-2 text-[#BF953F]">Contact Us</h2>
      <p className="text-base md:text-lg text-[#FCF6BA]/90 mb-8 max-w-2xl text-center">
        Let's bring your vision to life. Get in touch with us today.
      </p>

      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Left Side - Dummy Image */}
        <div className="w-full md:w-1/2 relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden border border-[#BF953F]/30 shadow-2xl shadow-[#BF953F]/10 group">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#2a2520] to-[#0d0d0d]"></div>
          
          {/* Decorative Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#BF953F" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          {/* Image Placeholder Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={0.5}
                stroke="currentColor"
                className="w-20 h-20 mx-auto text-[#BF953F]/30 group-hover:text-[#BF953F]/50 transition-colors duration-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                />
              </svg>
              <p className="text-[#BF953F]/50 text-lg font-light tracking-widest uppercase">
                Shangri-La Pavilion
              </p>
            </div>
          </div>

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

          {/* Bottom Info */}
          <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-[#BF953F]"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <p className="text-[#FCF6BA] text-xs md:text-sm">
                123 Luxury Avenue, Premium District
              </p>
            </div>
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-[#BF953F]"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <p className="text-[#FCF6BA] text-xs md:text-sm">
                +1 (555) 123-4567
              </p>
            </div>
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-[#BF953F]"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <p className="text-[#FCF6BA] text-xs md:text-sm">
                info@shangrilapavilion.com
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-full md:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div className="group">
              <label htmlFor="name" className="block text-[#BF953F] text-sm font-medium uppercase tracking-widest mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-black/40 border border-[#BF953F]/30 rounded-lg text-[#FCF6BA] placeholder-[#BF953F]/40 focus:outline-none focus:border-[#BF953F] focus:ring-1 focus:ring-[#BF953F] transition-all duration-300"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email and Phone Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label htmlFor="email" className="block text-[#BF953F] text-sm font-medium uppercase tracking-widest mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-black/40 border border-[#BF953F]/30 rounded-lg text-[#FCF6BA] placeholder-[#BF953F]/40 focus:outline-none focus:border-[#BF953F] focus:ring-1 focus:ring-[#BF953F] transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div className="group">
                <label htmlFor="phone" className="block text-[#BF953F] text-sm font-medium uppercase tracking-widest mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-black/40 border border-[#BF953F]/30 rounded-lg text-[#FCF6BA] placeholder-[#BF953F]/40 focus:outline-none focus:border-[#BF953F] focus:ring-1 focus:ring-[#BF953F] transition-all duration-300"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>

            {/* Event Type and Date Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label htmlFor="eventType" className="block text-[#BF953F] text-sm font-medium uppercase tracking-widest mb-2">
                  Event Type *
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/40 border border-[#BF953F]/30 rounded-lg text-[#FCF6BA] focus:outline-none focus:border-[#BF953F] focus:ring-1 focus:ring-[#BF953F] transition-all duration-300"
                >
                  <option value="" className="bg-black">Select event type</option>
                  <option value="wedding" className="bg-black">Wedding</option>
                  <option value="corporate" className="bg-black">Corporate Event</option>
                  <option value="birthday" className="bg-black">Birthday</option>
                  <option value="anniversary" className="bg-black">Anniversary</option>
                  <option value="gala" className="bg-black">Gala Dinner</option>
                  <option value="other" className="bg-black">Other</option>
                </select>
              </div>

              <div className="group">
                <label htmlFor="date" className="block text-[#BF953F] text-sm font-medium uppercase tracking-widest mb-2">
                  Event Date *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/40 border border-[#BF953F]/30 rounded-lg text-[#FCF6BA] focus:outline-none focus:border-[#BF953F] focus:ring-1 focus:ring-[#BF953F] transition-all duration-300"
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="group">
              <label htmlFor="message" className="block text-[#BF953F] text-sm font-medium uppercase tracking-widest mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-black/40 border border-[#BF953F]/30 rounded-lg text-[#FCF6BA] placeholder-[#BF953F]/40 focus:outline-none focus:border-[#BF953F] focus:ring-1 focus:ring-[#BF953F] transition-all duration-300 resize-none"
                placeholder="Tell us about your event and any special requirements..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-8 py-3 bg-gradient-to-r from-[#BF953F] to-[#B38728] text-black font-semibold uppercase tracking-widest text-sm rounded-lg hover:from-[#FCF6BA] hover:to-[#BF953F] transition-all duration-300 transform hover:scale-[1.02] shadow-lg shadow-[#BF953F]/20"
            >
              Send Message
            </button>

            {/* Privacy Notice */}
            <p className="text-[#BF953F]/60 text-xs text-center leading-relaxed">
              By submitting this form, you agree to our privacy policy. We'll never share your information.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
