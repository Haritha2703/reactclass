import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Signup() {

    const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    try {
      const res = await axios.post("http://localhost:3000/api/auth/signup", {
        username,
        password,
      });

      alert(res.data.message);
    } catch (err) {
      alert("Signup failed");
    }
  };

  return (
    <div>
      <h2>Signup</h2>

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

      <button onClick={handleSignup}>Signup</button>
      <button onClick={() => navigate("/login")}>
  Go to Login
</button>
    </div>
  );
}

export default Signup;

// import {useAuth} from "./useAuth";

//  function Signup() {
//     const {isLoggedIn,login,logout}=useAuth();
//     console.log(isLoggedIn);

//   return (
//     <div>
//         <button onClick={()=>login()}>Signin</button>
//         {isLoggedIn && <h1>...LoggedIn...</h1>}
//         {!isLoggedIn && <h1>...NotLoggedIn...</h1>}
//         <button onClick ={logout}>Signout</button>

        
//         </div>
//    );
// }

// export default Signup;