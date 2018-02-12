import React, { Component } from 'react';
//import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './NavBar.css'


class NavBar extends Component {
render() {
 return (
    <div className='ParentHeader'>
    <div className='Header' >
        <Link className='navLink' to= "/">Home</Link>
        <Link className='navLink' to= "/Test">Test</Link>


    </div>
  </div>
        )
    }
}
export default NavBar