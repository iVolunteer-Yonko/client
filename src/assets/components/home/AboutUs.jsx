import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-6">
            About Volunteer Connect
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Volunteer Connect is a platform designed to connect passionate individuals with local community
            needs. Whether you're looking to tutor a student, help organize a community event, or make a
            positive impact in your area, we provide an easy way for volunteers and organizations to work
            together.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-12">
          <div className="flex flex-col items-center text-center md:w-1/3">
            <div className="bg-indigo-600 text-white rounded-lg p-8 mb-6 shadow-lg transform transition-all hover:scale-105">
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-sm text-gray-200">
                We strive to build stronger, more connected communities by making it easy for people to
                engage in meaningful volunteer work, helping both individuals and organizations reach their
                goals for positive change.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center md:w-1/3">
            <div className="bg-green-600 text-white rounded-lg p-8 mb-6 shadow-lg transform transition-all hover:scale-105">
              <h3 className="text-xl font-semibold mb-4">What We Do</h3>
              <p className="text-sm text-gray-200">
                We provide an intuitive platform for users to discover and register for local volunteer
                opportunities, helping local organizations manage their events while empowering volunteers to
                make a meaningful impact in their communities.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center text-center md:w-1/3">
            <div className="bg-red-600 text-white rounded-lg p-8 mb-6 shadow-lg transform transition-all hover:scale-105">
              <h3 className="text-xl font-semibold mb-4">Get Involved</h3>
              <p className="text-sm text-gray-200">
                Whether you're a volunteer looking to make a difference or an organizer in need of helping
                hands, Volunteer Connect makes it simple to connect with others and take action in your local
                community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
