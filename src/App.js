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

function App() {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((userCred) => {
  //     if (userCred?.providerData[0].email) {
  //       console.log(userCred);
  //     } else {
  //       navigate("/home", { replace: true });
  //     }
  //   });
    
  // }, []);

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
      element: <Login />,
    },
    {
      path: "/singup",
      element: <Login />,
    },
    {
      path: "/*",
      element:<Navigate to={<Home />} />
    }
  ]);

  return (
    <>
      <main className="main">
        <aside className="main-left-container">
          <Sidebar />
        </aside>
        <section className="main-right-container">
          <RouterProvider router={router}>
            <Outlet />
          </RouterProvider>
        </section>
      </main>
      
    </>
  );
}

export default App;
