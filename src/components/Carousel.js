import React from 'react';
import AvatarKid from '../img/avatars/avatarkid.webp';
import Avatarmen from '../img/avatars/avatarmen.webp';
import Avatarwoman from '../img/avatars/avatarwoman.webp';

function Carousel() {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner text-center">
        <div className="carousel-item active">
          <div className="p-5">
            <img
              src={AvatarKid}
              alt="avatar kis"
              width={80}
              className="rounded-circle"
            />
            <br />
            <small className="text-dark fw-bold my-2">Firman</small>
            <blockquote className="text-white text-muted">
              &quot;Belanja disini seru cepat sekali pengirimannya, terimakasih
              ilmashop&quot;
            </blockquote>
          </div>
        </div>
        <div className="carousel-item bg-gray-500">
          <div className="p-5">
            <img
              src={Avatarwoman}
              alt="avatar kis"
              width={80}
              className="rounded-circle"
            />
            <br />
            <small className="text-dark fw-bold my-2">Atiah</small>
            <blockquote className="text-white text-muted">
              &quot;Semua barang di ilmashop berkualitas dan banyak diskonnya
              cocok sekali untuk saya yang suka belanja.&quot;
            </blockquote>
          </div>
        </div>
        <div className="carousel-item">
          <div className="p-5">
            <img
              src={Avatarmen}
              alt="avatar kis"
              width={80}
              className="rounded-circle"
            />
            <br />
            <small className="text-dark fw-bold my-2">Samsul</small>
            <blockquote className="text-white text-muted">
              &quot;Admin baik dan ramah mau mendengarkan komplainan saya,
              pokonya recomended belanja disini&quot;
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
