import './App.css'
import Navbar from './Navbar';
import Todo from './Todo'
import {Routes,Route, replace,} from "react-router-dom";
import Home from './Home';
import Products from './Products';
import Orders from './Orders';
import Cart from './Cart';
import PageNotFound from './PageNotFound';
import Login from './Login';
import Signup from './Signup';
import PrivateRoute from './PrivateRoute';
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "./AuthContext";
// import {AuthProvider} from "./AuthProvider";

function App(){
  const [isLoggedIn,setIsLoggedIn]=useState(false);
    const login=()=>{
        setIsLoggedIn(true);
    };
    const logout=()=>{
        setIsLoggedIn(false);
        Navigate("/login",{replace:true});
    };
  // const {isLoggedIn}=useAuth();
    return(
      <>
        <AuthContext.Provider value={{isLoggedIn,login,logout}}>
         <div className="container">
          {isLoggedIn && <Navbar />}
        </div>
    <Routes>
       <Route path="/login" element ={<Login/>}/>
         <Route path="/signup" element ={<Signup/>}/>
          <Route path="/" element ={
            <PrivateRoute>
              <Home/> 
            </PrivateRoute>
            }/>
       <Route path="/todo" element ={
         <PrivateRoute>
          <Todo/>
          </PrivateRoute>}/>
       <Route path="/products" element ={
        <PrivateRoute>
          <Products/>
          </PrivateRoute>}/>
       <Route path="/orders" element ={
        <PrivateRoute>
          <Orders/>
        </PrivateRoute>
       }/>
             
       <Route path="/cart" element ={
        <PrivateRoute>
           <Cart/>  
        </PrivateRoute>
     }/>
       <Route path="*" element ={<PageNotFound/>}/>
</Routes>
     </AuthContext.Provider>
     </>
    )
}

export default App;



// import Ecommerce from "./Ecommerce/Ecommerce";

// function App() {
//   return <Ecommerce />;
// }

// export default App;





// import { Routes, Route } from "react-router-dom";
// import File1 from "./File1";
// import Todo from "./Todo";

// function App(){
//   return(
//     <>
//       <File1 />

//       <Routes>
//         <Route path="/todo" element={<Todo />} />
//       </Routes>
//     </>
//   )
// }

// export default App;

//befor final

// import './App.css'
// for todo
// import Todo from './Todo'

// function App(){
//   return(
//     <div className="container">
//       <Todo/>
//     </div>
//   )
// }
// export default App;

// import "./Finance.css";
// // import Finance from "./finance";
// import Header from "./Header";
// import Section1 from "./Section1";
// import Section2 from "./Section2";
// import Section3 from "./Section3";
// import Footer from "./Footer";
// function App() {
//   return (
//     <div className="container"> 
//       {/* <Finance /> */}

//       <Header />
  
//       <Section1 />
 
//       <Section2/>
//      <Section3/>
//      <Footer/>
  

//     </div>

//   )
// }
// export default App;



// import './App.css'
// import Welcome from './Welcome'

// function App() {
//   console.log("Hello!I am console log")

//   return (
  
    
//       <div className="container">
//         <Welcome/>
           
//            Hello World! How are you?
     
//       </div>
   
//   )
// }

// export default App
