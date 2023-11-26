import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import SignUp from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import UserDashboard from "./pages/UserDashboard.jsx";
import ProtectedRoute from "./utils/ProtectedRoute.jsx";
import { AuthProvider } from "./utils/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import NutritionistDashboard from "./pages/NutritionistDashboard.jsx";
import ProtectedRouteNutr from "./utils/ProtectedRouteNutr.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        path: "/user-dashboard",
        element: <UserDashboard />,
      }
    ],
  },
  {
    path: "/",
    element: <ProtectedRouteNutr />,
    children: [
      {
        path: "/nutritionist-dashboard",
        element: <NutritionistDashboard />,
      }
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
