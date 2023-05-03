import React from 'react';
import FormPost from '../organisms/FormPost';
import { getLocalStorageItem, setLocalStorageItem } from '../../services/localStorage.service';
import { useNavigate } from "react-router-dom";

const PostCreationPage = (props) => {
  const navigate = useNavigate();
  const posts = getLocalStorageItem('posts')
  const onSubmit = (newPost) => {
    posts.push(newPost)
    console.log('posts: ', posts)
    setLocalStorageItem('posts', posts)
    navigate("/blog");
  }

  return (
    <>
      <h2>Create new post</h2>
      <FormPost onSubmit={onSubmit}/>
    </>
  );
};

export default PostCreationPage;