import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

const Track = () => {
  
   const [trackList, settrackList] = useState([ ])

  useEffect(() => {
    axios
      .get(
        `http://api.musixmatch.com/ws/1.1/track.search?q_lyrics=beach&page_size=20&page=1&apikey=${process.env.REACT_APP_MM}`
      )
      .then(res => {
        let track_list = res.data.message.body.track_list;
        settrackList(track_list)
        console.log(track_list)
      })
      .catch(err => console.log(err));
  }, []);

 

  return (
    <div>
        {trackList.map(item => {
            return <h1>{item.track.track_name}</h1>
        })}
    </div>
  );
};

export default Track;