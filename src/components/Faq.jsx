import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "How does billing work?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "How do I change my account email?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section>
      <div className="max-w-4xl mx-auto ">
        {/* Dashed Border Container */}
        <div className="p-10">
          {/* FAQ Header */}
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-3">
            Frequently asked questions
          </h2>
          <p className="text-gray-600 text-xl mt-6 text-center max-w-xl mx-auto mb-16">
            Everything you need to know about the product and billing.
          </p>
          {/* FAQ Items */}
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-200 pb-6 cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </h3>
                  <span className="text-gray-400 font-bold text-lg flex justify-center pb-1 items-center w-5 h-5 border border-gray-400 rounded-full cursor-pointer select-none">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </div>
                {openIndex === index && (
                  <p className="text-gray-600 mt-2">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Still have questions section */}
        <div className="bg-[#f9fafb] rounded-2xl p-10 mt-10 mx-4 text-center">
          <div className="flex justify-center mb-4">
            <img
              src="https://img.freepik.com/free-photo/close-up-young-person-barbeque_23-2149271990.jpg"
              alt="Team Member 1"
              className="w-12 h-12 rounded-full object-cover border-2 border-white-500 mt-3 -mr-4"
            />
            <img
              src="https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/50dab922-5d48-4c6b-8725-7fd0755d9334/3a3f2d35-8167-4708-9ef0-bdaa980989f9.png"
              alt="Team Member 2"
              className="w-16 h-16 rounded-full object-cover border-2 border-white-500 -mt-2 z-10"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyW2MAFrFnfa_bT1jSttLbmvfotJcqQyCCGg&s"
              alt="Team Member 3"
              className="w-12 h-12 rounded-full object-cover border-2 border-white-500 mt-3 -ml-4"
            />
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-4">
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>
          <button className="px-6 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700">
            Get in touch
          </button>
        </div>
      </div>
      <hr className="max-w-4xl mx-auto mt-12" />
    </section>
  );
};

export default FAQ;
