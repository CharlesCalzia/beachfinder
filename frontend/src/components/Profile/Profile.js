import './Profile.scss'

const Profile = () => {

    const profileurl = "https://images.unsplash.com/photo-1616083391267-de7b0970af2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80";
    const name = "John Smith";
    const email = "jsmith@gmail.com";
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