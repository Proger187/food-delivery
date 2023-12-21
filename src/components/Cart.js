import React, { Component, useState} from 'react'
import { FaShoppingCart, FaTrash } from "react-icons/fa";
import Order from './Order';

const showOrders = (props) => {
    let summ = 0
    props.orders.forEach(el => summ += el.count*Number.parseFloat(el.price));
    return(
      <div>
        {props.orders.map(order => (
          <Order onDelete={props.onDelete} onUp={props.onUp} onDown={props.onDown} key={order.id} item={order}/>
        ))}
        <div className='cart-tools'>
          <p className='summ'>Сумма: {Intl.NumberFormat().format(summ)}сом</p>
        </div>
      </div>
    )
  }
const showNothing = () => {
  return(
    <h2>Пока нет товаров</h2>
  )
}

export default function Cart(props){
    let count = 0
    props.orders.forEach(el => count += el.count);
    let summ = 0
    props.orders.forEach(el => summ += el.count*Number.parseFloat(el.price));
    return (
        <div className='cart-overlay'>
            <div className='shop-cart'>
                <div className='cart-header'>
                    <h2>
                        <FaShoppingCart/> Корзина
                    </h2>
                    <div className='clear-cart' onClick={() => props.onClear()}>
                        <FaTrash className='delete-icon'/> Очистить корзину
                    </div>
                </div>
                {props.orders.length > 0 
                  ?showOrders(props)
                  :showNothing()
                }
              </div>
        </div>
    )
  }
