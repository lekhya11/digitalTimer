import {Component} from 'react'

import './index.css'

// const startUrl = 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png '
// const pausedUrl = ' https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
const resetUrl = 'https://assets.ccbp.in/frontend/react-js/reset-icon-img.png'

class DigitalTimer extends Component {
  render() {
    return (
      <div className="app-container">
        <h1 className="main-heading">Digital Timer</h1>
        <div className="timer-container">
          <div className="timer-image">
            <div className="circle-time">25:00</div>
          </div>
          <div className="display-container">
            <div className="start-reset-container">
              <div>
                <img src={resetUrl} alt="reset icon" className="icon" />
                <p className="para">Reset</p>
              </div>
            </div>
            <p className="mini-para">Set Timer limit</p>
            <div className="increment-container">
              <button type="button" className="plus-button">
                -
              </button>
              <button type="button" className="button">
                25
              </button>
              <button type="button" className="plus-button">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
