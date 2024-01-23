// TimeLine.js

import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './TimeLine.css'; // Custom styling for the timeline

// const WorkIcon = () => <></>;

const TimeLine = ({ events }) => {
  return (
    <div className="time__line">
      <h1>26<sup>th</sup>January 2024 ( Friday )</h1>
      <div className='timeline__container'></div>
      <VerticalTimeline>
        {events.map((event, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${event.type || 'work'}`}
            contentStyle={{ background: event.background || 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: `7px solid ${event.background || 'rgb(33, 150, 243)'}` }}
            time={event.time}
            // iconStyle={{ background: event.background || 'rgb(33, 150, 243)', color: '#fff' }}
            // icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">{event.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{event.subtitle}</h4>
            <strong><p>{event.time}</p></strong>
            <p>{event.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default TimeLine;
