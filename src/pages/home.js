import React from "react";
import ButtonsBottom from "../component/button";
import DynamicText from "../component/DynamicText";
import Navigation from "../component/Navigation";
import SocialNetwork from "../component/SocialNetwork";
import Logo from "../component/Logo";

const home = () =>{
    return (
      <div>
      <div className="home">
       <Navigation />
       <SocialNetwork />
       <div className="home-main">
           <div className="main-content">
               <h1>
                   FS AGENCY
               </h1>
               <h2>
                   <DynamicText />
               </h2>
           </div>
       </div>
       <ButtonsBottom right={"/projet-1"} />
      </div>
      </div>
    );
  }
  
  export default home;