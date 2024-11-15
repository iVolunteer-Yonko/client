import React from "react";

const VolunteerProfile = () => {
  // Dummy Profile Data
  const profile = {
    photo: "/images/iVolunteer.jpg", // Replace with actual image URL
    name: "John Doe",
    rating: 4.8,
    eventsVolunteered: 12,
    location: "Kathmandu, Nepal",
    reviews: [
      {
        reviewer: "Event Organizer A",
        feedback: "John was punctual, hardworking, and very enthusiastic!",
        date: "02/10/2024",
      },
      {
        reviewer: "Event Organizer B",
        feedback: "Great teamwork and amazing communication skills.",
        date: "01/15/2024",
      },
    ],
    badges: [
      { image: "/images/iVolunteer.jpg", text: "Top Volunteer 2024" },
      { image: "/images/iVolunteer.jpg", text: "Community Hero" },
      { image: "/images/iVolunteer.jpg", text: "5 Events Completed" },
    ],
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Top Section: Profile Photo and Basic Info */}
        <div className="flex items-center space-x-6 mb-6">
          {/* Profile Photo */}
          <img
            src={profile.photo}
            alt={profile.name}
            className="w-32 h-32 rounded-full object-cover shadow-lg"
          />

          {/* Basic Info */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">{profile.name}</h1>
            <p className="text-gray-600 text-lg">
              <strong>Location:</strong> {profile.location}
            </p>
            <p className="text-yellow-500 text-lg flex items-center mt-2">
              <span className="text-xl font-semibold mr-2">{profile.rating}</span>
              ⭐
            </p>
            <p className="text-lg text-gray-800 font-semibold mt-4">
              <strong>Events Volunteered:</strong> {profile.eventsVolunteered}
            </p>
          </div>
        </div>

        {/* Badges Section */}
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Badges</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {profile.badges.map((badge, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow-md"
              >
                <img
                  src={badge.image}
                  alt={badge.text}
                  className="w-24 h-24 object-cover rounded-lg mb-3"
                />
                <p className="text-gray-800 font-medium text-center">{badge.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">Reviews</h2>
          <div className="space-y-4">
            {profile.reviews.map((review, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 p-4 rounded-lg shadow-sm"
              >
                <p className="text-gray-800">
                  <strong>{review.reviewer}</strong> on <em>{review.date}</em>
                </p>
                <p className="text-gray-600 mt-2">{review.feedback}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerProfile;
