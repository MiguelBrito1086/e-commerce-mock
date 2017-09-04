import React, { Component } from 'react';
import hands from '../images/hands.jpg';
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className='intro'>
          <h1>ceramics</h1>
          <h1 className='pronounce'>[suh-ram-iks]</h1>
          <h1 className='noun'>noun</h1>
          <h1 className='definition'>
            1. (used with a singular verb) the art or technology of making objects of clay and similar materials treated by firing.
          </h1>
          <h1 className='definition'>
            2. (used with a plural verb) articles of earthenware, porcelain, etc.
          </h1>
          <div>
            <h1 className='contact'>
              check out our
              <Link to='/cups'> cups,</Link>
              <Link to='/flasks'> flasks,</Link>
              <Link to='/mugs'> mugs, </Link>
              and
              <Link to='/platters'> patters!</Link>
            </h1>
            <h1 className='contact'>
              or contact us <Link to='/contact'> here!</Link>
            </h1>
          </div>
          <div className='hands'>
            <img src={hands} alt="hands"/>
          </div>
        </div>
      </div>
    )
  }
}
