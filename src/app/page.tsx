import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import TestimonialSection from "@/components/TestimonialSection";

export default function Home() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Enhanced Logistics Website</title>

      <Navbar />

      {/* Hero Section */}
      <Hero />

      <Services />

      <TestimonialSection />

      {/* CTA Section */}
      <section className="container mx-auto rounded-lg bg-gradient-to-b from-gray-50 to-white px-6 py-20 text-center shadow-inner">
        <h3 className="mb-12 text-4xl font-extrabold tracking-wide text-gray-900">
          Why Choose Us for Your Service
        </h3>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: Online Tracking */}
          <div className="transform rounded-lg bg-gradient-to-r from-blue-50 to-white p-8 shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="mx-auto mb-4 flex h-16 w-16 animate-pulse items-center justify-center rounded-full bg-blue-100">
              <svg
                className="h-8 w-8 transform text-blue-500 transition-transform duration-500 hover:rotate-6"
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
            <h4 className="mb-2 text-xl font-semibold text-gray-900">
              Online Tracking
            </h4>
            <p className="mb-4 text-gray-600">
              Track your goods in real-time with our advanced tracking systems.
            </p>
            <a
              href="#"
              className="inline-block rounded-full border border-blue-300 px-4 py-2 font-semibold text-blue-600 transition duration-300 hover:bg-blue-600 hover:text-white"
            >
              Learn More
            </a>
          </div>
          {/* Card 2: Global Reach */}
          <div className="transform rounded-lg bg-gradient-to-r from-green-50 to-white p-8 shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="mx-auto mb-4 flex h-16 w-16 animate-pulse items-center justify-center rounded-full bg-green-100">
              <svg
                className="h-8 w-8 transform text-green-500 transition-transform duration-500 hover:rotate-6"
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
            <h4 className="mb-2 text-xl font-semibold text-gray-900">
              Global Reach
            </h4>
            <p className="mb-4 text-gray-600">
              Our services span across multiple countries with on-time delivery.
            </p>
            <a
              href="#"
              className="inline-block rounded-full border border-green-300 px-4 py-2 font-semibold text-green-600 transition duration-300 hover:bg-green-600 hover:text-white"
            >
              Learn More
            </a>
          </div>
          {/* Card 3: Secure Warehousing */}
          <div className="transform rounded-lg bg-gradient-to-r from-yellow-50 to-white p-8 shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="mx-auto mb-4 flex h-16 w-16 animate-pulse items-center justify-center rounded-full bg-yellow-100">
              <svg
                className="h-8 w-8 transform text-yellow-500 transition-transform duration-500 hover:rotate-6"
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
            <h4 className="mb-2 text-xl font-semibold text-gray-900">
              Secure Warehousing
            </h4>
            <p className="mb-4 text-gray-600">
              Offering temperature-controlled and secure warehouses for all storage
              needs.
            </p>
            <a
              href="#"
              className="inline-block rounded-full border border-yellow-300 px-4 py-2 font-semibold text-yellow-600 transition duration-300 hover:bg-yellow-600 hover:text-white"
            >
              Learn More
            </a>
          </div>
          {/* Card 4: Customized Solutions */}
          <div className="transform rounded-lg bg-gradient-to-r from-red-50 to-white p-8 shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="mx-auto mb-4 flex h-16 w-16 animate-pulse items-center justify-center rounded-full bg-red-100">
              <svg
                className="h-8 w-8 transform text-red-500 transition-transform duration-500 hover:rotate-6"
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
            <h4 className="mb-2 text-xl font-semibold text-gray-900">
              Customized Solutions
            </h4>
            <p className="mb-4 text-gray-600">
              Tailored logistics solutions to meet unique business requirements.
            </p>
            <a
              href="#"
              className="inline-block rounded-full border border-red-300 px-4 py-2 font-semibold text-red-600 transition duration-300 hover:bg-red-600 hover:text-white"
            >
              Learn More
            </a>
          </div>
          {/* Card 5: Real-Time Support */}
          <div className="transform rounded-lg bg-gradient-to-r from-purple-50 to-white p-8 shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="mx-auto mb-4 flex h-16 w-16 animate-pulse items-center justify-center rounded-full bg-purple-100">
              <svg
                className="h-8 w-8 transform text-purple-500 transition-transform duration-500 hover:rotate-6"
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
            <h4 className="mb-2 text-xl font-semibold text-gray-900">
              Real-Time Support
            </h4>
            <p className="mb-4 text-gray-600">
              24/7 support to assist with all logistics needs at any time.
            </p>
            <a
              href="#"
              className="inline-block rounded-full border border-purple-300 px-4 py-2 font-semibold text-purple-600 transition duration-300 hover:bg-purple-600 hover:text-white"
            >
              Learn More
            </a>
          </div>
          {/* Card 6: Eco-Friendly Solutions */}
          <div className="transform rounded-lg bg-gradient-to-r from-teal-50 to-white p-8 shadow-lg transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="mx-auto mb-4 flex h-16 w-16 animate-pulse items-center justify-center rounded-full bg-teal-100">
              <svg
                className="h-8 w-8 transform text-teal-500 transition-transform duration-500 hover:rotate-6"
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
            <h4 className="mb-2 text-xl font-semibold text-gray-900">
              Eco-Friendly Solutions
            </h4>
            <p className="mb-4 text-gray-600">
              Sustainable logistics solutions that prioritize environmental impact.
            </p>
            <a
              href="#"
              className="inline-block rounded-full border border-teal-300 px-4 py-2 font-semibold text-teal-600 transition duration-300 hover:bg-teal-600 hover:text-white"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-white">
        <div className="container mx-auto space-y-4 text-center">
          <p className="font-semibold">© 2024 Logist. All rights reserved.</p>
          <p className="text-gray-400">Designed for an eco-friendly future.</p>
        </div>
      </footer>
    </>

  );
}
