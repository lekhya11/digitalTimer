import {Component} from 'react'

import './index.css'

const startUrl = 'https://assets.ccbp.in/frontend/react-js/play-icon-img.png '
const pausedUrl = ' https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
const resetUrl = 'https://assets.ccbp.in/frontend/react-js/reset-icon-img.png'

class DigitalTimer extends Component {
  state = {
    timeValue: 25,
    isStarted: false,
    setSeconds: 0,
  }

  getSeconds = () => {
    const timer = setInterval(() => {
      this.setState(prev => ({setSeconds: prev.setSeconds - 1}))
    }, 1000)
  }

  onClickMinus = () => {
    this.setState(prevState => ({timeValue: prevState.timeValue - 1}))
  }

  onClickPlus = () => {
    this.setState(prevState => ({timeValue: prevState.timeValue + 1}))
  }

  OnClickStart = () => {
    this.setState(prevState => ({isStarted: !prevState.isStarted}))

    this.getSeconds()
  }

  onClickReset = () => {
    this.setState({timeValue: 25})
  }

  render() {
    const {timeValue, isStarted, setSeconds} = this.state

    return (
      <div className="app-container">
        <h1 className="main-heading">Digital Timer</h1>
        <div className="timer-container">
          <div className="timer-image">
            <div className="circle-time">
              <h1 className="time-heading">
                {timeValue}:
                {setSeconds < 10 ? `'0' + {setSeconds}` : {setSeconds}}
              </h1>
              {isStarted ? (
                <p className="time-para">Running</p>
              ) : (
                <p className="time-para">Paused</p>
              )}
            </div>
          </div>
          <div className="display-container">
            <div className="start-reset-container">
              <div className="icon-name">
                <button
                  type="button"
                  className="trans-button"
                  onClick={this.OnClickStart}
                >
                  {isStarted ? (
                    <img src={pausedUrl} alt="pause icon" className="icon" />
                  ) : (
                    <img src={startUrl} alt="play icon" className="icon" />
                  )}
                </button>
                {isStarted ? (
                  <p className="para">Paused</p>
                ) : (
                  <p className="para">Start</p>
                )}
              </div>
              <div className="icon-name">
                <button
                  type="button"
                  className="trans-button"
                  onClick={this.onClickReset}
                >
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

