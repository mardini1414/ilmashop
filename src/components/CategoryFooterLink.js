import React from 'react';

function CategoryFooterLink() {
  return (
    <div className="col-4">
      <span className="text-white fw-bold">Kategori</span>
      <ul className="navbar-nav">
        <li>
          <a className="text-light text-decoration-none" href="">
            <small>Men</small>
          </a>
        </li>
        <li>
          <a className="text-light text-decoration-none" href="">
            <small>Woman</small>
          </a>
        </li>
        <li>
          <a className="text-light text-decoration-none" href="">
            <small>Kid</small>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default CategoryFooterLink;
