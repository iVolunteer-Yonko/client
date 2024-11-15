import React, { useState } from "react";

const VolunteerReview = () => {
  const [formData, setFormData] = useState({
    volunteerName: "",
    rating: "",
    reviewMessage: "",
  });

  // Dummy data for volunteers
  const volunteers = [
    {
      name: "Roshan Pandey",
      image: "/images/iVolunteer.jpg", // Replace with actual image URL
    },
    {
      name: "Ranish Ghimire",
      image: "/images/iVolunteer.jpg", // Replace with actual image URL
    },
    {
      name: "Rujan Bastola",
      image: "/images/iVolunteer.jpg", // Replace with actual image URL
    },
    {
      name: "Sujal Sangraula",
      image: "/images/iVolunteer.jpg", // Replace with actual image URL
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Review Submitted:", formData);
    alert("Review added successfully!");
    setFormData({ volunteerName: "", rating: "", reviewMessage: "" }); // Reset form
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-10">
      <div className="max-w-3xl w-full bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Add a Review for a Volunteer
        </h1>
        <form onSubmit={handleSubmit}>
          {/* Select Volunteer */}
          <div className="mb-4">
            <label
              htmlFor="volunteerName"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Select Volunteer
            </label>
            <select
              id="volunteerName"
              name="volunteerName"
              value={formData.volunteerName}
              onChange={handleChange}
              className="w-full p-2 bg-gray-200 text-black rounded-md"
              required
            >
              <option value="" disabled>
                Select a volunteer
              </option>
              {volunteers.map((volunteer, index) => (
                <option key={index} value={volunteer.name}>
                  {volunteer.name}
                </option>
              ))}
            </select>
          </div>

          {/* Volunteer Image Display */}
          {formData.volunteerName && (
            <div className="flex items-center space-x-4 mb-6">
              <img
                src={
                  volunteers.find((v) => v.name === formData.volunteerName)?.image
                }
                alt={formData.volunteerName}
                className="w-16 h-16 rounded-full shadow-lg"
              />
              <p className="text-lg font-medium text-gray-700">
                {formData.volunteerName}
              </p>
            </div>
          )}

          {/* Rating Field */}
          <div className="mb-4">
            <label
              htmlFor="rating"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Rating (1 to 5)
            </label>
            <input
              type="number"
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              placeholder="Enter rating (1-5)"
              className="w-full p-2 bg-gray-200 text-black rounded-md"
              min="1"
              max="5"
              required
            />
          </div>

          {/* Review Message Field */}
          <div className="mb-4">
            <label
              htmlFor="reviewMessage"
              className="block mb-1 text-sm font-medium text-gray-700"
            >
              Review
            </label>
            <textarea
              id="reviewMessage"
              name="reviewMessage"
              value={formData.reviewMessage}
              onChange={handleChange}
              placeholder="Write your review here..."
              className="w-full p-2 bg-gray-200 text-black rounded-md"
              rows="4"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg text-lg transition duration-300"
          >
            Submit Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default VolunteerReview;
