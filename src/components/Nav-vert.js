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
           <div >
                <img src={home}/>
                <p style={{color: "black", fontSize: "0.75rem", fontWeight: "600"}}>Dashboard</p>
            </div>
            <br></br>
            <Link to="/upcoming">
                
            <div >
                <img src={upcoming}/>
                <p style={{color: "#FA9538", fontSize: "0.75rem", fontWeight: "600"}}>Upcoming</p>
            </div> </Link>
            <br></br>
            <Link to="/visualise">
            <div >
                <img src={explore}/>
                 <p style={{color: "#FA9538", fontSize: "0.75rem", fontWeight: "600"}}>Visualise</p>
            </div>
            </Link>
            <br></br>
            <Link to="/profile">
            <div >
            <img src={profile}/>
            <p style={{color: "#FA9538", fontSize: "0.75rem", fontWeight: "600"}}>Profile</p>
        </div>
        </Link>
            <br></br>
            <Link to="/music">
            <div >
                <img src={settings}/>
                <p style={{color: "#FA9538", fontSize: "0.75rem", fontWeight: "600"}}>Music</p>
            </div>
            </Link>
            <br></br>
            <div >
                <img src={logout}/>
                <p style={{color: "#FA9538", fontSize: "0.75rem", fontWeight: "600"}}>Login</p>
            </div>
           </center>
        </div>
        
    </>;


}


export default NavVert;