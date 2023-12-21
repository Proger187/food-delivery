import React, { Component, useState} from 'react'
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import Order from './Order';
import Cart from './Cart';

export default function Header(props){
    let [cartOpen, setCartOpen] = useState(false)
    let count = 0
    props.orders.forEach(el => count += el.count);
    let summ = 0
    props.orders.forEach(el => summ += el.count*Number.parseFloat(el.price));
    return (
      <header>
        <div>
            <a className='Logo'><img height='50' src='images/logo.png'/> <div>
            <span>React Pizza</span>
            <p>самая вкусная пицца во вселенной</p>
              </div></a>
        </div>
        <div className='cart-items' onClick={() => setCartOpen(cartOpen = !cartOpen)}>
          <span>{summ}сом</span>
          <div>
          <FaShoppingCart/> {count}
          </div>
        </div>
        {cartOpen && (
              <Cart onClear={props.onClear} onDelete={props.onDelete} onUp={props.onUp} onDown={props.onDown} orders={props.orders}/>
            )}
      </header>
    )
  }
