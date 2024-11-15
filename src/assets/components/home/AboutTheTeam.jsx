import React from "react";

const AboutTheTeam = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-8">
          Meet the Yonko Team
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-12">
          We are a passionate group of individuals working together to bring positive change through the
          Volunteer Connect platform.
        </p>

        <div className="flex flex-wrap justify-center gap-12">
          {/* Team Member 1: Roshan Pandey */}
          <div className="w-64 text-center bg-white rounded-lg shadow-xl p-6">
            <img
              src="path/to/roshan-photo.jpg" // Replace with actual image path
              alt="Roshan Pandey"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800">Roshan Pandey</h3>
            <p className="text-gray-600 mb-4">Team Lead</p>
          </div>

          {/* Team Member 2: Ranish Ghimire */}
          <div className="w-64 text-center bg-white rounded-lg shadow-xl p-6">
            <img
              src="path/to/ranish-photo.jpg" // Replace with actual image path
              alt="Ranish Ghimire"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800">Ranish Ghimire</h3>
            <p className="text-gray-600 mb-4">Lead Developer</p>
          </div>

          {/* Team Member 3: Rujan Bastola */}
          <div className="w-64 text-center bg-white rounded-lg shadow-xl p-6">
            <img
              src="path/to/rujan-photo.jpg" // Replace with actual image path
              alt="Rujan Bastola"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800">Rujan Bastola</h3>
            <p className="text-gray-600 mb-4">Lead System Designer</p>
          </div>

          {/* Team Member 4: Sujal Sangraula */}
          <div className="w-64 text-center bg-white rounded-lg shadow-xl p-6">
            <img
              src="path/to/sujal-photo.jpg" // Replace with actual image path
              alt="Sujal Sangraula"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800">Sujal Sangraula</h3>
            <p className="text-gray-600 mb-4">Lead UI/UX Engineer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTheTeam;
