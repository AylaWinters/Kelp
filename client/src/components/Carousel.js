import React from "react";

function Carousel() {
  return (
    <div
      id='carouselExampleSlidesOnly'
      className='carousel slide'
      data-ride='carousel'
    >
      <div className='carousel-inner'>
        <div className='carousel-item'>
          <img
            className='d-block w-100'
            src='https://i.imgur.com/IdQSde6.gif'
            alt='First slide'
          />
        </div>
        <div className='carousel-item active'>
          <img
            className='d-block w-100'
            src='https://i.imgur.com/JPTz6Yw.gif'
            alt='Third slide'
          />
        </div>
        <div className='carousel-item'>
          <img
            className='d-block w-100'
            src='https://i.imgur.com/R8XwDbQ.gif'
            alt='Second slide'
          />
        </div>
        <div className='carousel-item'>
          <img
            className='d-block w-100'
            src='https://i.imgur.com/Yx6p8pc.gif'
            alt='Third slide'
          />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
