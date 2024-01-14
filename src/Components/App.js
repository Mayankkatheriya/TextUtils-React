import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Layout from "./Layout";
import ReactError from "./ReactError";
import Home from "./Home/Home"
import AboutUs from './Aboutus/AboutUs'
import Contact from './ContactUs/Contact'
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ReactError />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: '/about',
          element: <AboutUs />
        },
        {
          path: '/contact',
          element: <Contact />
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
