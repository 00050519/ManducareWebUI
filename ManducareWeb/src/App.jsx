// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import AdminDashboard from './DesigningBETA/AdminDashboard';


const App = () => {
  return (
      <AdminDashboard/>
  );
};

export default App;
