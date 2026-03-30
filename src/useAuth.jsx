import {useContext} from "react";
import {AuthContext} from "./AuthContext";

export const useAuth=()=>{
    return useContext (AuthContext);
}



// import {useState,createContext,useContext }from "react";

// export  function useAuth() {
  
//     const[isLoggedIn,setIsLoggedIn]=useState(False);
//     const login=()=>{
//         setIsLoggedIn(true);
//     };
//     const logout=()=>{
//         setIsLoggedIn(false);
//     };
//     return{
//         isLoggedIn,
//         login,
//         logout
//     };
       
  

// }