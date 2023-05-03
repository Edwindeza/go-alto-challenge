import React, { useEffect, useState } from 'react';
import FormPost from '../organisms/FormPost';
import { getLocalStorageItem, setLocalStorageItem } from '../../services/localStorage.service';
import { useNavigate, useParams } from "react-router-dom";

const PostEditionPage = (props) => {
  const navigate = useNavigate();
  const posts = getLocalStorageItem('posts');
  const { postId } = useParams();

  const [postDetail, setPostDetail] = useState({});

  const getPost = ((id) => {
    const post = posts.find(post => post.id == id);
    if (post) {
      setPostDetail(post);
    }
  });

  const onSubmit = (editedPost) => {
    const tempPosts = posts.map(post => {
        if(post.id === editedPost.id){
            return editedPost;
        }
        return post;
    });
    setLocalStorageItem('posts', tempPosts);
    navigate("/blog");
  };

  useEffect(() => {
    getPost(postId);
  }, [postId]);

  return (
    <>
      <h2>Edit post</h2>
      <FormPost onSubmit={onSubmit} postDetail={postDetail}/>
    </>
  );
};

export default PostEditionPage;