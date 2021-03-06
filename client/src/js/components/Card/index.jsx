import React, { Component } from 'react';
import './styles.css';
import PieChart from './Chart.js';
import { NavLink } from 'react-router-dom';

class Card extends Component {
  state = {
    user: this.props.activeUser,
    title: this.props.title,
    value: this.props.value,
    image: this.props.image,
    address: this.props.address,
    type: this.props.type,
  };

  CardSwitch(type) {
    switch (type) {
      case '1': // BMI
        return this.ShowImage('BMI');
      case '2': // water
        return this.ShowChart();
      case '3': // calories
        return this.ShowChart();
      case '4': // mood
        return this.ShowImage(this.state.value['value']);
      case '5': // sleep
        return this.ShowSleep(this.state.value['hours'], this.state.value['quality']);
      case '6': // stress
        return this.ShowStress(this.state.value['value']);
      case '7': // medication
        return this.ShowList(this.state.value);
      case '8': // sickness
        return this.ShowSickness(this.state.value);
      case '9': // appointments
        return this.ShowList(this.state.value);
      default:
        return;
    }
  }

  ShowChart() {
    const completed = this.state.value['completed'];
    const remaining = this.state.value['remaining'];
    const unit = this.state.value['unit'];
    const dataset = [completed, remaining, unit];
    return (
      <div>
        <PieChart data={dataset} />
        <p id="cardValue">
          {completed} {unit}
        </p>
      </div>
    );
  }

  ShowImage(value) {
    var imageSrc = '';
    var text = '';
    switch (value) {
      case 'angry':
        imageSrc = 'https://image.flaticon.com/icons/svg/3084/3084520.svg';
        text = 'Angry';
        break;
      case 'sad':
        imageSrc = 'https://image.flaticon.com/icons/svg/3084/3084540.svg';
        text = 'Sad';
        break;
      case 'thoughtful':
        imageSrc = 'https://image.flaticon.com/icons/svg/3084/3084437.svg';
        text = 'Thoughtful';
        break;
      case 'soso':
        imageSrc = 'https://image.flaticon.com/icons/svg/3084/3084473.svg';
        text = 'So So';
        break;
      case 'happy':
        imageSrc = 'https://image.flaticon.com/icons/svg/3084/3084424.svg';
        text = 'Happy';
        break;
      case 'lovely':
        imageSrc = 'https://image.flaticon.com/icons/svg/3084/3084622.svg';
        text = 'Lovely';
        break;
      case 'BMI':
        imageSrc = 'https://image.flaticon.com/icons/svg/3023/3023711.svg';
        text = this.state.value['value'];
        break;
      case 'sick':
        imageSrc =
          'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/230/nauseated-face_1f922.png';
        text = 'Feeling Unwell';
        break;
      case 'healthy':
        imageSrc =
          'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/230/face-with-party-horn-and-party-hat_1f973.png';
        text = 'Healthy!';
        break;
      default:
        imageSrc =
          'https://camo.githubusercontent.com/ec4fa9947e66613fa4315e34dc4cb9581462b4d4/68747470733a2f2f692e696d6775722e636f6d2f6e4f53313264362e676966';
        text = '';
    }
    return (
      <div>
        <img className="cardIcon" alt="card" src={imageSrc}></img>
        <p id="cardValue">{text}</p>
      </div>
    );
  }

  ShowStress(stress) {
    var imageSrc = '';
    const stressInt = parseInt(stress);
    if (stressInt < 4) {
      imageSrc =
        'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/230/grinning-face_1f600.png';
    } else if (stressInt >= 4 && stressInt < 7) {
      imageSrc =
        'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/230/grimacing-face_1f62c.png';
    } else {
      imageSrc =
        'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/230/angry-face_1f620.png';
    }
    return (
      <div>
        <img className="cardIcon" alt="card icon" src={imageSrc}></img>
        <div>
          <input
            className="inputSlider"
            type="range"
            min={0}
            max={10}
            value={stressInt}
            readOnly
          ></input>
          <span id="cardValue">{stress}</span>
        </div>
      </div>
    );
  }

  ShowSleep(hours, quality) {
    var imageSrc =
      'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/facebook/230/sleeping-face_1f634.png';
    var hoursDisplay = '';
    var qualityDisplay = '';

    const hoursInt = parseInt(hours);
    if (hoursInt < 5) {
      hoursDisplay = 'sleepBad';
    } else if (hoursInt >= 5 && hoursInt < 7) {
      hoursDisplay = 'sleepOkay';
    } else {
      hoursDisplay = 'sleepGood';
    }

    if (quality === 'Bad') {
      qualityDisplay = 'sleepBad';
    } else if (quality === 'Normal') {
      qualityDisplay = 'sleepOkay';
    } else {
      qualityDisplay = 'sleepGood';
    }

    return (
      <div>
        <div>
          <p className={hoursDisplay}>
            <img className="sleepIcon" alt="card icon" src={imageSrc}></img>
            {hours} Hours
          </p>
        </div>
        <div>
          <p className={qualityDisplay}>Sleep Quality: {quality}</p>
        </div>
      </div>
    );
  }

  ShowList(list) {
    return (
      <div className="itemList">
        {list.map((item, index) => (
          <div key={index} className="item">
            <span className="eventName">{item['name']} </span>
            <span className="eventTime">{this.fixTime(item['time'])}</span>
            <span className="eventNote">Note: {item['note']}</span>
          </div>
        ))}
      </div>
    );
  }

  fixTime(time) {
    const options = {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };
    const dateTimeValue = new Date(time);
    const dateTimeStr = new Intl.DateTimeFormat('en-US', options).format(dateTimeValue);
    return dateTimeStr;
  }

  ShowSickness(sickness) {
    return (
      <div className="sicknessList">
        {sickness.map((sick, index) => (
          <div key={index} className="sickness">
            {sick}
          </div>
        ))}
      </div>
    );
  }

  render() {
    const add = this.state.address;
    return (
      <NavLink to={add} id="cardWrapper">
        <h2 id="cardTitle">{this.state.title}</h2>
        {this.CardSwitch(this.state.type)}
      </NavLink>
    );
  }
}

export default Card;
