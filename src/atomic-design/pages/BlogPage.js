import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

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
  const [searchParams] = useSearchParams();
  const [localPosts, setLocalPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([])


  const getPosts= () => {
    const posts = getLocalStorageItem('posts')
    setLocalPosts(posts)
  }

  const filterPosts = (value) => {
    let tempPosts = [...localPosts];
    if(value && value != ''){
      tempPosts = localPosts.filter((post) =>
        post.title.toLowerCase().includes(value.toLowerCase())
      );
    }
    setFilteredPosts(tempPosts)
  }

  useEffect(() => {
    const searchValue = searchParams.get('search');
    filterPosts(searchValue)
  }, [localPosts, searchParams])

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