import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../components/Logo';
import posts from '../../data/post';

const BlogPage = () => {
  const [posts, setPosts] = useState(posts);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <header>
        <Logo />
      </header>
      <main>
        <h1>Blog</h1>
        <form>
          <label htmlFor="search">Search:</label>
          <input type="text" id="search" value={searchQuery} onChange={handleSearch} />
        </form>
        <ul>
          {filteredPosts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <p>{post.createdAt.toLocaleString()}</p>
              <Link to={`/posts/${post.id}`}>Read more</Link>
            </li>
          ))}
        </ul>
        <Link to="/posts/new">Add post</Link>
      </main>
      <footer>
        <p>© {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default BlogPage;