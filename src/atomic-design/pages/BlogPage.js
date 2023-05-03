import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import PostList from '../organisms/PostsList';
import styled from 'styled-components';
import { getLocalStorageItem } from '../../services/localStorage.service';

// Style zone
const PostPageContainer = styled.div`
  position: relative;
  padding-top: 50px;
  padding-bottom: 30px;
`

const AddBtn = styled(Link)`
  position: absolute;
  right: 15px;
  top: 0;
  background-color: black;
  color:white;
  text-decoration: none;
  padding: 10px;
  display: block;
`

const BlogPage = () => {

  const [localPosts, setLocalPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = localPosts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const getPosts= () => {
    const posts = getLocalStorageItem('posts')
    setLocalPosts(posts)
  }

  useEffect(() => {
    getPosts();
  }, [])

  return (
    <div>
      <PostPageContainer>
        <AddBtn to={`/blog/create/`}>Add post</AddBtn>
        <PostList posts={filteredPosts}/>
      </PostPageContainer>
    </div>
  );
};

export default BlogPage;