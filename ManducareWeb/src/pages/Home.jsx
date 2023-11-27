import React from "react";
import NavBar from "../components/landing/NavBar";

const Home = () => {
  return (
    <div className="bg-green-100 h-screen flex flex-col">
      <NavBar />
      <div className="text-center h-4/5 flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Manducare</h1>
        <p className="text-lg text-gray-700">
          Your personalized diet tracker to help you achieve your health goals.
        </p>
      </div>
    </div>
  );
};

export default Home;