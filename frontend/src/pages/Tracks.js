import React, { useState, useEffect, useContext } from "react";
import {track} from '../services/tracks';
import Track from '../components/Track';
const Tracks = () => {
  
  const [trackList, settrackList] = useState([])

  useEffect(() => {
    settrackList(track)
  }, [])

 

  return (
    <div className="w-1/3 mx-48" id="container">
      
      {trackList.map(item => {
        return <Track key = {item.id} {...item}/>
      })}

    </div>
  );
};

export default Tracks;