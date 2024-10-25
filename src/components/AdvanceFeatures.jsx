import AdvanceFeature from "../assets/AdvanceFeature.png"
const AdvancedFeatures = () => {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto p-10">
        {/* Dashed Border Container */}
        <div className="p-1">
          {/* Features Header */}
          <p className="text-purple-600 text-xs font-semibold text-center mb-3 ">
            <span className=" bg-purple-400 bg-opacity-15 border border-purple-600 rounded-full px-2 py-0.5">Features</span>
          </p>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Cutting-edge features for advanced analytics
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-4">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
          {/* Central Images */}
          <div className="relative flex justify-center items-center mb-12">
            <img
              src={AdvanceFeature}
              alt="Main Dashboard"
              className=""
            />
        
          </div>
          {/* Feature Items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Feature Item 1 */}
            <div>
              <div className="flex justify-center mb-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  <span className="text-gray-500 text-2xl">🔒</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Share team inboxes
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Whether you have a team of 2 or 200, our shared team inboxes
                keep everyone on the same page and in the loop.
              </p>
              <a
                href="#"
                className="text-purple-600 text-md font-semibold hover:underline"
              >
                Learn more →
              </a>
            </div>
            {/* Feature Item 2 */}
            <div>
              <div className="flex justify-center mb-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  <span className="text-gray-500 text-2xl">⚡</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Deliver instant answers
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                An all-in-one customer service platform that helps you balance
                everything your customers need to be happy.
              </p>
              <a
                href="#"
                className="text-purple-600 text-md font-semibold hover:underline"
              >
                Learn more →
              </a>
            </div>
            {/* Feature Item 3 */}
            <div>
              <div className="flex justify-center mb-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  <span className="text-gray-500 text-2xl">📊</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Manage your team with reports
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Measure what matters with Untitleds easy-to-use reports. You can
                filter, export, and drilldown on the data in a couple clicks.
              </p>
              <a
                href="#"
                className="text-purple-600 text-md font-semibold hover:underline"
              >
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="max-w-7xl mx-auto mt-12"/>
    </section>
  );
};

export default AdvancedFeatures;
