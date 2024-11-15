import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Volunteer Connect?",
      answer: "Volunteer Connect is a community-driven platform designed to connect volunteers with local organizations and events, making it easy to find and participate in volunteering opportunities in your area."
    },
    {
      question: "How do I find volunteer opportunities?",
      answer: "You can browse our volunteer opportunity board where organizations post events with details like skills required, location, and duration. You can filter opportunities based on your interests, location, and availability."
    },
    {
      question: "Do I need any special skills to volunteer?",
      answer: "Not at all! Whether you’re interested in environmental work, education, or community events, there’s an opportunity for everyone. You can filter opportunities by skills required or simply join the events that align with your interests."
    },
    {
      question: "How do I register for an event?",
      answer: "Once you’ve found an event that interests you, simply click on the ‘Register’ button to sign up. You’ll get notifications and reminders about your upcoming events."
    },
    {
      question: "Can I create my own volunteer events?",
      answer: "Yes! If you’re an organizer, you can create and manage your own volunteer events by signing up as an organizer. This will allow you to post opportunities and track volunteers."
    },
    {
      question: "What is the purpose of badges and recognition?",
      answer: "Badges are a way to recognize your contributions and motivate you to keep volunteering. Earn badges for completing events, helping your community, and making a real impact!"
    },
    {
      question: "Is there a mobile app for Volunteer Connect?",
      answer: "Currently, Volunteer Connect is a web-based platform, but we’re working on a mobile app to make it even easier for you to stay connected to volunteering opportunities!"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md">
              <div
                className="flex items-center justify-between p-4 cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                <span className="text-xl font-bold text-indigo-600">{activeIndex === index ? "-" : "+"}</span>
              </div>
              {activeIndex === index && (
                <div className="p-4 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
