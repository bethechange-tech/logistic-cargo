'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const Hero = () => {
    const [isImageLoading, setIsImageLoading] = useState(true);

    return (
        <section className="container mx-auto mt-5 relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-200 to-blue-50 px-4 py-16 sm:py-20 md:py-24 lg:py-32 text-center shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-[1.02]">
            {/* Background Illustrations */}
            <div className="bg-hero-pattern pointer-events-none absolute inset-0 opacity-10" />

            {/* Content */}
            <div className="relative z-10">
                {/* Amazon DSP Partner Badge */}
                <div className="mb-6 flex items-center justify-center">
                    {isImageLoading && (
                        <div className="flex items-center justify-center h-[30px] w-[100px] bg-gray-300 animate-pulse rounded">
                            <span className="text-xs text-gray-500">Loading...</span>
                        </div>
                    )}

                    <Image
                        src="https://via.placeholder.com/150x50?text=Amazon+DSP+Partner"
                        alt="Amazon DSP Partner"
                        width={150}
                        height={50}
                        className={`mx-auto h-auto w-32 transform transition-transform duration-500 ease-out hover:scale-110 ${isImageLoading ? 'hidden' : 'block'}`}
                        onLoadingComplete={() => setIsImageLoading(false)}
                    />
                </div>

                {/* Title */}
                <h2 className="mb-4 text-2xl font-extrabold leading-snug text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl transition-colors duration-300 hover:text-blue-600">
                    Full Sustainable Cargo Solution
                </h2>

                {/* Description */}
                <p className="mx-auto mb-8 max-w-xs text-sm leading-relaxed text-gray-700 sm:max-w-md sm:text-base md:max-w-lg md:text-lg lg:max-w-3xl lg:text-xl lg:leading-8">
                    {`We are proud to partner with Amazon as a Delivery Service Partner (DSP),
                    helping to power their logistics and deliver excellence. Our mission
                    is to continually earn our customers' trust through efficient and
                    sustainable solutions in today’s complex, uncertain world.`}
                </p>

                {/* Responsive Buttons */}
                <div className="flex flex-col items-center justify-center space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3 md:space-x-4">
                    <button className="group relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-2 text-xs font-semibold text-white shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 sm:px-8 sm:py-3 sm:text-sm md:px-10 md:py-4 md:text-base lg:px-12 lg:py-5 lg:text-lg">
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-10 rounded-full"></span>
                        <span className="relative">Get Started</span>
                    </button>
                    <button className="group relative inline-flex items-center justify-center rounded-full border border-blue-600 px-6 py-2 text-xs font-semibold text-blue-600 shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 sm:px-8 sm:py-3 sm:text-sm md:px-10 md:py-4 md:text-base lg:px-12 lg:py-5 lg:text-lg">
                        <span className="absolute inset-0 bg-blue-50 opacity-0 transition-opacity duration-300 group-hover:opacity-20 rounded-full"></span>
                        <span className="relative">Watch More</span>
                    </button>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 h-48 w-48 -translate-y-1/2 translate-x-1/2 transform rounded-full bg-blue-200 opacity-40 blur-lg md:h-72 md:w-72 lg:h-96 lg:w-96 lg:blur-3xl" />
            <div className="absolute right-0 top-0 h-40 w-40 -translate-x-1/2 translate-y-1/2 transform rounded-full bg-blue-300 opacity-30 blur-lg md:h-64 md:w-64 lg:h-80 lg:w-80 lg:blur-3xl" />
        </section>
    );
}

export default Hero;
