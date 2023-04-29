import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import PostPage from './pages/PostPage';
import PostFormPage from './pages/PostFormPage';
import logo from './logo.svg';

function App() {
  const contactInfo = {
    email: 'contact@example.com',
    phone: '123-456-7890',
  };
  const logoAlt = 'My Blog';
  const logoSrc = logo;

  const savedPosts =
    JSON.parse(localStorage.getItem('blogPosts')) || [];

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage logoSrc={logoSrc} logoAlt={logoAlt} />
        </Route>
        <Route path="/about">
          <AboutPage logoSrc={logoSrc} logoAlt={logoAlt} />
        </Route>
        <Route exact path="/blog">
          <BlogPage
            logoSrc={logoSrc}
            logoAlt={logoAlt}
            contactInfo={contactInfo}
            posts={savedPosts}
          />
        </Route>
        <Route path="/blog/:postId">
          <PostPage
            logoSrc={logoSrc}
            logoAlt={logoAlt}
            contactInfo={contactInfo}
          />
        </Route>
        <Route path="/post/create">
          <PostFormPage
            logoSrc={logoSrc}
            logoAlt={logoAlt}
            contactInfo={contactInfo}
          />
        </Route>
        <Route path="/post/:postId/edit">
          <PostFormPage
            logoSrc={logoSrc}
            logoAlt={logoAlt}
            contactInfo={contactInfo}
          />
        </Route>
        <Route path="/contact">
          <ContactPage
            logoSrc={logoSrc}
            logoAlt={logoAlt}
            contactInfo={contactInfo}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;