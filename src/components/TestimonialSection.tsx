"use client"
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
    const switchTestimonial = (index: number) => {
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
        <section className="relative bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 py-20">
            <div className="container mx-auto text-center">
                <h2 className="mb-8 text-4xl font-bold tracking-wide text-blue-700">
                    What Our Clients Say
                </h2>

                <div className="mb-6 flex items-center justify-center">
                    <p className="animate-pulse text-8xl font-extrabold text-blue-700">
                        58
                    </p>
                    <span className="ml-3 text-2xl font-semibold text-blue-700">
                        Clients Worldwide
                    </span>
                </div>

                <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-700">
                    Our commitment to quality logistics and delivery has earned us trust among leading brands.
                </p>

                {/* Testimonial Display */}
                <div className="relative mx-auto max-w-3xl p-6 bg-white rounded-lg shadow-lg transition-all duration-500">
                    <div className="mb-4 flex justify-center">
                        <svg
                            className="h-8 w-8 text-blue-500"
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
                    <p className="mb-4 italic text-gray-600">
                        {testimonials[currentIndex].text}
                    </p>
                    <p className="font-semibold text-gray-900">
                        – {testimonials[currentIndex].name}, {testimonials[currentIndex].title}
                    </p>
                </div>

                {/* Carousel Controls */}
                <div className="mt-6 flex justify-center space-x-3">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => switchTestimonial(index)}
                            className={`h-4 w-4 rounded-full transition ${index === currentIndex
                                ? "bg-blue-700"
                                : "bg-blue-300 hover:bg-blue-500"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
