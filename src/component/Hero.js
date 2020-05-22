import React from "react";

// {children} is needed to render the children components
const Hero = ({ children, hero }) => {
  return <header className={hero}> {children} </header>;
};

// DEFAULT PROPS
// defaultHero: class with costomized css

Hero.defaultProps = {
  hero: "defaultHero",
};

export default Hero;
