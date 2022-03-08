import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="header section__margin">
      <div className="header__hero">
        <div className="header__hero-name">
          <div className="header__hero-line" />
          <p>Baghous yahya</p>
        </div>
        <h1>Creative thinker Minimalism lover</h1>
        <p>
          Hi, I’m Jessica. I’m UI/UX Designer. If you are looking for Designer
          to build your brands and grow your business Let’s shake hands with me.
        </p>
        <div className="header__hero-actions">
          <button className="header__hero-hire">Hire me</button>
          <button className="header__hero-read">Read more</button>
        </div>
      </div>
      <div className="header__vd">
      
        <iframe  className="header__vd-video" src="https://www.youtube.com/embed/OZ1wcxWmT24" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
     
      </div>
    </div>
  );
};

export default Header;
