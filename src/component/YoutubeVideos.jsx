import React, { useEffect, useState } from 'react'
import "../component/YoutubeVideos.css"

function YoutubeVideos() {

    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchVideos = async () => {
        console.log("Fetching data from API...")
        try{
            const response = await fetch('https://api.freeapi.app/api/v1/public/youtube/videos')
            if(!response.ok){
                throw new Error("Error occured while fetching the videos...")
            }
            
            const data = await response.json();
            setVideos(data.data.data)
            console.log("API Data Called-->", data)
            setLoading(false)
            
        }catch(eror){
            setError("Error occurred while fetching videos");
            console.log("Error occured..!");            
        }
    }
    
    useEffect(()=>{
        fetchVideos();
    },[])
    
    useEffect(()=>{
        console.log("YouTube videos data-->",videos);        
    },[videos])

    if(loading){
        return <div>Loading...</div>
    }
    if(error){
        return <div>{error}</div>
    }

  return (
    <div className='videos-main-container'>
        <h1 className='videos-heading'>YouTube Videos</h1>
        <div className="videos-grid">        
            {videos && videos.length > 0 ? (videos.map((video) => (
                <div className='video-container' key={video.id}>
                    <div>
                        <img className="video-thumbnail"  src={video.items.snippet.thumbnails.high.url} alt={video.items.snippet.title} />
                    </div>
                    {/* <p>{video.items.snippet.description}</p> */}
                        <h3 className="video-title">{video.items.snippet.title}</h3>                                            
                </div>
            ))) : <><p>Videos not loaded...</p></>}
        </div>
    </div>
  )
}

export default YoutubeVideos