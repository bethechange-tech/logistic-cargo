"use client";
import React, { useState, useEffect } from "react";

const testimonials = [
    {
        text: `"BruceWayne Group's logistics solutions have transformed our supply chain. Their commitment to sustainability and efficiency is truly outstanding."`,
        name: "Jane Doe",
        title: "CEO of XYZ Corp",
    },
    {
        text: `"Reliable, fast, and trustworthy. BruceWayne Group has been our logistics partner for over two years, and they’ve never let us down."`,
        name: "John Smith",
        title: "Operations Manager at ABC Ltd",
    },
    {
        text: `"The level of service provided by BruceWayne Group is exceptional. Their team is professional and always meets our delivery deadlines."`,
        name: "Sarah Lee",
        title: "Logistics Director at DEF Co",
    },
];

const TestimonialSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to switch testimonials manually
    const switchTestimonial = (index: React.SetStateAction<number>) => {
        setCurrentIndex(index);
    };

    // Auto-cycle testimonials every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 py-12 sm:py-16 md:py-20">
            <div className="container mx-auto text-center px-4">
                <h2 className="mb-6 text-2xl font-bold tracking-wide text-blue-700 sm:text-3xl lg:text-4xl">
                    What Our Clients Say
                </h2>

                {/* Clients Counter */}
                <div className="mb-6 flex items-center justify-center">
                    <p className="animate-pulse text-5xl font-extrabold text-blue-700 sm:text-6xl md:text-8xl">
                        58
                    </p>
                    <span className="ml-2 text-lg font-semibold text-blue-700 sm:ml-3 sm:text-xl md:text-2xl">
                        Clients Worldwide
                    </span>
                </div>

                <p className="mx-auto mb-10 max-w-md text-sm text-gray-700 sm:max-w-lg sm:text-base md:max-w-2xl md:text-lg">
                    Our commitment to quality logistics and delivery has earned us trust among leading brands.
                </p>

                {/* Testimonial Display */}
                <div className="relative mx-auto max-w-md p-6 bg-white rounded-lg shadow-lg transition-all duration-500 sm:max-w-lg md:max-w-2xl md:p-8">
                    <div className="mb-3 flex justify-center">
                        <svg
                            className="h-6 w-6 text-blue-500 sm:h-8 sm:w-8"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                    </div>
                    <p className="mb-4 italic text-gray-600 text-sm sm:text-base md:text-lg">
                        {testimonials[currentIndex].text}
                    </p>
                    <p className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base">
                        – {testimonials[currentIndex].name}, {testimonials[currentIndex].title}
                    </p>
                </div>

                {/* Carousel Controls */}
                <div className="mt-6 flex justify-center space-x-2 md:space-x-3">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => switchTestimonial(index)}
                            className={`h-3 w-3 rounded-full transition-all duration-200 ease-in-out ${index === currentIndex
                                ? "bg-blue-700 transform scale-125"
                                : "bg-blue-300 hover:bg-blue-500"
                                }`}
                            aria-label={`Switch to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
