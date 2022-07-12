// Write your code here

import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state={
      count:0
  }

  ChangeNumber=()=>{
    const min = 1;
    const max = 100;
    const rand =  Math.floor(min + Math.random() * (max - min));
    this.setState({
      count:rand
    })
  }


  render() {
    const {count}=this.state
    return (
      <div className='random-generator-card'>
        <h1>Random Generator</h1>
        <p>generate a Random number in a range of 1 to 100</p>
        <button type="button" className="generate-button" onClick={this.ChangeNumber}>
          generate
        </button>
        <h1 className='count-color'>{count}</h1>
      </div>
    )
  }
}

export default RandomNumberGenerator
