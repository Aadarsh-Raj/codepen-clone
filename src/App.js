import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Editor from "./Components/Editor";
import ProfilePage from "./Components/ProfilePage";
import DialogueBox from "./Components/DialogueBox";
import { UserFunction } from "./Context/UserContext";
function App() {
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
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/editor",
      element: <Editor />,
    },
    {
      path: "/profile",
      element: <ProfilePage />,
    }

  ]);

  const userCtx = UserFunction();
  function handleCloseDialog() {
    userCtx.setDialogAppear(false);
  }
  return (
    <>
      <main className="main">
        <DialogueBox onClose={handleCloseDialog} duration={3000} />
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
