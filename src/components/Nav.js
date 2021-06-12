import { Link, useHistory } from "react-router-dom";
import "./Nav.scss";
import SearchField from "react-search-field";
import searchbtn from "./Svg/search.svg";
import heart from "./Svg/heart.svg"
import filter from "./Svg/Filter.svg"
import {useState, useEffect} from 'react'
// import {auth} from '../../utils/firebase' 
// import { Searchbar } from 'react-native-paper';
import logo from './Svg/logo.png'

const Nav = () => {
    // const [searchQuery, setSearchQuery] = React.useState('');

    // const onChangeSearch = query => setSearchQuery(query);
    const [selectedTechnologies, setSelectedTechnologies] = useState([]);

 


  
  return (
    <nav
      style={{ zIndex: "100" }}
      className="navbar navbar-expand-lg navbar-light bg-light py-3"
    >
        <div className="logo-container"><img src={logo} style={{height: "4rem", borderRadius:"2rem", marginLeft: "2rem", marginTop:"0.4rem"}}/></div>
      <div className="container-fluid">
         
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="navbar-brand" id="titlename">
          <h2 style={{fontWeight: "700", fontSize :"2rem", fontFamily: "'Permanent Marker', cursive"}}>BEACH FINDER</h2>
          </span>
        </Link>
       


    
     
        <button
        
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <form className="d-flex">
             <div>
             <SearchField
         
             
  placeholder="Search..."
//   onChange={onChange}
 
  classNames="test-class"
/>
             {/* <button><img src={filter} alt="filter" style={{ width: "4rem"}} /></button> */}
             {/* <button><img src={searchbtn} alt="search"  /></button> */}
             <button><img src={heart} alt="heart" className="heart"/></button>
                <Link to="/login">
                  <button
                    className="btn btn-outline-success loginButton mx-4 px-3"
                    id="loginbtn"
                  >
                    LOGIN
                  </button>
                </Link>
                <Link to="/register">
                  <button
                    className="btn btn-outline-success ml-4 signupButton px-3"
                    id="signupbtn"
                  >
                    SIGNUP
                  </button>
                </Link>
            </div> 
            
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Nav;