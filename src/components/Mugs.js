import React, { Component } from 'react';
import lyon from  '../images/lyon.jpg';
import Chuck from  '../images/Chuck.jpg';
import swirlyMug from '../images/swirlyMug.jpg';
import dougMug from '../images/dougMug.jpg';

export default class Mugs extends Component {
  render() {
    return (
      <div>
        <h1>mug</h1>
        <h1 className='pronounce'>[muhg]</h1>
        <h1 className='noun'>noun</h1>
        <h1 className='definition'>
          1. a drinking cup, usually cylindrical in shape, having a handle, and often of a heavy substance, as earthenware.
        </h1>
        <div>
          <ul className='mugs'>
            <li>
              <img src={lyon} alt=""/>
              <p className='descrip'>Blue Ridged Mug</p>
              <p className='price'>$ Inquire for Pricing</p>
            </li>
            <li>
              <img src={dougMug} alt=""/>
              <p className='descrip'>Matte Black Mugs</p>
              <p className='price'>$ Inquire for Pricing</p>
            </li>
            <li>
              <img src={swirlyMug} alt=""/>
              <p className='descrip'>Marble Mugs</p>
              <p className='price'>$ Inquire for Pricing</p>
            </li>
            <li>
              <img src={Chuck} alt=""/>
              <p className='descrip'>Snow Mug</p>
              <p className='price'>$ Inquire for Pricing</p>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
