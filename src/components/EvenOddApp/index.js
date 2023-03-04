import './index.css'
import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state
    const kiran = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="container">
        <h1 className="head">Count {count}</h1>
        <p className="para">Count is {kiran}</p>
        <div>
          <button className="button" type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p>Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default ClickCounter
