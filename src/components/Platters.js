import React, { Component } from 'react';
import birdPlatter from  '../images/birdPlatter.jpg';
import greenheckPlatter from  '../images/greenheckPlatter.jpg';
import MacSmithPlatter from '../images/MacSmithPlatter.jpg';
import martyPlatter from '../images/martyPlatter.jpg';

export default class Platters extends Component {
  render() {
    return (
      <div>
        <h1>This is the platters page.</h1>
        <div>
          <ul className='platters'>
            <li>
              <img src={birdPlatter} alt=""/>
              <p className='descrip'>Bird Platter</p>
              <p className='price'>$ Inquire for Pricing</p>
            </li>
            <li>
              <img src={martyPlatter} alt=""/>
              <p className='descrip'>Arrow Platter</p>
              <p className='price'>$ Inquire for Pricing</p>
            </li>
            <li>
              <img src={MacSmithPlatter} alt=""/>
              <p className='descrip'>Swirl Platter</p>
              <p className='price'>$ Inquire for Pricing</p>
            </li>
            <li>
              <img src={greenheckPlatter} alt=""/>
              <p className='descrip'>Scale Platter</p>
              <p className='price'>$ Inquire for Pricing</p>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
