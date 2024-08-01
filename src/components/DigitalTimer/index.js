import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {mins: 25, sec: 60}

  secondsReducer = () => {}

  render() {
    const {mins, sec} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Digital Timer</h1>
        <div className="timer-container">
          <div className="timer-card">
            <h1 className="time">
              {' '}
              25:00 <span className="time-position"> Paused</span>
            </h1>
          </div>
          <div className="controller-card">
            <div className="play-pause-reset-card">
              <div>
                <button type="button" className="play-pause-reset-btn">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                    alt="play icon"
                    className="icon"
                  />{' '}
                  Start
                </button>
              </div>

              <div>
                <button type="button" className="play-pause-reset-btn">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                    alt="reset icon"
                    className="icon"
                  />{' '}
                  Reset
                </button>
              </div>
            </div>
            <div>
              <p className="timer-limit-text"> Set Timer Limit</p>
              <div className="plus-minus-card">
                <button className="plus-minus-btn" type="button">
                  -
                </button>

                <p className="timer-limit"> 25</p>
                <button type="button" className="plus-minus-btn">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
