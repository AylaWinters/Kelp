import React from 'react'

function Carousel() {
    return (
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="https://i.imgur.com/IdQSde6.gif" alt="First slide" />
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="https://i.imgur.com/JPTz6Yw.gif" alt="Third slide" />
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="https://i.imgur.com/R8XwDbQ.gif" alt="Second slide" />
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="https://i.imgur.com/Yx6p8pc.gif" alt="Third slide" />
                </div>
            </div>
        </div>
    )
}

export default Carousel
