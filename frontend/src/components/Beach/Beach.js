import './Beach.scss';
import { useState, useEffect } from 'react';
import { createApi } from 'unsplash-js';




const BeachDiv = () => {


    const [trackList, settrackList] = useState([]);
    const [t1, sett1] = useState([]);
    const [t2, sett2] = useState([]);
    
    const [photoList, setphotoList] = useState([])

    // const [url, seturl] = useState("")
    const api = createApi({
      accessKey: process.env.REACT_APP_ACCESS_KEY
      //...other fetch options
    });


    

  useEffect(() => {
    // settrackList(track)
    console.log("active")
    fetch('http://localhost:8000/api/v1/beaches')
      .then(res => res.json())
      .then(data => settrackList(data))
      .catch(err => {
        console.log(err)
      })
  }, [])

 
  useEffect(() => {
    
     api.search
      .getPhotos({ query: "beaches" })
      .then(result => {
        // setPhotosResponse(result);
        setphotoList(result.response.results);
        
      })
      .catch(() => {
        console.log("something went wrong!");
      });
  }, [])



  useEffect(() => {
      if(trackList.length > 0){
            
            let temp1 = []
            for(let i=0; i<10; i++){
                
                temp1.push(trackList[i])
            }
            sett1(temp1)

            let temp2 = []
            for(let i=10; i<20; i++){
                temp2.push(trackList[i])
            }
            sett2(temp2)
        }
  }, [trackList])



 

  return (
    <div className="flex gap-36">
      
      <div className="one">
        {t1.map(item => {
            let random = Math.floor(Math.random() * 10)
            return( <Beach  {...item}  url={photoList[random].urls.regular}/>)
        })}
      </div>
      <div className="two">
        {t2.map(item => {
            
            
            let random = Math.floor(Math.random() * 10)
            return( <Beach  {...item}  url={photoList[random].urls.regular}/>)
        })}
      </div>
     

    </div>
  );


  
}




const Beach = ({url,name,formatted_address}) => {

 
// getPhotoUrl();
return (
<div className="BeachTile mt-12 h-max">
    <h1>Beach</h1>
    <div className="beachimage">
        <img src={url} className="image"/>
    </div>
    <center><p className="name">{name}</p> </center>
    <p className="location">{formatted_address}</p>
   
</div>
)
}

export default BeachDiv;