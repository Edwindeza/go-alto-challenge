import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import postImage from '../../assets/post_image.webp';
import Text from '../atoms/Text';
import { getLocalStorageItem } from '../../services/localStorage.service';
import { dateFormat } from '../../utils/dateFormat';

// Style zone
const PostPageContainer = styled.div`
  position: relative;
  padding-top: 30px;
  padding-bottom: 30px;
`

const PostImage = styled.div`
  width: 100%;
  height: 420px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const TitlePost = styled.h2`
  font-size: 20px;
`

const ContentPost = styled.p`
  
`
const RightContent = styled.div`
  p{
    text-align: right;
  }
`



const PostReadingPage = (props) => {
  const posts = getLocalStorageItem('posts')
  const [postDetail, setPostDetail] = useState({})
  const { postId } = useParams();

  const getPost = (id) => {
    let post =  posts.filter((post) => (post.id == id))[0]
    if(post){
      const createdAt = dateFormat(post.createdAt)
      setPostDetail({...post, createdAt})
    }
  }

  useEffect(() => {
    getPost(postId);
  }, [postId])

  return (
    <div>
      <PostPageContainer className='container'>
        <PostImage style={{ backgroundImage: `url(${postImage})` }}></PostImage>
        <TitlePost> {postDetail.title} </TitlePost>
        <ContentPost className='content' dangerouslySetInnerHTML={{ __html: postDetail.content }}></ContentPost>
        <RightContent>
          <Text text={postDetail.author}></Text>
          <Text text={postDetail.createdAt}></Text>
        </RightContent>
      </PostPageContainer>
    </div>
  );
};

export default PostReadingPage;