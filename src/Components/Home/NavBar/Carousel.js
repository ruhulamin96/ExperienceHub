import React from "react";
import header1 from '../../../images/header1.jpg'
import header2 from '../../../images/header2.jpg'
import header3 from '../../../images/header3.jpg'

function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={header1} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>JOIN OUR TRAVEL COLLECTIVE</h5>
              <p>
              Unforgettable journeys where you realise you don't need the same language to laugh, commune and connect. Come join our travel collective and share the extraordinary world we know
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={header2} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>FIND A DIFFERENT STORY</h5>
              <p>
              Imaginative, immersive adventures; our individually created holidays are your guaranteed passport to a life less ordinary. Embrace the unexpected; travel curiously; discover a new you.
              </p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={header3} class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>TRAVEL WITH CONFIDENCE</h5>
              <p>
              Bespoke itineraries designed to suit you, and only you. With full financial protection and 24/7 support; we'll ensure you travel seamlessly, safely and responsibly, too. We're with you all the way.
              </p>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
