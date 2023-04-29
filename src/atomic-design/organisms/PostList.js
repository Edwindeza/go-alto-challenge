import React from 'react';
import PostCard from '../molecules/PostCard';

function PostList(props) {
  return (
    <div className="post-list">
      {props.posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          author={post.author}
          date={post.date}
          excerpt={post.excerpt}
          onClick={() => props.onPostClick(post.id)}
        />
      ))}
    </div>
  );
}

export default PostList;