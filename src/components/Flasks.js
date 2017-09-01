import React, { Component } from 'react';
import longflask from  '../images/longflask.jpg';
import Flaskie from  '../images/Flaskie.jpg';
import shell from '../images/shell.jpg';
import eyeFlask from '../images/eyeFlask.jpg';

export default class Flasks extends Component {
  render() {
    return (
      <div>
        <h1>flask</h1>
        <h1 className='pronounce'>[flahsk]</h1>
        <h1 className='noun'>noun</h1>
        <h1 className='definition'>
          2. a flat metal or glass bottle for carrying in the pocket.
        </h1>
        <div>
          <ul className='flasks'>
            <li>
              <img src={longflask} alt=""/>
              <p className='descrip'>Shino Flask</p>
              <p className='price'>$ Inquire for Pricing</p>
            </li>
            <li>
              <img src={Flaskie} alt=""/>
              <p className='descrip'>Natural Flask</p>
              <p className='price'>$ Inquire for Pricing</p>
            </li>
            <li>
              <img src={shell} alt=""/>
              <p className='descrip'>Wood Fired Shell Flask</p>
              <p className='price'>$ Inquire for Pricing</p>
            </li>
            <li>
              <img src={eyeFlask} alt=""/>
              <p className='descrip'>Eye Flask</p>
              <p className='price'>$ Inquire for Pricing</p>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
