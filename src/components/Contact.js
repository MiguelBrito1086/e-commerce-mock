import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Contact extends Component {
  render() {
    return (
      <div>
        <h1>contact</h1>
        <h1 className='noun'>
          If you have any questions or concerns, please feel free to contact me!
        </h1>
        <h1 className='noun'>
          Here is a link to my email...
        </h1>
        <h1 className='noun'>
          Here is a link to my Twitter...
        </h1>
        <h1 className='noun'>
          Here is a link to my FaceBook...
        </h1>
      </div>
    )
  }
}
