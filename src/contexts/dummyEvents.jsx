// Dummy Data for Events
const dummyEvents = [
    {
      id:1,
      name: "Community Clean-Up",
      host: "Green Nepal",
      description:
        "Join us for a day of community service and help make a difference. Together, we can create a cleaner and greener environment.",
      startdate: "02/03/2024",
      enddate: "02/03/2024",
      eventimage: "/images/iVolunteer.jpg", // Image path
      categories: "Environment",
      tags: "cleaning, community, environment",
      location: "Kantipur Engineering College, Dhapakhel",
      website: "https://goo.gl/maps/xyz123", // Replace with actual map link
      cost: "Free",
      facilities: { merch: "Yes", food: "No", paid: "No" },
      badges: [
        "/images/ranish-profile.jpeg",
        "/images/roshan-profile.jpeg",
        "/images/sujal-profile.jpeg",
      ],
    },
    {
      id: 2, // Unique ID (use Date.now() + 1 for different IDs)
      name: "Tech Talk on AI",
      host: "Tech Innovations",
      description:
        "An insightful tech talk on the latest developments in Artificial Intelligence.",
      startdate: "05/10/2024",
      enddate: "05/10/2024",
      eventimage: "/images/iVolunteer.jpg", // Image path
      categories: "Technology",
      tags: "AI, tech, innovations",
      location: "Tech Hub, Kathmandu",
      website: "https://goo.gl/maps/abc123", // Replace with actual map link
      cost: "Paid",
      facilities: { merch: "No", food: "Yes", paid: "Yes" },
      badges: [
        "/images/rjGen.jpeg",
        "/images/rujan-profile.jpeg",
        "/images/sujal-profile.jpeg",
      ],
    },
    {
      id: 3, // Another unique ID
      name: "Yoga for Beginners",
      host: "Yoga Academy",
      description:
        "Join us for a relaxing yoga session for all skill levels. Bring your mats and positive energy.",
      startdate: "08/25/2024",
      enddate: "08/25/2024",
      eventimage: "/images/Logo.jpeg", // Image path
      categories: "Wellness",
      tags: "yoga, health, wellness",
      location: "Yoga Center, Lalitpur",
      website: "https://goo.gl/maps/abc456", // Replace with actual map link
      cost: "Free",
      facilities: { merch: "No", food: "Yes", paid: "No" },
      badges: [
        "/images/roshan-profile.jpeg",
        "/images/ranish-profile.jpeg",
        "/images/sujal-profile.jpeg",
      ],
    },
  ];
  
  export default dummyEvents;
  