import React from 'react';

function Contact() {
  return (
    <div className="col-4">
      <span className="text-white fw-bold">Kontak</span>
      <ul className="navbar-nav">
        <li>
          <a className="text-light text-decoration-none" href="">
            <small>Whatsapp</small>
          </a>
        </li>
        <li>
          <a className="text-light text-decoration-none" href="">
            <small>Email</small>
          </a>
        </li>
        <li>
          <a className="text-light text-decoration-none" href="">
            <small>Instagram</small>
          </a>
        </li>
        <li>
          <a className="text-light text-decoration-none" href="">
            <small>facebook</small>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
