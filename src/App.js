import ProductsList from './components/ProductsList';
import data from './data';
import Header from './components/Header';
import Categories from './components/Categories';
import ShowFullItem from './components/ShowFullItem';
import Footer from './components/Footer';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      products:data,
      orders:[],
      fullItem:{},
      showFullItem:false,
    }
    this.state.current = this.state.products

    this.addToCart = this.addToCart.bind(this)
    this.clearCart = this.clearCart.bind(this)
    this.orderIncrement = this.orderIncrement.bind(this)
    this.orderDecrement = this.orderDecrement.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.onOpenItem = this.onOpenItem.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
  }
  render(){
    return (
      <div className="App">
        <Header onClear={this.clearCart}
        onDelete={this.deleteOrder} orders={this.state.orders}
         onUp={this.orderIncrement} onDown={this.orderDecrement}/>
         <main>
          <Categories choose={this.chooseCategory}/>
          <ProductsList onShow={this.onOpenItem} onAdd={this.addToCart} items={this.state.current}/>
          {this.state.showFullItem && <ShowFullItem onAdd={this.addToCart} onShow={this.onOpenItem} item={this.state.fullItem}/>}
          <Footer/>
         </main>
      </div>
    );
  }
  chooseCategory(category){
    if(category === 'all'){
      this.setState({current:this.state.products})
    }else{
      this.setState({current:this.state.products.filter(item => item.category === category)})
    }
  }
  onOpenItem(item){
    this.setState({showFullItem: !this.state.showFullItem, fullItem:item})
  }
  clearCart(){
    this.setState({orders: []})
  }
  deleteOrder(item){
    this.setState({orders: this.state.orders.filter(el => el !== item)})
  }
  addToCart(item){
    let isInCart = false
    this.state.orders.forEach(el => {
      if(item.id === el.id && item.size === el.size && item.type === el.type){
        isInCart = true
      }
    })
    if (isInCart) {
      const order = this.state.orders.find(el => el.id === item.id && el.size === item.size && item.type === el.type)
      order.count += 1
      this.setState({orders: this.state.orders.map(u => u !== order ? u : order)})
    } else {
      item.count = 1
      this.setState({orders: [...this.state.orders, item]})
    } 
  }
  orderDecrement(item){
    if(item.count > 1){
      item.count -= 1
      this.setState({orders: this.state.orders.map(u => u !== item ? u : item)})
    }else{
      this.setState({orders: this.state.orders.filter(el => el !== item)})
    }
  }
  orderIncrement(item){
    item.count += 1
    this.setState({orders: this.state.orders.map(u => u !== item ? u : item)})
  }
}

export default App;