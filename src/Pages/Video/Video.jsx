import React from 'react';
import './Video.css';
import PlayVideo from '../../Components/PlayVideo/PlayVideo.jsx';
import Recommendation from '../../Components/Recommendation/Recommendation.jsx';
import { useParams } from 'react-router-dom';

const Video = () => {

  const {videoId, categoryId} = useParams();
  return (
    <div className='play-container'>
      <PlayVideo videoId={videoId}/>
      <Recommendation categoryId={categoryId}/>
    </div>
  )
}

export default Video;