const FreeTrial = () => {
    return (
        <section className="bg-gray-50 py-1">
            <div className="max-w-4xl mx-auto p-10 bg-gray-50">
                {/* Dashed Border Container */}
                <div className="text-center">
                    {/* Header */}
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Start your free trial</h2>
                    <p className="text-gray-600 mb-8">Join over 4,000+ startups already growing with Untitled.</p>
                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-100">
                            Learn more
                        </button>
                        <button className="px-6 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700">
                            Get started
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FreeTrial;
