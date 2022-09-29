import {Component} from 'react'

import './index.css'

const startUrl = 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png '
// const pausedUrl = ' https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
const resetUrl = 'https://assets.ccbp.in/frontend/react-js/reset-icon-img.png'

class DigitalTimer extends Component {
  state = {
    timeValue: 25,
    // isStarted: false,
  }

  onClickMinus = () => {
    this.setState(prevState => ({timeValue: prevState.timeValue - 1}))
  }

  onClickPlus = () => {
    this.setState(prevState => ({timeValue: prevState.timeValue + 1}))
  }

  render() {
    const {timeValue} = this.state

    return (
      <div className="app-container">
        <h1 className="main-heading">Digital Timer</h1>
        <div className="timer-container">
          <div className="timer-image">
            <div className="circle-time">
              <h1 className="time-heading">{timeValue}:00</h1>
            </div>
          </div>
          <div className="display-container">
            <div className="start-reset-container">
              <div className="icon-name">
                <button type="button" className="trans-button">
                  <img src={startUrl} alt="play icon" className="icon" />
                </button>
                <p className="para">Start</p>
              </div>
              <div className="icon-name">
                <button type="button" className="trans-button">
                  <img src={resetUrl} alt="reset icon" className="icon" />
                </button>
                <p className="para">Reset</p>
              </div>
            </div>
            <p className="mini-para">Set Timer limit</p>
            <div className="increment-container">
              <button
                type="button"
                className="plus-button"
                onClick={this.onClickMinus}
              >
                -
              </button>
              <button type="button" className="button">
                {timeValue}
              </button>
              <button
                type="button"
                className="plus-button"
                onClick={this.onClickPlus}
              >
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
