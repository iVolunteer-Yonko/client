import React, { useState } from "react";

const PaymentOptions = () => {
  const [duration, setDuration] = useState("monthly");

  // Plan details with prices
  const plans = [
    {
      name: "Free",
      monthly: { description: "1 event per 60 days", price: "$0" },
      sixMonths: { description: "1 event per 60 days", price: "$0" },
      yearly: { description: "1 event per 60 days", price: "$0" },
    },
    {
      name: "Basic",
      monthly: { description: "4 events per 60 days", price: "$5" },
      sixMonths: { description: "24 events per 6 months", price: "$25" },
      yearly: { description: "48 events per year", price: "$50" },
      bestSeller: true,
    },
    {
      name: "Super",
      monthly: { description: "10 events per 60 days", price: "$10" },
      sixMonths: { description: "60 events per 6 months", price: "$50" },
      yearly: { description: "120 events per year", price: "$100" },
    },
  ];

  return (
    <div className="bg-gray-50  py-10">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Choose Your Plan
        </h1>

        {/* Duration Toggle */}
        <div className="flex justify-center mb-6 space-x-4">
  <button
    className={`px-4 py-2 rounded-l-lg ${
      duration === "monthly" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
    }`}
    onClick={() => setDuration("monthly")}
  >
    Monthly
  </button>
  <button
    className={`px-4 py-2 ${
      duration === "sixMonths" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
    }`}
    onClick={() => setDuration("sixMonths")}
  >
    6 Months
  </button>
  <button
    className={`px-4 py-2 rounded-r-lg ${
      duration === "yearly" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
    }`}
    onClick={() => setDuration("yearly")}
  >
    Yearly
  </button>
</div>


        {/* Plan Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`border rounded-lg shadow-md hover:shadow-lg transition duration-300 bg-white ${
                plan.bestSeller ? "border-blue-600" : "border-gray-200"
              }`}
            >
              <div className="p-6 text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {plan.name}
                </h2>
                {plan.bestSeller && (
                  <p className="text-sm text-blue-600 font-semibold mb-2">
                    Best Seller
                  </p>
                )}
                <p className="text-gray-600 mb-4">
                  {duration === "monthly"
                    ? plan.monthly.description
                    : duration === "sixMonths"
                    ? plan.sixMonths.description
                    : plan.yearly.description}
                </p>
                <p className="text-xl font-bold text-gray-800">
                  {duration === "monthly"
                    ? plan.monthly.price
                    : duration === "sixMonths"
                    ? plan.sixMonths.price
                    : plan.yearly.price}
                </p>
              </div>
              <div className="p-6 border-t text-center">
                <button
                  className={`w-full py-2 rounded-lg font-medium text-lg transition duration-300 ${
                    plan.bestSeller
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                  }`}
                >
                  {plan.bestSeller ? "Choose Best Plan" : "Select Plan"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentOptions;
