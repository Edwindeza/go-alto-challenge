import React from 'react';
import styled from 'styled-components';
import { device } from '../../data/devices';

const VideoContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;
  @media ${device.laptop} {
    padding-top: 28%;
  }
`;

const VideoFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border:0;
`;

function YouTubeVideo(props) {
  const { videoId } = props;

  return (
    <VideoContainer>
      <VideoFrame
        src={`${videoId}`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </VideoContainer>
  );
}

export default YouTubeVideo;