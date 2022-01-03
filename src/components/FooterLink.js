import React from 'react';

function FooterLink() {
  return (
    <div className="col-4">
      <span className="text-white fw-bold">Link</span>
      <ul className="navbar-nav">
        <li>
          <a className="text-light text-decoration-none" href="#">
            <small>Home</small>
          </a>
        </li>
        <li>
          <a className="text-light text-decoration-none" href="#kategory">
            <small>Kategori</small>
          </a>
        </li>
        <li>
          <a className="text-light text-decoration-none" href="#diskon">
            <small>Diskon</small>
          </a>
        </li>
        <li>
          <a className="text-light text-decoration-none" href="#about">
            <small>Tentang kami</small>
          </a>
        </li>
        <li>
          <a className="text-light text-decoration-none" href="#testimonial">
            <small>Testimonia</small>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default FooterLink;
