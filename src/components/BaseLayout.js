import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class BaseLayout extends Component {
  render () {
    return (
      <div>
        <nav className='navBar'>
          <NavLink activeStyle={{color: 'lightgreen'}} exact to='/'>Home</NavLink>
          <NavLink activeStyle={{color: 'lightgreen'}} to='/Cups'>Cups</NavLink>
          <NavLink activeStyle={{color: 'lightgreen'}} to='/Flasks'>Flasks</NavLink>
          <NavLink activeStyle={{color: 'lightgreen'}} to='/Mugs'>Mugs</NavLink>
          <NavLink activeStyle={{color: 'lightgreen'}} to='/Platters'>Platters</NavLink>
          <NavLink activeStyle={{color: 'lightgreen'}} to='/About'>About</NavLink>
          <NavLink activeStyle={{color: 'lightgreen'}} to='/Contact'>Contact</NavLink>
        </nav>
        {this.props.children}
      </div>
    )
  }
}
