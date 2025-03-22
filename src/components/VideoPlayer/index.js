import ReactPlayer from 'react-player'

import {
  VideoPlayerContainer,
  VideoTitle,
  VideoStats,
  HorizontalLine,
} from './styledComponents'

import './index.css'

const videoUrl = 'https://youtu.be/bDJKs6r___g'

const VideoPlayer = () => (
  <VideoPlayerContainer>
    <ReactPlayer
      url={videoUrl}
      controls
      width="100%"
      className="video-player"
    />
    <VideoTitle>Colorful Birds in 4K</VideoTitle>
    <VideoStats>4.1M views - 2 Years ago</VideoStats>
    <HorizontalLine />
  </VideoPlayerContainer>
)

export default VideoPlayer
