import React from 'react';
import DefaultTemplate from '../templates/DefaultTemplate';
import HeroImage from '../atoms/HeroImage';
import PostList from '../organisms/PostList';
import posts from '../../data/posts';

function HomePage(props) {
  return (
    <DefaultTemplate
      logoSrc={props.logoSrc}
      logoAlt={props.logoAlt}
      contactInfo={null}
    >
      <PostList
        posts={posts}
        onPostClick={props.onPostClick}/>
    </DefaultTemplate>
  );
}

export default HomePage;