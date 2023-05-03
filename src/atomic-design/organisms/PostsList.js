import React from 'react';
import PostCard from '../molecules/PostCard';
import styled from 'styled-components';

const PostLists = styled.div`
  display:flex;
  flex-wrap: wrap;
  padding-left: 0;
`

function PostList(props) {
  return (
    <PostLists>
      {props.posts.map((post) => (
        <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          author={post.author}
          content={post.content}
          createdAt={post.createdAt}
          onClick={() => props.onPostClick(post.id)}
        />
      ))}
    </PostLists>
  );
}

export default PostList;