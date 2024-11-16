import React, { useState } from 'react';
import InputField from '../partials/InputField';
import { toast } from 'react-toastify';
import { useEventContext } from '../../contexts/EventContext';

const SubmitEvent = () => {
  const { eventsList, addEvent, deleteEvent } = useEventContext();

  const [formData, setFormData] = useState({
    id: Date.now(),
    name: '',
    host: '',
    description: '',
    startdate: '',
    enddate: '',
    eventimage: null,
    categories: '',
    tags: '',
    location: '',
    website: '',
    cost: '',
    facilities: { merch: null, food: null, paid: null },
    badges: [],
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.description) {
      toast.error('Title and description are required!');
      return;
    }

    const newEvent = {
      id: Date.now(),
      ...formData,
      eventimage: imagePreview,
      badges: formData.badges.map((badge) => ({
        ...badge,
        badgeImage: badge.badgePreview || null,
      })),
      submittedAt: new Date().toISOString(),
    };

    addEvent(newEvent);

    setFormData({
      id: '',
    title: '',
    description: '',
    startdate: '',
    enddate: '',
    eventimage: null,
    categories: '',
    tags: '',
    location: '',
    website: '',
    cost: '',
    facilities: { merch: null, food: null, paid: null },
    badges: [],
    });

    setImagePreview(null);
    toast.success('Event added successfully!');
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);

      setFormData((prev) => ({
        ...prev,
        eventimage: file,
      }));
    }
  };

  const handleBadgeChange = (e, index) => {
    const { name, value, files } = e.target;

    if (files) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => {
          const updatedBadges = [...prev.badges];
          updatedBadges[index] = {
            ...updatedBadges[index],
            [name]: file,
            badgePreview: reader.result,
          };
          return { ...prev, badges: updatedBadges };
        });
      };
      reader.readAsDataURL(file);
    } else {
      setFormData((prev) => {
        const updatedBadges = [...prev.badges];
        updatedBadges[index] = {
          ...updatedBadges[index],
          [name]: value,
        };
        return { ...prev, badges: updatedBadges };
      });
    }
  };

  const addBadge = () => {
    setFormData((prev) => ({
      ...prev,
      badges: [
        ...prev.badges,
        { badgeTitle: '', badgeDescription: '', badgeImage: null, badgePreview: null },
      ],
    }));
  };

  const removeBadge = (index) => {
    setFormData((prev) => ({
      ...prev,
      badges: prev.badges.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      {/* Event Form */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-xl font-bold text-center mb-6">Submit an Event</h2>
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
        <InputField
          label="Start Date"
          name="startdate"
          type="date-local"
          value={formData.startdate}
          onChange={handleChange}
          placeholder="MM/DD/YYYY"
        />
        <InputField
          label="End Date"
          name="enddate"
          type="date-local"
          value={formData.enddate}
          onChange={handleChange}
          placeholder="MM/DD/YYYY"
        />
        <div>
          <label className="block text-sm font-medium text-gray-700">Event Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mt-1 block w-full text-sm text-gray-500"
          />
          {imagePreview && (
            <img src={imagePreview} alt="Event Preview" className="mt-4 w-full h-32 object-cover rounded-md" />
          )}
        </div>
        <div className="my-4">
          <label>
            <input
              type="checkbox"
              name="merch"
              checked={formData.facilities.merch}
              onChange={handleChange}
            />
            Merchandise Available
          </label>
        </div>

        <div className="my-4">
          <label>
            <input
              type="checkbox"
              name="food"
              checked={formData.facilities.food}
              onChange={handleChange}
            />
            Food Available
          </label>
        </div>

        <div className="my-4">
          <label>
            <input
              type="checkbox"
              name="paid"
              checked={formData.facilities.paid}
              onChange={handleChange}
            />
            Paid Entry
          </label>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-bold mb-2">Badges</h3>
          <button
            type="button"
            onClick={addBadge}
            className="mb-4 bg-green-500 text-white px-4 py-2 rounded-md"
          >
            Add Badge
          </button>
          {formData.badges.map((badge, index) => (
            <div key={index} className="p-4 border rounded-md mb-4">
              <InputField
                label={`Badge #${index + 1} Title`}
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
              <div>
                <label className="block text-sm font-medium text-gray-700">Badge Image</label>
                <input
                  type="file"
                  name="badgeImage"
                  accept="image/*"
                  onChange={(e) => handleBadgeChange(e, index)}
                  className="mt-1 block w-full text-sm text-gray-500"
                />
                {badge.badgePreview && (
                  <img src={badge.badgePreview} alt="Badge Preview" className="mt-4 w-full h-24 object-cover rounded-md" />
                )}
              </div>
              <button
                type="button"
                onClick={() => removeBadge(index)}
                className="mt-4 text-red-500"
              >
                Remove Badge
              </button>
            </div>
          ))}
        </div>

        <button type="submit" className="w-full bg-indigo-500 text-white py-2 mt-6 rounded-md">
          Submit Event
        </button>
      </form>

      {/* Events List */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Submitted Events ({eventsList.length})</h2>
        {eventsList.map((event) => (
          <div key={event.id} className="p-4 border rounded-md mb-4">
            <h3 className="text-lg font-bold">{event.title}</h3>
            <p>{event.description}</p>
            <button
              onClick={() => deleteEvent(event.id)}
              className="mt-4 text-red-500"
            >
              Delete Event
            </button>
          </div>
        ))}
        {eventsList.length === 0 && <p>No events submitted yet.</p>}
      </div>
    </div>
  );
};

export default SubmitEvent;
