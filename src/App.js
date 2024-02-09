import React, { useEffect } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Footer from "./Components/Footer";
import {
  createBrowserRouter,
  BrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Navigate,
  Link,
  Outlet,
  useNavigate,
} from "react-router-dom";
import { auth } from "./Config/firebase.config";
import Editor from "./Components/EditorPage";
import { UserContext, UserFunction } from "./Context/UserContext";
import ProfilePage from "./Components/ProfilePage";
import Signup from "./Components/Signup";
function App() {
  const userCtx = UserFunction();
  const navigate = useNavigate();
  function PrivateRoute({ element, authenticated, fallbackPath }) {
  return authenticated ? (
    element
  ) : (
    <Navigate to={fallbackPath} replace state={{ from: fallbackPath }} />
  );
}

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/login",
      element:<Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path:"/editor",
      element:<Editor />
    },
    {
      path:"/profile",
      element:<ProfilePage />
    }
  ]);

  return (
    <>
      <UserContext>

      <main className="main">
          <Sidebar />
        <section className="main-right-container">
          <RouterProvider router={router}>
            <Outlet />
          </RouterProvider>
        </section>
      </main>
      </UserContext>
      
    </>
  );
}

export default App;
