import Navbar from "@/components/Navbar";
import TestimonialSection from "@/components/TestimonialSection";

export default function Home() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Enhanced Logistics Website</title>

      <Navbar />

      {/* Hero Section */}
      <section className="container relative mx-auto overflow-hidden rounded-lg bg-gradient-to-r from-blue-100 to-blue-50 px-6 py-32 text-center shadow-lg">
        {/* Background Illustrations */}
        <div className="bg-hero-pattern pointer-events-none absolute inset-0 opacity-10" />
        {/* Content */}
        <div className="relative z-10">
          {/* Amazon DSP Partner Badge */}
          <div className="mb-8 flex items-center justify-center">
            <img
              src="https://via.placeholder.com/150x50?text=Amazon+DSP+Partner"
              alt="Amazon DSP Partner"
              className="mx-auto h-auto w-40 transform transition duration-300 hover:scale-105"
            />
          </div>
          <h2 className="mb-6 text-6xl font-extrabold leading-tight text-gray-900">
            Full Sustainable Cargo Solution
          </h2>
          <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-gray-700">
            {`We are proud to partner with Amazon as a Delivery Service Partner (DSP),
            helping to power their logistics and deliver excellence. We continue to
            pursue the same vision in today’s complex, uncertain world, working
            every day to earn our customers' trust.`}
          </p>
          {/* Buttons */}
          <div className="flex justify-center space-x-6">
            <button className="transform rounded-full bg-blue-600 px-10 py-4 font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-blue-700">
              Get Started
            </button>
            <button className="transform rounded-full border border-blue-600 px-10 py-4 font-semibold text-blue-600 shadow-lg transition duration-300 hover:scale-105 hover:bg-blue-100">
              Watch More
            </button>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 h-96 w-96 -translate-y-1/2 translate-x-1/2 transform rounded-full bg-blue-200 opacity-40 blur-xl" />
        <div className="absolute right-0 top-0 h-80 w-80 -translate-x-1/2 translate-y-1/2 transform rounded-full bg-blue-300 opacity-30 blur-xl" />
      </section>

      {/* Services Section */}
      <section className="container relative mx-auto space-y-16 overflow-hidden bg-gray-50 px-6 py-20">
        {/* Background Pattern */}
        <div className="bg-pattern pointer-events-none absolute inset-0 opacity-10" />
        <h2 className="mb-12 text-center text-4xl font-bold tracking-wide text-gray-800">
          Our Services
        </h2>
        <div className="grid grid-cols-1 gap-12 text-left md:grid-cols-2 lg:grid-cols-3">
          {/* Service 1 */}
          <div className="flex transform items-start space-x-4 rounded-lg bg-white p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <img
              src="https://via.placeholder.com/64"
              alt="Truck Icon"
              className="animate-bounce-slow h-16 w-16 rounded-full bg-blue-100 p-3"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Safe Reliable Logistics Solutions
              </h3>
              <p className="mt-2 text-gray-600">
                Delivering the best logistics experience worldwide with a reliable
                team.
              </p>
              <a
                href="#"
                className="mt-4 inline-block font-semibold text-blue-600 transition hover:text-blue-700"
                aria-label="Learn more about Safe Reliable Logistics Solutions"
              >
                Learn More →
              </a>
            </div>
          </div>
          {/* Service 2 */}
          <div className="flex transform items-start space-x-4 rounded-lg bg-white p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <img
              src="https://via.placeholder.com/64"
              alt="Warehousing Icon"
              className="animate-bounce-slow h-16 w-16 rounded-full bg-green-100 p-3"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Secure Warehousing
              </h3>
              <p className="mt-2 text-gray-600">
                Offering temperature-controlled and secure warehouses for all
                storage needs.
              </p>
              <a
                href="#"
                className="mt-4 inline-block font-semibold text-green-600 transition hover:text-green-700"
                aria-label="Learn more about Secure Warehousing"
              >
                Learn More →
              </a>
            </div>
          </div>
          {/* Service 3 */}
          <div className="flex transform items-start space-x-4 rounded-lg bg-white p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <img
              src="https://via.placeholder.com/64"
              alt="Tracking Icon"
              className="animate-bounce-slow h-16 w-16 rounded-full bg-yellow-100 p-3"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Real-Time Tracking
              </h3>
              <p className="mt-2 text-gray-600">
                Monitor your shipments with real-time tracking and instant
                notifications.
              </p>
              <a
                href="#"
                className="mt-4 inline-block font-semibold text-yellow-600 transition hover:text-yellow-700"
                aria-label="Learn more about Real-Time Tracking"
              >
                Learn More →
              </a>
            </div>
          </div>
          {/* Service 4 */}
          <div className="flex transform items-start space-x-4 rounded-lg bg-white p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <img
              src="https://via.placeholder.com/64"
              alt="Custom Solutions Icon"
              className="animate-bounce-slow h-16 w-16 rounded-full bg-red-100 p-3"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Customized Solutions
              </h3>
              <p className="mt-2 text-gray-600">
                Tailored logistics solutions to meet your unique business
                requirements.
              </p>
              <a
                href="#"
                className="mt-4 inline-block font-semibold text-red-600 transition hover:text-red-700"
                aria-label="Learn more about Customized Solutions"
              >
                Learn More →
              </a>
            </div>
          </div>
          {/* Service 5 */}
          <div className="flex transform items-start space-x-4 rounded-lg bg-white p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <img
              src="https://via.placeholder.com/64"
              alt="Global Shipping Icon"
              className="animate-bounce-slow h-16 w-16 rounded-full bg-purple-100 p-3"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                International Shipping
              </h3>
              <p className="mt-2 text-gray-600">
                Efficient and cost-effective shipping solutions for global reach.
              </p>
              <a
                href="#"
                className="mt-4 inline-block font-semibold text-purple-600 transition hover:text-purple-700"
                aria-label="Learn more about International Shipping"
              >
                Learn More →
              </a>
            </div>
          </div>
          {/* Service 6 */}
          <div className="flex transform items-start space-x-4 rounded-lg bg-white p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
            <img
              src="https://via.placeholder.com/64"
              alt="Express Delivery Icon"
              className="animate-bounce-slow h-16 w-16 rounded-full bg-teal-100 p-3"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Express Delivery
              </h3>
              <p className="mt-2 text-gray-600">
                Fast and reliable express delivery options to meet urgent deadlines.
              </p>
              <a
                href="#"
                className="mt-4 inline-block font-semibold text-teal-600 transition hover:text-teal-700"
                aria-label="Learn more about Express Delivery"
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

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
