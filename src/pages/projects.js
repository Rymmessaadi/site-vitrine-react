import React from "react";
import Navigation from "../component/Navigation";
import ButtonsBottom from "../component/button";
import Logo from "../component/Logo";
import Project from "../component/Project";


 export const porject1 = () =>{
    return (
      <main>
        <div className="project">
        <Navigation/> 
        <Project projectNumber ={0} />
       <Logo /> 
        <ButtonsBottom left={"/"} right={"/projet-2"}/>
        
        

        </div>
      </main>
    );
  }
  export const porject2 = () =>{
    return (
      <main>
        <div className="project">
       <Navigation/> 
       <Project projectNumber ={1} />
       <Logo /> 
       <ButtonsBottom left={"/projet-1"} right={"/projet-3"}/>
        project2

        </div>
      </main>
    );
  }
  export const porject3 = () =>{
    return (
      <main>
        <div className="project">
        <Navigation/> 
        <Project projectNumber ={2} />
        <Logo /> 
        <ButtonsBottom left={"/projet-2"} right={"/projet-4"}/>
        project3

        </div>
      </main>
    );
  }
  export const porject4 = () =>{
    return (
      <main>
        <div className="project">
        <Navigation/> 
        <Project projectNumber ={3} />
        <Logo /> 
        <ButtonsBottom left={"/projet-3"} right={"/contact"} />
       

        </div>
      </main>
    );
  }
  
  
  