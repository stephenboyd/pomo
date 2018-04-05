import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clockTime: '25:00',
      stage: 0,
      intervalTimer: '',
    }
    this.countDown = this.countDown.bind(this);
  }

  countDown(duration) {
    let timer = duration;
    const interval = setInterval(() => {
      timer = timer - 1;
      let minutes = Math.floor(timer / 60);
      let seconds = timer % 60;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      const clockTime = minutes + ':' + seconds;
      if (this.state.timer < 3) {
        this.nextPeriod();
      }
      this.setState({ clockTime, timer });
    }, 1000)
    this.setState({ intervalTimer: interval })
  }

  nextPeriod() {
    // If stage is odd, then it's time to work.
    // If stage is even, then it's time for a break.
    // If the stage is divisible by 8, it's time for a long break.
    clearInterval(this.state.intervalTimer);
    const work = 25 * 60;
    const shortBreak = 5 * 60;
    const longBreak = 30 * 60;
    let stage = this.state.stage + 1;
    console.log('stage', stage);
    console.log(stage % 8);
    console.log(stage % 2);
    if (stage % 8 === 0) {
      this.countDown(longBreak);
      alert('Take a break for 30 minutes');
    } else if (stage % 2 !== 0) {
      this.countDown(work);
      alert('Work for 25 minutes');
    } else {
      this.countDown(shortBreak);
      alert('Take a break for 5 minutes');
    }
    this.setState({ stage });
  }

  render() {

    return (
      <div className="timer section">
        <button className="start-timer" onClick={() => this.nextPeriod()}>
          Start
        </button>
        <div className="time-message">
          {this.state.stage % 2 ? 'Time to work' : 'Time for a break'}
        </div>
        <div className="clock">{this.state.clockTime}</div>
      </div>
    );
  }
}

export default Timer;
