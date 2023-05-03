import React from 'react';
import styled from 'styled-components';
import DisplayColumns from '../templates/DisplayColumns';
import Text from '../atoms/Text'
import DefaultImage from '../atoms/DefaultImage';
import YouTubeVideo from '../atoms/YoutubeVideo';

const Article = styled.div`
`

const srcImg ="https://res.cloudinary.com/openlab-pe/image/upload/v1682922525/React.png"
const altImg ="Random Image"

function ArticleHome(props) {
  return (
    <Article>
      <DisplayColumns orderM="column" orderML="column" orderT="row" padding="10px">
        <Text padding="10px" flex="1" maxWidth="50%" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." />
        <DisplayColumns flex="1" maxWidth="50%" orderM="column" orderT="column" orderL="column">
          <DefaultImage srcImg={srcImg} altImg={altImg} maxWidth="120px"/>
          <Text padding="10px" text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."/>
        </DisplayColumns>
      </DisplayColumns>
      <DisplayColumns padding="0 0 30px 0" orderM="column" orderML="column" orderT="column">
        <YouTubeVideo videoId="https://www.youtube.com/embed/6Jfk8ic3KVk"/>
        <DisplayColumns maxWidth="50%" padding="10px">
          <DefaultImage srcImg={srcImg} altImg={altImg} maxWidth="33.3%"/>
          <DefaultImage srcImg={srcImg} altImg={altImg} maxWidth="33.3%"/>
          <DefaultImage srcImg={srcImg} altImg={altImg} maxWidth="33.3%"/>
        </DisplayColumns>
      </DisplayColumns>
    </Article>
  );
}

export default ArticleHome;