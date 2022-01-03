import React from 'react';
import Man from '../img/man.webp';
import Woman from '../img/woman.webp';
import Kid from '../img/kid.webp';

function Category() {
  return (
    <div className="w-full bg-white pb-5" id="kategori">
      <div className="container">
        <div className="row g-0">
          <div className="col-md-6 position-relative">
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <a href="">
                <h5 className="fs-1 position-absolute top-50 start-50 translate-middle text-white p-2 border border-2 border-white rounded">
                  MEN
                </h5>
                <img src={Man} alt="men" className="category-img-men" />
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-12 position-relative">
                <div
                  data-aos="flip-up"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                >
                  <a href="">
                    <h5 className="fs-1 position-absolute top-50 start-50 translate-middle text-white p-2 border border-2 border-white rounded">
                      WOMAN
                    </h5>
                    <img
                      src={Woman}
                      alt="woman"
                      className="category-img-women"
                    />
                  </a>
                </div>
              </div>
              <div className="col-12 position-relative">
                <div
                  data-aos="flip-up"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                >
                  <a href="">
                    <h5 className="fs-1 position-absolute top-50 start-50 translate-middle text-white p-2 border border-2 border-white rounded">
                      KID
                    </h5>
                    <img src={Kid} alt="kid" className="category-img-kid" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
