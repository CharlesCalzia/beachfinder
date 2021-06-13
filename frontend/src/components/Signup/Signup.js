import './Signup.scss'
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { auth } from "../../services/firebase";

const Signup = ()=>{

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [pass, setpass] = useState("")

    const history = useHistory();

    const register = (e) => {
      e.preventDefault();
      auth
        .createUserWithEmailAndPassword(email, pass)
        .then((user) => {
          console.log(user);
          history.push("/login");
        })
        .catch((err) => {
          console.log(err);
        });
    }

    return <>
          <div className="box2"> 
              <p style={{color: "white", fontWeight: "700", fontSize: "2rem", marginLeft:"2rem"}}>SignUp</p>

              <form style={{marginLeft: "2rem", fontSize:"1.5rem"}}>
                    <p>Name</p>
                            <input
                              type="text"
                              value = {name}
                              onChange={(e) => setname(e.target.value)}
                             />

                  <p>E-mail Address</p>
                          <input
                            type="email"
                            value = {email}
                            onChange={(e) => setemail(e.target.value)}
                          />
                      
                      <p>Password</p>
                      <input
                        type="password"
                        value = {pass}
                        onChange={(e) => setpass(e.target.value)}
                      />
                      <br></br><br></br>
                      <button onClick={register} style={{background:"white", borderRadius:"0.3rem", paddingLeft:"1rem",  paddingRight:"1rem"}}>LogIn</button>
              </form>
      </div>
    </>
}

export default Signup;