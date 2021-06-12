import './Login.scss';

const Login = ()=>{
    return <>
<div className="box"> 
<p style={{color: "white", fontWeight: "700", fontSize: "2rem", marginLeft:"2rem"}}>LogIn</p>
<form style={{marginLeft: "2rem", fontSize:"1.5rem"}}>
<p>E-mail Address</p>
        <input
          type="text"
        />
        <p>Password</p>
        <input
          type="text"
        />
        <br></br><br></br>
        <button type="submit" style={{background:"white", borderRadius:"0.3rem", paddingLeft:"1rem",  paddingRight:"1rem"}}>LogIn</button>
</form>
</div>
    </>;
}
export default Login;