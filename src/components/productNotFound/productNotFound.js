import React, { useState } from 'react';
import AddProductInfo from '../addProductInfo';

import BarcodeInputField from '../barcodeInputField';

import './productNotFound.css';

const ProductNotFound = (props) => {
  const { location } = props;

  const [ code ] = useState(new URLSearchParams(location.search).get('code'));

    return (<div className="productNotFound__container">
      <h2 className="productDisplay__title not-found">Kalorit täynnä, laihduta</h2>
      <p>EAN koodi: {code} </p>
      <BarcodeInputField />
    </div>)
};

export default ProductNotFound;
