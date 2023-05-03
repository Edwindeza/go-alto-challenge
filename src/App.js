import React, {useEffect} from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomePage from './atomic-design/pages/HomePage';
import AboutPage from './atomic-design/pages/AboutPage';
import DefaultTemplate from './atomic-design/templates/DefaultTemplate';
import ContactPage from "./atomic-design/pages/ContactPage";
import BlogPage from "./atomic-design/pages/BlogPage";
import PostReadingPage from "./atomic-design/pages/PostReadingPage";
import PostCreationPage from "./atomic-design/pages/PostCreationPage";
import posts from "./data/post";
import PostEditionPage from "./atomic-design/pages/PostEditionPage";

function App() {

  // Inicializando post
  useEffect(() => {
    localStorage.setItem('go-alto-posts', JSON.stringify(posts))
  }, [])

  const router = createBrowserRouter([
    {
      path: "/",
      element: <DefaultTemplate />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/blog/",
          element: <BlogPage/>,
          queryParams: ['search'],
        },
        {
          path: "/blog/detail/:postId",
          element: <PostReadingPage/>
        },
        {
          path: "/blog/create",
          element: <PostCreationPage/>
        },
        {
          path: "/blog/edit/:postId",
          element: <PostEditionPage/>
        },
        {
          path: "/contact",
          element: <ContactPage/>,
        },
      ],
    },
  ])

  return (<RouterProvider router={router} />)
}

export default App;