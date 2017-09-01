import React, { Component } from 'react';
import lyon from  '../images/lyon.jpg';
import Chuck from  '../images/Chuck.jpg';
import swirlyMug from '../images/swirlyMug.jpg';
import dougMug from '../images/dougMug.jpg';

export default class Mugs extends Component {
  render() {
    return (
      <div>
        <h1>This is the mugs page.</h1>
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
