import React, { useState, useEffect } from "react";
import moment from "moment";
import Header from "./header";
import "./styles.css";

import buildCalendar from "./build";
import dayStyles from "./styles";

export default function Calendar({ value, onChange }) {
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);

  return (
    <div className="calendar">
      <Header value={value} onChange={onChange} />

      <div className="body">
        <div className="day-names">
          {["s", "m", "t", "w", "t", "f", "s"].map((d, wd) => (
            <div className="week" key={wd}>
              {d}
            </div>
          ))}
        </div>
        {calendar.map((week, wi) => (
          <div key={wi}>
            {week.map((day, di) => (
              <div
                key={di}
                className={`day`}
                onClick={() => {
                  if (day < moment(new Date()).startOf("day")) return;
                  onChange(day);
                }}
              >
                <div className={dayStyles(day, value)}>
                  {day.format("D").toString()}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
