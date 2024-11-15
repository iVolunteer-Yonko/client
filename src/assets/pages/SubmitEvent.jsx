import React, { useState } from "react";
import { Form } from "react-router-dom";
import InputField from "../partials/InputField";
// import customFetch from "../../../../../utils/customFetch";
// import { toast } from 'react-toastify';

// Uncomment this section for backend integration
// export const action = async ({ request }) => {
//   const formData = await request.formData();
//   const data = Object.fromEntries(formData);
  
//   try {
//     const response = await customFetch.post('/events', data);
//     toast.success('Event Submitted Successfully');
//     return redirect('/events');
//   } catch (error) {
//     toast.error(error?.response?.data?.msg);
//     return error;
//   }
// };

const SubmitEvent = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
    timezone: "America/Toronto",
    allDay: false,
    series: false,
    image: null,
    categories: "",
    tags: "",
    venue: "",
    organizer: "",
    website: "",
    cost: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      image: e.target.files[0],
    }));
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
              name="startDate"
              type="date"
              value={formData.startDate}
              onChange={handleChange}
            />
          
            <InputField
              label="Event End Date"
              name="endDate"
              type="date"
              value={formData.endDate}
              onChange={handleChange}
            />
          </div>
                  <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Event Image
            </label>
            <input
              type="file"
              name="image"
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
            name="organizer"
            type="text"
            value={formData.organizer}
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
