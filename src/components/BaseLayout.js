import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Cups from './Cups';
import Flasks from './Flasks';
import Home from './Home';
import Mugs from './Mugs';
import Platters from './Platters';

export default class BaseLayout extends Component {
  render () {
    return (
      <div>
        <nav className='navBar'>
          <NavLink activeStyle='yellow' to='/'>Home</NavLink>
          <NavLink activeStyle='yellow' to='/Cups'>Cups</NavLink>
          <NavLink activeStyle='yellow' to='/Flasks'>Flasks</NavLink>
          <NavLink activeStyle='yellow' to='/Mugs'>Mugs</NavLink>
          <NavLink activeStyle='yellow' to='/Platters'>Platters</NavLink>
          <NavLink activeStyle='yellow' to='/About'>About</NavLink>
          <NavLink activeStyle='yellow' to='/Contact'>Contact</NavLink>
        </nav>
        {this.props.children}
      </div>
    )
  }
}
