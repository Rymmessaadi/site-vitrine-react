import React from "react";
import ButtonsBottom from "../component/button";
import DynamicText from "../component/DynamicText";
import Navigartion from "../component/Navigartion";
import SocialNetwork from "../component/SocialNetwork";

const home = () =>{
    return (
      <div>
       <Navigartion />
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
       <ButtonsBottom right={"/project-1"} />
      </div>
    );
  }
  
  export default home;