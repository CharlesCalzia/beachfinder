import "./Nav.scss";
import { Link, useHistory } from "react-router-dom";
import settings from './Svg/Support.svg';
import upcoming from './Svg/Doctors.svg';
import home from './Svg/home.svg';
import logout from './Svg/logout.svg';
import profile from './Svg/profile.png';
import explore from './Svg/Room.png';
const NavVert = () => {
    return <>
 <div className="vert-menu">
            
           <center>
           <Link to="/">
           <div class="sidebar-btn">
                <img src={home}/>
                <p style={{color: "#FA9538", fontSize: "0.75rem", fontWeight: "600"}}>Dashboard</p>
            </div>
            </Link>
            <br></br>
            <Link to="/Settings">
                
            <div class="sidebar-btn">
                <img src={settings}/>
                <p style={{color: "#FA9538", fontSize: "0.75rem", fontWeight: "600"}}>Settings</p>
            </div> </Link>
            <br></br>
            <Link to="/Visualise">
            <div class="sidebar-btn">
                <img src={explore}/>
                 <p style={{color: "#FA9538", fontSize: "0.75rem", fontWeight: "600"}}>Visualise</p>
            </div>
            </Link>
            <br></br>
            <Link to="/profile">
            <div class="sidebar-btn">
            <img src={profile}/>
            <p style={{color: "#FA9538", fontSize: "0.75rem", fontWeight: "600"}}>Profile</p>
            </div>
            </Link>
            <br></br>
            <Link to="/Music">
            <div class="sidebar-btn">
                <img src={upcoming}/>
                <p style={{color: "#FA9538", fontSize: "0.75rem", fontWeight: "600"}}>Music</p>
            </div>
            </Link>
            <br></br>
            <div class="sidebar-btn">
                <img src={logout}/>
                <p style={{color: "#FA9538", fontSize: "0.75rem", fontWeight: "600"}}>LogOut</p>
            </div>
           </center>
        </div>
        
    </>;


}


export default NavVert;