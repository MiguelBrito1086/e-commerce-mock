import React, { Component } from 'react';
import celadon from  '../images/celadon.jpg';
import drip from  '../images/drip.jpg';
import dots from '../images/dots.jpg';
import longcup from '../images/longcup.jpg';

export default class Cups extends Component {
  render() {
    return (
      <div>
        <h1>This is the cups page.</h1>
        <div>
          <ul className='cups'>
            <li>
              <img src={celadon} alt=""/>
              <p className='descrip'>Celedon Cups</p>
              <p className='price'>$ Inquire for Pricing</p>
            </li>
            <li>
              <img src={drip} alt=""/>
              <p className='descrip'>Celedon Drip Cups</p>
              <p className='price'>$ Inquire for Pricing</p>
            </li>
            <li>
              <img src={dots} alt=""/>
              <p className='descrip'>Mint Cups</p>
              <p className='price'>$ Inquire for Pricing</p>
            </li>
            <li>
              <img src={longcup} alt=""/>
              <p className='descrip'>Shino Soda Fired Cups</p>
              <p className='price'>$ Inquire for Pricing</p>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
