import React, { Component } from 'react'
import Loading from './Loading.gif'
export default class spinner extends Component {
  render() {
    return (
      <div className="text-center">
    <img src={Loading} alt="Loading"style={{ width: '100px', height: '120px' }}/>
        
      </div>
    )
  }
}
