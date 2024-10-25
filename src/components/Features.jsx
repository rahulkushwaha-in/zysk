
const features = [
    {
        icon: '🔒',
        title: 'Share team inboxes',
        description: 'Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.',
    },
    {
        icon: '⚡',
        title: 'Deliver instant answers',
        description: 'An all-in-one customer service platform that helps you balance everything your customers need to be happy.',
    },
    {
        icon: '📊',
        title: 'Manage your team with reports',
        description: "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
    },
    {
        icon: '💬',
        title: 'Connect with customers',
        description: 'Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.',
    },
    {
        icon: '🔗',
        title: 'Connect the tools you already use',
        description: 'Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.',
    },
    {
        icon: '👥',
        title: 'Our people make the difference',
        description: 'We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.',
    },
];

const Features = () => {
    return (
        <section className="py-6">
            <div className="max-w-6xl mx-auto">
                {/* Dashed Border Container */}
                <div className="p-10">
                    {/* Features Header */}
                    <p className="text-purple-600 text-sm font-semibold text-center mb-3">Features</p>
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
                        Analytics that feels like it’s from the future
                    </h2>
                    <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
                        Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
                    </p>
                    {/* Feature Items Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {features.map((feature, index) => (
                            <div key={index} className="text-center">
                                <div className="flex justify-center mb-4">
                                    <div className="bg-gray-100 p-3 rounded-full">
                                        <span className="text-gray-500 text-2xl">{feature.icon}</span>
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600 text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
