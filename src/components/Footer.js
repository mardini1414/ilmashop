import React from 'react';
import CategoryFooterLink from './CategoryFooterLink';
import Contact from './Contact';
import FooterLink from './FooterLink';

function Footer() {
  return (
    <div className="w-full bg-primary py-3">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-8 col-md-6">
            <div className="row">
              <Contact />
              <FooterLink />
              <CategoryFooterLink />
            </div>
          </div>
        </div>
      </div>
      <small className="text-white text-center pt-5 pb-2 d-block">
        &copy; 2022 ilmashop
      </small>
    </div>
  );
}

export default Footer;
