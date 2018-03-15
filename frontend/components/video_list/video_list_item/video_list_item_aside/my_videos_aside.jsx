import React from "react";
import { Link } from 'react-router-dom';
import { monthDay } from '../../../../util/dates'

export default ({ timeStamp }) => {
  const { month, day } = monthDay(timeStamp);
  return(
    <div className="calendar">
      <div className="bindings">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div>
        <span className="month">{month}</span>
        <span className="day">{day}</span>
      </div>
    </div>);
};
