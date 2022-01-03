import React from 'react';
import Model from '../img/model.webp';

function Hero() {
  return (
    <div className="w-full bg-primary h-100 mt-5">
      <div className="container pt-5">
        <div
          className="row align-items-center justify-content-center overflow-hidden"
          id="hero-section"
        >
          <div
            className="col-md-6 p-2 text-center text-sm-start"
            data-aos="zoom-in"
            data-aos-delay="1500"
            data-aos-duration="1000"
          >
            <h1 className="fs-1 text-white">BONUS DISKON SAMPAI 90%</h1>
            <p className="text-light">
              Dapatkan bonus diskon sampai dengan 90% hanya dengan belanja
              minimal 200.000, sarat dan ketentuan berlaku.
            </p>
            <button className="btn btn-light text-primary">
              Belanja sekarang
            </button>
          </div>
          <div
            className="col-md-6 mt-5 mt-sm-0"
            data-aos="fade-up"
            data-aos-delay="1800"
            data-aos-duration="1000"
          >
            <img src={Model} alt="model" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
