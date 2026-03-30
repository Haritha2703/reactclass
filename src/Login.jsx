import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";//signup

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  //signup

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("https://server-4lac.onrender.com/api/auth/login", {
        username,
        password,
      });

      alert(res.data.message);

      // store login state
      login();  

    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <input
        placeholder="Enter Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={handleLogin}>Login</button>
<button onClick={() => navigate("/signup")}>
  Go to Signup
</button>
    </div>
    //signup
  );
}

export default Login;










// // import {useAuth} from "./useAuth";
// import {useContext} from "react";
// import {AuthContext} from "./AuthContext";

//  function Login() {
//     // const {isLoggedIn,login,logout}=useAuth();
//     // console.log(isLoggedIn);
//     const{login}=useContext(AuthContext);

//   return (
//     <div>
//       <h4>Username</h4>
//       <h4>password</h4>
//         <button onClick={()=>login()}>Login</button>
//         {/* {isLoggedIn && <h1>...LoggedIn...</h1>}
//         {!isLoggedIn && <h1>...NotLoggedIn...</h1>}
//         <button onClick ={logout}>Login</button>
//         <Signup/> */}
        
//         </div>
//   )
// }

// export default Login;