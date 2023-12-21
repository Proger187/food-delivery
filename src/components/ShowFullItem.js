import React, { Component } from 'react'
import {FaPlus} from 'react-icons/fa'

export class ShowFullItem extends Component {
  render() {
    return (
      <div className='full-item'>
        <div>
            <div className='image'>
            <img src={'./images/'+this.props.item.img}/>
            </div>
            <div className='item-desc'>
              <h2>{this.props.item.name}</h2>
              <b>Цена: {this.props.item.price}сом</b>
              <button className='add-to-cart-btn' onClick={() => this.props.onAdd(this.props.item)}><FaPlus/> Добавить</button>
            </div>
            <span class="close" onClick={() => this.props.onShow(this.props.item)}>&times;</span>
        </div>
      </div>
    )
  }
}

export default ShowFullItem

