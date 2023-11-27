import React from 'react';
import whatsappIcon from '../assets/whatsapp.png';
import internetIcon from '../assets/internet.png';
import logo from '../assets/logomandu.png';

const PageNutricionistas = () => {
  const userData = {
    username: 'JohnDoe',
    profilePicture: 'https://source.unsplash.com/40x40/?person',
  };

  const handleReload = () => {
    window.location.reload();
  };

  const nutricionistsData = [
    {
      name: 'Nutricionist 1',
      profilePicture: 'https://source.unsplash.com/100x100/?nutritionist',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      whatsappLink: 'https://wa.me/1234567890',
      internetLink: 'https://www.google.com',
    },
    {
      name: 'Nutricionist 2',
      profilePicture: 'https://source.unsplash.com/100x100/?nutritionist',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      whatsappLink: 'https://wa.me/1234567890',
      internetLink: 'https://www.google.com',
    },
    {
      name: 'Nutricionist 3',
      profilePicture: 'https://source.unsplash.com/100x100/?nutritionist',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      whatsappLink: 'https://wa.me/1234567890',
      internetLink: 'https://www.google.com',
    },
    // Add more nutricionists as needed
  ];

  return (
    <div className="min-h-screen">
      {/* Navbar Section */}
      <nav className="bg-pink-600 p-4 text-white flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            src={logo}  // Adjust the path based on your project structure
            alt="Logo"
            className="w-8 h-8 rounded-full mr-2 object-cover"
          />
          <img
            src={userData.profilePicture}
            alt="Profile"
            className="w-8 h-8 rounded-full mr-2 object-cover"
          />
          <span>{userData.username}</span>
          <button onClick={handleReload} className="hover:underline focus:outline-none hover:text-gray-300 transition duration-300 ease-in-out">
            Home
          </button>
          <button className="hover:underline focus:outline-none hover:text-gray-300 transition duration-300 ease-in-out">
            Nutricionistas
          </button>
          <button className="hover:underline focus:outline-none hover:text-gray-300 transition duration-300 ease-in-out">
            Forum
          </button>
        </div>
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search..."
            className="border p-2 rounded-md text-black"
          />
          <button className="bg-white text-pink-600 px-3 py-1 rounded-md hover:bg-pink-200 transition duration-300 focus:outline-none">
            Logout
          </button>
        </div>
      </nav>

      {/* Nutricionists Section */}
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">Nutricionists</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {nutricionistsData.map((nutricionist, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <img
                src={nutricionist.profilePicture}
                alt={nutricionist.name}
                className="w-full h-32 object-cover mb-2 rounded-md"
              />
              <h3 className="text-xl font-bold mb-2">{nutricionist.name}</h3>
              <p className="text-gray-600 mb-2">{nutricionist.description}</p>
              <div className="flex items-center justify-between">
                <a href={nutricionist.whatsappLink} target="_blank" rel="noopener noreferrer">
                  <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6" />
                </a>
                <a href={nutricionist.internetLink} target="_blank" rel="noopener noreferrer">
                  <img src={internetIcon} alt="Internet" className="w-6 h-6" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageNutricionistas;
