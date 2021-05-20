import React from 'react';
import './styles/button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to='listing'>
      <button className='btn'>Sell An Item</button>
    </Link>
  );
}    