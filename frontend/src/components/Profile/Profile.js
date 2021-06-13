import './Profile.scss';
import { useState, useEffect } from 'react';

const Profile = ({user}) => {

    const profileurl = "https://images.unsplash.com/photo-1616083391267-de7b0970af2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80";
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const favs = "Baker Beach, Miami Beach";

    useEffect(() => {
        if(user){
            setemail(user.email)
            setname(user.email.split("@")[0])
        }
    }, [user])

    return <>
    <div className="profileTile">
        <div  > 
            
            <img src={profileurl} className="profilepic"/></div>
        
        <div className="flex-col"> 
            
            
                <p className="text-7xl font-medium mt-8 text-white">{name}</p>
                <p  className="text-sm text-white mt-6">{email}</p>
                <br /><br />
                <p style={{color: "white", fontWeight:"600", fontSize:"1.2rem"}}>Favourites: {favs}</p>
        </div>
    </div>
    </>
}

export default Profile;