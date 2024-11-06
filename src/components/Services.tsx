import React from 'react';

const Services = () => {
    return (
        <section className="container mx-auto relative space-y-16 overflow-hidden bg-gray-50 px-4 py-20 sm:px-6 lg:py-28">
            {/* Background Pattern */}
            <div className="bg-pattern pointer-events-none absolute inset-0 opacity-10" />

            {/* Title */}
            <h2 className="mb-12 text-center text-3xl font-bold tracking-wide text-gray-800 sm:text-4xl lg:text-5xl">
                Our Services
            </h2>

            {/* Services Grid */}
            <div className="grid grid-cols-1 gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
                {/* Service 1 */}
                <div className="flex items-start space-x-4 rounded-lg bg-white p-6 shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    <img
                        src="https://via.placeholder.com/64"
                        alt="Truck Icon"
                        className="h-16 w-16 rounded-full bg-blue-100 p-3 transition-transform duration-500 hover:scale-110"
                    />
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 lg:text-xl">
                            Safe Reliable Logistics Solutions
                        </h3>
                        <p className="mt-2 text-sm text-gray-600 lg:text-base">
                            Delivering the best logistics experience worldwide with a reliable team.
                        </p>
                        <a
                            href="#"
                            className="mt-4 inline-block font-semibold text-blue-600 transition-colors duration-200 hover:text-blue-700"
                            aria-label="Learn more about Safe Reliable Logistics Solutions"
                        >
                            Learn More →
                        </a>
                    </div>
                </div>

                {/* Service 2 */}
                <div className="flex items-start space-x-4 rounded-lg bg-white p-6 shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    <img
                        src="https://via.placeholder.com/64"
                        alt="Warehousing Icon"
                        className="h-16 w-16 rounded-full bg-green-100 p-3 transition-transform duration-500 hover:scale-110"
                    />
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 lg:text-xl">
                            Secure Warehousing
                        </h3>
                        <p className="mt-2 text-sm text-gray-600 lg:text-base">
                            Offering temperature-controlled and secure warehouses for all storage needs.
                        </p>
                        <a
                            href="#"
                            className="mt-4 inline-block font-semibold text-green-600 transition-colors duration-200 hover:text-green-700"
                            aria-label="Learn more about Secure Warehousing"
                        >
                            Learn More →
                        </a>
                    </div>
                </div>

                {/* Service 3 */}
                <div className="flex items-start space-x-4 rounded-lg bg-white p-6 shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    <img
                        src="https://via.placeholder.com/64"
                        alt="Tracking Icon"
                        className="h-16 w-16 rounded-full bg-yellow-100 p-3 transition-transform duration-500 hover:scale-110"
                    />
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 lg:text-xl">
                            Real-Time Tracking
                        </h3>
                        <p className="mt-2 text-sm text-gray-600 lg:text-base">
                            Monitor your shipments with real-time tracking and instant notifications.
                        </p>
                        <a
                            href="#"
                            className="mt-4 inline-block font-semibold text-yellow-600 transition-colors duration-200 hover:text-yellow-700"
                            aria-label="Learn more about Real-Time Tracking"
                        >
                            Learn More →
                        </a>
                    </div>
                </div>

                {/* Additional Services (4–6) follow the same format */}
                {/* Service 4 */}
                <div className="flex items-start space-x-4 rounded-lg bg-white p-6 shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    <img
                        src="https://via.placeholder.com/64"
                        alt="Custom Solutions Icon"
                        className="h-16 w-16 rounded-full bg-red-100 p-3 transition-transform duration-500 hover:scale-110"
                    />
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 lg:text-xl">
                            Customized Solutions
                        </h3>
                        <p className="mt-2 text-sm text-gray-600 lg:text-base">
                            Tailored logistics solutions to meet your unique business requirements.
                        </p>
                        <a
                            href="#"
                            className="mt-4 inline-block font-semibold text-red-600 transition-colors duration-200 hover:text-red-700"
                            aria-label="Learn more about Customized Solutions"
                        >
                            Learn More →
                        </a>
                    </div>
                </div>

                {/* Service 5 */}
                <div className="flex items-start space-x-4 rounded-lg bg-white p-6 shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    <img
                        src="https://via.placeholder.com/64"
                        alt="Global Shipping Icon"
                        className="h-16 w-16 rounded-full bg-purple-100 p-3 transition-transform duration-500 hover:scale-110"
                    />
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 lg:text-xl">
                            International Shipping
                        </h3>
                        <p className="mt-2 text-sm text-gray-600 lg:text-base">
                            Efficient and cost-effective shipping solutions for global reach.
                        </p>
                        <a
                            href="#"
                            className="mt-4 inline-block font-semibold text-purple-600 transition-colors duration-200 hover:text-purple-700"
                            aria-label="Learn more about International Shipping"
                        >
                            Learn More →
                        </a>
                    </div>
                </div>

                {/* Service 6 */}
                <div className="flex items-start space-x-4 rounded-lg bg-white p-6 shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    <img
                        src="https://via.placeholder.com/64"
                        alt="Express Delivery Icon"
                        className="h-16 w-16 rounded-full bg-teal-100 p-3 transition-transform duration-500 hover:scale-110"
                    />
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 lg:text-xl">
                            Express Delivery
                        </h3>
                        <p className="mt-2 text-sm text-gray-600 lg:text-base">
                            Fast and reliable express delivery options to meet urgent deadlines.
                        </p>
                        <a
                            href="#"
                            className="mt-4 inline-block font-semibold text-teal-600 transition-colors duration-200 hover:text-teal-700"
                            aria-label="Learn more about Express Delivery"
                        >
                            Learn More →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
