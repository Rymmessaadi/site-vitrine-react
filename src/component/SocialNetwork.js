import React from 'react';

const SocialNetwork = () => {
    const anim =() => {
        let navLinks = document.querySelectorAll('.social-network a'); //select les  element que doit changer

    navLinks.forEach(link => {
      link.addEventListener('mouseover', (e) => { // lorsque tu passe la souris  recupérer l'evenement de souris 
        let attrX = e.offsetX - 20;
        let attrY = e.offsetY - 13;

        link.style.transform = `translate( ${attrX}px, ${attrY}px)`;
      })
      link.addEventListener('mouseleave', () => { //lorsque on quitte
        link.style.transform = '';
      })
    })

    }
    return (
        <div className="social-network">
      <ul className="content">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover" onMouseOver={anim} >
          <li><i className="fab fa-facebook-f"></i></li>
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover" onMouseOver={anim} >
          <li><i className="fab fa-twitter"></i></li>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover" onMouseOver={anim} >
          <li><i className="fab fa-instagram"></i></li>
        </a>
      </ul>
    </div>
    );
};

export default SocialNetwork;