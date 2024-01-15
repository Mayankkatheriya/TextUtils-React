import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import ReactError from "./ReactError";
import Home from "./Home/Home";
import AboutUs from "./Aboutus/AboutUs";
import Contact from "./ContactUs/Contact";
import ReducerContextProvider from "../Context/ReducerContext";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ReactError />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <AboutUs />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return (
    <ReducerContextProvider>
      <RouterProvider router={router} />
    </ReducerContextProvider>
  );
}

export default App;
