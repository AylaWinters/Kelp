import React from "react";
import { Link } from "react-router-dom";

function Highlights() {
  return (
    <div className='highlights container'>
      <div className='row'>
        <div className='col-sm center'>
          <i className='HLIcons fas fa-fish'></i>
          <Link to='/aquariums'>
            <h3 className='HLTitle'>Rate an Aquarium</h3>
          </Link>
          <p className='HLText'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            assumenda expedita tempora sit odio. Excepturi sit itaque hic
            incidunt perferendis nisi earum perspiciatis in illum quidem ipsa,
            molestiae iusto repudiandae.
          </p>
        </div>
        <div className='col-sm center'>
          <i className='HLIcons fas fa-frog'></i>
          <Link to='/aquariums'>
            <h3 className='HLTitle'>Discover an Aquarium</h3>
          </Link>
          <p className='HLText'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            assumenda expedita tempora sit odio. Excepturi sit itaque hic
            incidunt perferendis nisi earum perspiciatis in illum quidem ipsa,
            molestiae iusto repudiandae.
          </p>
        </div>
        <div className='col-sm center'>
          <i className='HLIcons fas fa-leaf'></i>
          <Link to='/register'>
            <h3 className='HLTitle'>Create an Account</h3>
          </Link>
          <p className='HLText'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            assumenda expedita tempora sit odio. Excepturi sit itaque hic
            incidunt perferendis nisi earum perspiciatis in illum quidem ipsa,
            molestiae iusto repudiandae.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Highlights;
