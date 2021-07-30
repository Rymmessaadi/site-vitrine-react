import React from "react";
import Logo from "../component/Logo";
import Navigation from "../component/Navigation";
import SocialNetwork from "../component/SocialNetwork";
import ButtonsBottom from "../component/button";
import ContactForm from "../component/ContactForm";

const contact = () =>{
    return (
      <main>
      <div className="contact">
      <Navigation />
      <Logo />
      <ContactForm />
    <div className="contact-infos">
        <div className="address">
          <div className="content">
            <h1>adresse</h1>
            <p>12 rue du code</p>
            <p>330000 Bordeaux</p>
          </div>
        </div>
     
      <div className="phone">
        <div className="content">
          <h4>Telephone</h4>
          <p
                  style={{cursor: 'pointer'}}
                  className="clipboard"
                  onClick={() => {
                    alert("Téléphone copié !");
                  }}
                >
                  06 42 84 42 84
                </p>
        </div>
      </div>

      <div className="email">
            <div className="content">
              <h4>email</h4>
              
                <p
                  style={{cursor: 'pointer'}}
                  className="clipboard"
                  onClick={() => {
                    alert("Email copié !");
                  }}
                >
                  fsagency@gmail.com
                </p>
             
            </div>
          </div>
          <SocialNetwork />
          <div className="credits">
            <p>fromScratch - 2020</p>
          </div>


    </div>
    <ButtonsBottom left={"/projet-4"} />

      </div>
      
      </main>
    );
  }
  
  export default contact;