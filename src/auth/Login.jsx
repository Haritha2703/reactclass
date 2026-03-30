// import {useState} from "react";
// import axios from "axios";

// function Signup(){
//     const[username,setUsername]=useState("");
//     const[password,setPassword]=useState("");

//     const handleSignup=async()=>{
//         try{
//             const res=await axios.post("http://localhost:3000/api/auth/signup",{
//                 username,
//                 password,
//             });
//             alert(res.data.message);
//         }catch(err){
//             alert("Signup failed");
//         }
//     };
//     return(
//         <div>
//             <h2>Signup</h2>
// <input onChange={(e)=>setUsername(e.target.value)} placeholder="Username"/>
//       <input type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
//       <button onClick={handleSignup}>Signup</button>
//     </div>
        
//     );
// }
// export default Signup;