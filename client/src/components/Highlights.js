import React from "react";
import { Link } from "react-router-dom";
function Highlights() {
  return (
    <div class='highlights container'>
      <div class='row'>
        <div class='col-sm center'>
          <i class='HLIcons fas fa-fish'></i>
          <Link to='/search'>
            <h3 class='HLTitle'>Rate an Aquarium</h3>
          </Link>
          <p class='HLText'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            assumenda expedita tempora sit odio. Excepturi sit itaque hic
            incidunt perferendis nisi earum perspiciatis in illum quidem ipsa,
            molestiae iusto repudiandae.
          </p>
        </div>
        <div class='col-sm center'>
          <i class='HLIcons fas fa-frog'></i>
          <Link to='/search'>
            <h3 class='HLTitle'>Discover an Aquarium</h3>
          </Link>
          <p class='HLText'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            assumenda expedita tempora sit odio. Excepturi sit itaque hic
            incidunt perferendis nisi earum perspiciatis in illum quidem ipsa,
            molestiae iusto repudiandae.
          </p>
        </div>
        <div class='col-sm center'>
          <i class='HLIcons fas fa-leaf'></i>
          <Link to='/register'>
            <h3 class='HLTitle'>Create an Account</h3>
          </Link>
          <p class='HLText'>
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
