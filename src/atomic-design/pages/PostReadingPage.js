import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import posts from '../../data/post';

// Style zone
const PostPageContainer = styled.div`
  position: relative;
  padding-top: 30px;
  padding-bottom: 30px;
`
const PostReadingPage = (props) => {
  const [postDetail, setPostDetail] = useState({})
  const { postId } = useParams();

  const getPost = (id) => {
    console.log('getPost')
    const post =  posts.filter((post) => (post.id == id))[0]
    setPostDetail({...post})
  }
  useEffect(() => {
    getPost(postId);
  }, [])

  return (
    <div>
      <PostPageContainer>
        <p>Otro contenidop</p>
        {postDetail.title}
      </PostPageContainer>
    </div>
  );
};

export default PostReadingPage;