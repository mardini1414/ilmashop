import React from 'react';
import CardDiscount from './CardDiscount';
import kaos from '../img/kaos.webp';
import silverJeans from '../img/jeans-silver.webp';
import blackJeans from '../img/jeans-hitam.webp';
import daster from '../img/daster.webp';

function Discount() {
  return (
    <div className="w-full bg-white py-5" id="diskon">
      <div className="container">
        <div className="row justify-content-center rounded">
          <CardDiscount
            discount={'-80%'}
            name={'Kaos Oblong'}
            oldPrice={'100.000'}
            newPrice={'20.000'}
            img={kaos}
          />
          <CardDiscount
            discount={'-50%'}
            name={'Daster'}
            oldPrice={'50.000'}
            newPrice={'25.000'}
            img={daster}
          />
          <CardDiscount
            discount={'-25%'}
            name={'Jeans Hitam'}
            oldPrice={'250.000'}
            newPrice={'180.500'}
            img={blackJeans}
          />
          <CardDiscount
            discount={'-15%'}
            name={'Jeans Silver'}
            oldPrice={'230.000'}
            newPrice={'195.500'}
            img={silverJeans}
          />
        </div>
      </div>
    </div>
  );
}

export default Discount;
