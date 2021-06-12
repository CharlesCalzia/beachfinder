import './Beach.scss';
import { useState, useEffect } from 'react';



const beachData1 = [
    {
        id: 11,
        beachurl : "https://www.californiabeaches.com/wp-content/uploads/2014/09/bigstock-Baker-Beach-San-Francisco-Large-1000x644.jpg",
        beachname : "Baker Beach",
        location : 'San Fransisco',
        ratings: 5
    },
    {
        id: 12,
        beachurl : "https://www.californiabeaches.com/wp-content/uploads/2014/09/bigstock-Baker-Beach-San-Francisco-Large-1000x644.jpg",
        beachname : "Baker Beach",
        location : 'San Fransisco',
        ratings: 5
    },
   
]

const beachData2 = [
    {
        id: 13,
        beachurl : "https://www.californiabeaches.com/wp-content/uploads/2014/09/bigstock-Baker-Beach-San-Francisco-Large-1000x644.jpg",
        beachname : "Baker Beach",
        location : 'San Fransisco',
        ratings: 5
    },
    {
        id: 14,
        beachurl : "https://www.californiabeaches.com/wp-content/uploads/2014/09/bigstock-Baker-Beach-San-Francisco-Large-1000x644.jpg",
        beachname : "Baker Beach",
        location : 'San Fransisco',
        ratings: 5
    }
]


const BeachDiv = () => {




    return <div className="flex gap-36">
        <div className="one">
            {beachData1.map(item => {
                return <Beach id={item.id} {...item}/>
            })}
        </div>
       <div className="two">
            {beachData2.map(item => {
                    return <Beach id={item.id} {...item}/>
            })}
       </div>
        
     
    </div>;
}



const Beach = ({beachname, beachurl, location, ratings}) => {
return <>
<div className="BeachTile mt-12">
    <div className="beachimage">
        <img src={beachurl} className="image"/>
    </div>
    <center><p className="name">{beachname}</p>
    <p className="location">{location}</p>
    <p className="ratings">{ratings} Stars</p></center>
</div>
</>
}

export default BeachDiv;