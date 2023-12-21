import React, { Component } from 'react'
import Product from './Product'

export class ProductsList extends Component {
  render() {
    return (
      <div className='products-list'>
        {this.props.items.map(item =>
            <Product onShow={this.props.onShow} onAdd={this.props.onAdd} key={item.id} item={item}/>    
        )}
      </div>
    )
  }
}

export default ProductsList
