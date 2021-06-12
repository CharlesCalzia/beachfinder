import './Profile.scss'

const Profile = () => {

    const profileurl = "https://data.whicdn.com/images/351499884/original.jpg";
    const name = "Sarah James";
    const email = "Sarah@gmail.com";
    const favs = "Baker Beach, Miami Beach";

    return <>
    <div className="profileTile">
        <div  > <img src={profileurl} className="profilepic"/></div>
        
        <div> <p className="name">{name}</p>
        <center><p style={{color: "white", fontWeight:"600"}}>{email}</p></center>
        <br></br>
        <br></br><center><p style={{color: "white", fontWeight:"600", fontSize:"1.2rem"}}>Favourites: {favs}</p></center>
        </div>
    </div>
    </>
}

export default Profile;