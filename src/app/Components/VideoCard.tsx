

function VideoCard(props:{ thumbImage:string, profileImage:string, title:string, channelName:string, timeStamp:string, viewCount:string}){
     return <div className=" rounded-lg">
        <img src={props.thumbImage} className="rounded-lg  aspect-video"/>
       <div className="flex mt-3 pr-6">
       <img className="rounded-full h-[36px] w-[36px] border-2 flex-shrink-0 object-cover" src={props.profileImage} alt=""/>
         <div className=" border-lime-500 pl-3">
            <h5 className="text-white mb-[3px] font-medium">{props.title}</h5>
            <p className="text-gray-400">{props.channelName}</p>                          
            <div className=" text-gray-400 text-sm">
               {props.viewCount} | {props.timeStamp}
            </div>
         </div>
       </div>
     </div>
}

export default VideoCard; 