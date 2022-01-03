import React from 'react';
import Carousel from './Carousel';

function Testimonial() {
  return (
    <div className="w-full bg-white" id="testimonial">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-5">
            <h3 className="text-dark text-center text-sm-start">
              Bagaimana pendapat mereka tentang kami?
            </h3>
          </div>
          <div className="col-sm-5 col-lg-4">
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
