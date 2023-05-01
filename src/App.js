import * as React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomePage from './atomic-design/pages/HomePage';
import AboutPage from './atomic-design/pages/AboutPage';
import DefaultTemplate from './atomic-design/templates/DefaultTemplate';

function App() {
  const contactInfo = {
    email: 'contact@example.com',
    phone: '123-456-7890',
  };

  // const savedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DefaultTemplate
                contactInfo={contactInfo} />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
      ],
    },
  ])

  return (<RouterProvider router={router} />)
}

export default App;