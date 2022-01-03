import React from 'react';

function CardDiscount(props) {
  return (
    <div className="col-md-3 my-3">
      <div className="shadow rounded position-relative">
        <div className="bg-dark text-white position-absolute rounded p-1 fs-5 fw-bold end-0">
          {props.discount}
        </div>
        <img src={props.img} alt="item" className="img-card" loading="lazy" />
        <div className="card-footer d-flex justify-content-between align-items-center bg-white">
          <div>
            <small className="text-dark fw-light">{props.name}</small>
            <br />
            <small className="text-muted text-decoration-line-through">
              IDR {props.oldPrice}
            </small>
            <p className="text-primary">IDR {props.newPrice}</p>
          </div>
          <div>
            <button className="btn btn-outline-dark">Pesan</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDiscount;
