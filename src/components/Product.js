import React, { Component } from 'react'
import {FaPlus} from 'react-icons/fa'

export class Product extends Component {
    constructor(props){
        super(props)
        this.state = {
            current_size:this.props.item.sizes[1],
            type:'традиционное'
        }
        this.setSize = this.setSize.bind(this)
        this.setType = this.setType.bind(this)
      }
      render() {
        return (
          <div className='product-block'>
            <div className='image' onClick={() => this.props.onShow(this.getItem())}>
              <img src={'./images/'+this.props.item.img}/>
            </div>
            <h3>{this.props.item.name}</h3>
            <div className='btns-group'>
              <div className='types-btns'>
                <div className={this.isActiveType('тонкое')} onClick={() => this.setType('тонкое')}>тонкое</div>
                <div className={this.isActiveType('традиционное')} onClick={() => this.setType('традиционное')}>традиционное</div>
              </div>
              <div className='size-tabs'>{this.props.item.sizes.map(size => 
              <div key={size.size} className={this.isActiveSize(size)} onClick={() => this.setSize(size)}>{size.size}</div> 
                )}</div>
            </div>
            <div className='price-block'>
              <b>{this.state.current_size.price}сом</b>
              <button className='add-to-cart-btn' onClick={() => this.props.onAdd(this.getItem())}><FaPlus/> Добавить</button>
            </div>
          </div>
        )
      }
      setType(type){
        this.setState({type:type})
      }
      setSize(size){
        this.setState({current_size:size})
      }
      getItem(){
        const item = {
          id:this.props.item.id,
          name:this.props.item.name,
          img:this.props.item.img,
          type:this.state.type,
          category:this.props.item.category,
          size:this.state.current_size,
          price:this.state.current_size.price
        }
        return item;
      }
      isActiveSize(size){
        if (size === this.state.current_size) {
          return 'size-tab active'
        } else {
          return 'size-tab'
        }
      }
      isActiveType(type){
        if (type === this.state.type) {
          return 'type-btn active'
        } else {
          return 'type-btn'
        }
      }
    }


export default Product
