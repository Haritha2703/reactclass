import { createContext} from "react";

export const AuthContext = createContext(null);


// import {useState,createContext,useContext} from 'react'

// const AuthContext =createContext(null);

// export const AuthProvider=()=>{
//     const [isLoggedIn,setIsLoggedIn]=useState(false);
//     const login=()=>{
//         setIsLoggedIn(true);
//     };
//     const logout=()=>{
//         setIsLoggedIn(false);
//     }
//     return(
//        <AuthContext.Provider value={{isLoggedIn,login,logout}}>
//         {children}
//        </AuthContext.Provider>

//     )
// }

// export const useAuth=()=>{
//     return useContext(AuthContext);
// }