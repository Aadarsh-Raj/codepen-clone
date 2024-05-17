import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Editor from "./Components/Editor";
import ProfilePage from "./Components/ProfilePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path:"/home",
      element:<Home />
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/editor",
      element: <Editor />,
    },
    {
      path: "/profile",
      element:<ProfilePage />,
    },
  ]);
  return (
    <>
      <main className="main">
        <RouterProvider router={router}>
          <section className="main-right-container">
            <Outlet />
          </section>
        </RouterProvider>
      </main>
    </>
  );
}

export default App;
