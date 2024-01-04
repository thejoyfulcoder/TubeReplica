import React from 'react'
import VideoCard from './VideoCard';

type Videotype= {
    thumbImage:string,
    profileImage:string,
    title:string,
    channelName:string,
    viewCount:string,
    timeStamp:string
}

function VideoGrid(props:{VIDEOS:Videotype[]}) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] overflow-auto gap-4 p-4">
        { props.VIDEOS.map((video)=>{ //learn how map works
      return <VideoCard channelName={video.channelName} profileImage={video.profileImage}
        thumbImage={video.thumbImage} title={video.title} timeStamp={video.timeStamp} viewCount={video.viewCount} />
   }) }
    </div>     
  )
}

export default VideoGrid