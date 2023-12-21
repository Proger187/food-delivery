import React, { Component } from 'react'
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";

export class Order extends Component {
  render() {
    return (
        <div className='order'>
            <div className='image'><img src={"./images/"+this.props.item.img} alt=""/></div>
            <div className='order-content'>
                <h4> {this.props.item.name}</h4>
                <p>{this.props.item.type} тесто, {this.props.item.size.size}</p>
                <div className='order-count'>
                <b>{this.props.item.price}сом</b>
                  <div className='arrows'>
                    <FaPlus className='fa-icon' onClick={() => this.props.onUp(this.props.item)}/>
                    <span>{this.props.item.count}</span>
                    <FaMinus className='fa-icon' onClick={() => this.props.onDown(this.props.item)}/>
                  </div>
                  <FaTrash className='fa-icon' onClick={() => this.props.onDelete(this.props.item)}/>
                </div>
            </div>
        </div>
    )
  }
}

export default Order
