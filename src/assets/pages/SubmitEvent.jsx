import React, { useState } from "react";
import { Form, redirect } from "react-router-dom";
import InputField from "../partials/InputField";
import customFetch from "../utils/customFetch";
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  
  try {
    await customFetch.post('/host-a-event', data);
    toast.success('Event Submitted Successfully');
    return null;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const SubmitEvent = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    startDateTime: "",
    endDateTime: "",
    eventimage: null,
    categories: "",
    tags: "",
    venue: "",
    organizerdetails: "",
    website: "",
    cost: "",
    badges: [], // New field for badges
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: files[0],
    }));
  };

  const handleBadgeChange = (e, index) => {
    const { name, value, files } = e.target;
    setFormData((prevState) => {
      const updatedBadges = [...prevState.badges];
      updatedBadges[index] = {
        ...updatedBadges[index],
        [name]: name === "badgeImage" ? files[0] : value,
      };
      return { ...prevState, badges: updatedBadges };
    });
  };

  const addBadge = () => {
    setFormData((prevState) => ({
      ...prevState,
      badges: [
        ...prevState.badges,
        { badgeTitle: "", badgeDescription: "", badgeImage: null },
      ],
    }));
  };

  const removeBadge = (index) => {
    setFormData((prevState) => {
      const updatedBadges = prevState.badges.filter((_, i) => i !== index);
      return { ...prevState, badges: updatedBadges };
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-2xl">
        <h2 className="text-center text-2xl font-bold text-gray-800">
          Submit an Event
        </h2>
        <Form method="post" className="mt-4">
          <InputField
            label="Event Title (required)"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter event title"
          />
          <InputField
            label="Event Description (required)"
            name="description"
            type="textarea"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter event description"
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <InputField
              label="Event Start Date"
              name="startDateTime"
              type="date"
              value={formData.startDateTime}
              onChange={handleChange}
            />
            <InputField
              label="Event End Date"
              name="endDateTime"
              type="date"
              value={formData.endDateTime}
              onChange={handleChange}
            />
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Event Image
            </label>
            <input
              type="file"
              name="eventimage"
              accept=".jpg,.png,.gif"
              onChange={handleFileChange}
              className="mt-2 block w-full text-sm text-gray-500 border-gray-300 rounded-md"
            />
          </div>
          <InputField
            label="Event Categories"
            name="categories"
            type="text"
            value={formData.categories}
            onChange={handleChange}
            placeholder="Enter categories"
          />
          <InputField
            label="Event Tags"
            name="tags"
            type="text"
            value={formData.tags}
            onChange={handleChange}
            placeholder="Enter tags"
          />
          <InputField
            label="Venue"
            name="venue"
            type="text"
            value={formData.venue}
            onChange={handleChange}
            placeholder="Enter venue details"
          />
          <InputField
            label="Organizer Details"
            name="organizerdetails"
            type="text"
            value={formData.organizerdetails}
            onChange={handleChange}
            placeholder="Enter organizer details"
          />
          <InputField
            label="Event Website"
            name="website"
            type="url"
            value={formData.website}
            onChange={handleChange}
            placeholder="Enter external link"
          />
          <InputField
            label="Event Cost"
            name="cost"
            type="number"
            value={formData.cost}
            onChange={handleChange}
            placeholder="Enter cost (leave blank for free events)"
          />
          
          {/* Badge Section */}
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-800">Add Badges</h3>
            {formData.badges.map((badge, index) => (
              <div key={index} className="mt-4 border p-4 rounded-md">
                <InputField
                  label="Badge Title"
                  name="badgeTitle"
                  type="text"
                  value={badge.badgeTitle}
                  onChange={(e) => handleBadgeChange(e, index)}
                  placeholder="Enter badge title"
                />
                <InputField
                  label="Badge Description"
                  name="badgeDescription"
                  type="text"
                  value={badge.badgeDescription}
                  onChange={(e) => handleBadgeChange(e, index)}
                  placeholder="Enter badge description"
                />
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Badge Image
                  </label>
                  <input
                    type="file"
                    name="badgeimage"
                    accept=".jpg,.png,.gif"
                    onChange={(e) => handleBadgeChange(e, index)}
                    className="mt-2 block w-full text-sm text-gray-500 border-gray-300 rounded-md"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => removeBadge(index)}
                  className="mt-4 text-red-500 hover:text-red-700 text-sm"
                >
                  Remove Badge
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addBadge}
              className="mt-4 w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md"
            >
              Add Badge
            </button>
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md"
          >
            Submit Event
          </button>
        </Form>
      </div>
    </div>
  );
};

export default SubmitEvent;
