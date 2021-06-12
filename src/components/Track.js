import React from 'react'
import ReactPlayer from 'react-player'

function Track({ url, title, artist, album_art}) {
    return (
        <div className="flex  my-6 shadow-sm">
            <div className="md:h-24 md:w-24">
                <img src={album_art} alt={title} className="bg-contain"/>
            </div>
            <div className="flex-col justify-between mx-8 w-1/3">
                <p className="text-lg font-medium">{title}</p>
                <p className="text-accent">{artist}</p>
               
            </div>
            <div className="mt-1">
                <ReactPlayer url={url} height={20} width={100}/>
            </div>
           
        </div>
    )
}

export default Track
