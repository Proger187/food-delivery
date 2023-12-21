import React, { Component } from 'react'
import {FaPizzaSlice, FaOrcid, FaHamburger, FaYCombinator} from 'react-icons/fa'

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state = {
            categories:[
                {
                    'key':'all',
                    'name':'Все'
                }
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.choose(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories