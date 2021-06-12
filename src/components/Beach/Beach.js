import './Beach.scss';

const beachurl = "https://www.californiabeaches.com/wp-content/uploads/2014/09/bigstock-Baker-Beach-San-Francisco-Large-1000x644.jpg";
const beachname = "Baker Beach";
const location = "San Fransisco";
const ratings = "5";



const BeachDiv = () => {
    return <>
    {/* <Beach/>*/}
     <Beach/> 
    
    <Beach/>
    <Beach/>
    </>;
}



const Beach = () => {
return <>
<div className="BeachTile">
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