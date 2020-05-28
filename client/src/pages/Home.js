import React from "react";
import Carousel from "../components/Carousel";
import Highlights from "../components/Highlights";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {
  AOS.init({
    duration: 2000,
  });

  return (
    <div>
      {/* <Carousel /> */}
      <div className='hero'></div>
      <div className='hero-text' data-aos='fade-up'>
        Kelp
        <div className='hero-subtext'>The Ultimate Aquarium Review Site</div>
      </div>

      {/* <Highlights /> */}

      <div className='rate center' data-aos='fade-right'>
        <i className='HLIcons fas fa-fish'></i>
        <Link to='/aquariums'>
          <h3 className='HLTitle'>Rate an Aquarium</h3>
        </Link>
        <p className='HLText'>
          Been to an aquarium that you love? Tired of aquariums not labeling
          their fish? Let the world know!
        </p>
      </div>

      <div class='diagonal-one'></div>

      <div className='discover center' data-aos='fade-left'>
        <i className='HLIcons fas fa-frog'></i>
        <Link to='/aquariums'>
          <h3 className='HLTitle'>Discover an Aquarium</h3>
        </Link>
        <p className='HLText'>
          Read what others have written and find your next favorite aquarium!
        </p>
      </div>

      <div className='diagonal-two'></div>

      <div className='create center' data-aos='fade-right'>
        <i className='HLIcons fas fa-leaf'></i>
        <Link to='/register'>
          <h3 className='HLTitle'>Create an Account</h3>
        </Link>
        <p className='HLText'>
          The magic begins after a very quick account creation.
        </p>
      </div>
    </div>
  );
}

export default Home;
