import React, { useState } from 'react';

const JobProfileSection = () => {
  const [name, setName] = useState('User Name'); // Default name
  const [email, setEmail] = useState('user@example.com'); // Default email
  const [skills, setSkills] = useState(['JavaScript', 'React']); // Default skills
  const [profileImage, setProfileImage] = useState(''); // Profile image
  const [backgroundImage, setBackgroundImage] = useState(''); // Background image

  const handleEditName = () => {
    const newName = prompt("Enter new name", name);
    if (newName) {
      setName(newName);
    }
  };

  const handleEditEmail = () => {
    const newEmail = prompt("Enter new email", email);
    if (newEmail) {
      setEmail(newEmail);
    }
  };

  const handleSkillsChange = (e) => {
    const newSkills = e.target.value.split(',').map(skill => skill.trim());
    setSkills(newSkills);
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBackgroundImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBackgroundImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 flex space-x-2">
          <label className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300 transition duration-300 cursor-pointer">
            Background
            <input
              type="file"
              accept="image/*"
              onChange={handleBackgroundImageChange}
              className="hidden"
            />
          </label>
          <label className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300 transition duration-300 cursor-pointer">
            Profile
            <input
              type="file"
              accept="image/*"
              onChange={handleProfileImageChange}
              className="hidden"
            />
          </label>
        </div>
      </div>

      <div className="flex items-center p-6">
        <img
          src={profileImage || 'https://via.placeholder.com/150'}
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-gray-300 shadow-lg"
        />
        <div className="ml-4">
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-gray-600">{email}</p>
          <button
            onClick={handleEditName}
            className="mt-2 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition duration-300"
          >
            Edit Name
          </button>
          <button
            onClick={handleEditEmail}
            className="mt-2 ml-2 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 transition duration-300"
          >
            Edit Email
          </button>
        </div>
      </div>

      <div className="p-6 border-t border-gray-200">
        <h3 className="text-lg font-semibold">Skills</h3>
        <input
          type="text"
          value={skills.join(', ')}
          onChange={handleSkillsChange}
          className="border rounded px-2 py-1 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 mt-2"
          placeholder="Enter skills separated by commas"
        />
      </div>
    </div>
  );
};

export default JobProfileSection;
