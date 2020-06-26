import React, { Component } from 'react';
import './styles.css';
import RadioMood from './RadioMood';
import { NavLink } from 'react-router-dom';

class LogMood extends Component {
  state = {
    user: this.props.activeUser,
  };
  render() {
    return (
      <div id="LogMoodWrapper">
        <div className="view left">
          <NavLink to="/overview" id="closeButton">
            <img
              id="xButton"
              src="https://image.flaticon.com/icons/svg/565/565313.svg"
              alt="icon"
            ></img>
          </NavLink>
          <h1 id="moodHeader">
            <img
              id="icon"
              src="https://image.flaticon.com/icons/svg/3010/3010884.svg"
              alt="icon"
            ></img>
            Mood of the day
          </h1>
          <div className="logMoodBox">
            <form>
              <fieldset>
                <h3>How do you feel today?</h3>
                <div id="iconContainer">
                  <RadioMood></RadioMood>
                </div>
                <button className="primary-btn" id="logButton">
                  Save
                </button>
              </fieldset>
            </form>
          </div>
        </div>
        <div className="view right">
          <h1 id="tipHead">
            <img
              id="icon"
              src="https://image.flaticon.com/icons/png/512/900/900516.png"
              alt="icon"
            ></img>
            Tips: Healthy Weight
          </h1>
          <div id="tipBox">
            <ol>
              <li>Reduce sugar</li>
              <li>Work out at least 3 times a week</li>
              <li>Drink water</li>
              <li>Reduce carbs</li>
              <li>Exercise protein control and count calories</li>
              <li>Keep healthy lifestyle</li>
              <li>Get good Sleep</li>
              <li>No sugary drinks</li>
              <li>Chew slowly, Eat slowly</li>
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default LogMood;
