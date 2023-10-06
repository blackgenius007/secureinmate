import React, { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'; // Icons for expand/collapse

const CourtScheduleThumbnail = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const courtSchedule = [
    { date: '2023-11-10', time: '10:00 AM', location: 'Courtroom 1', caseNumber: 'C12345' },
    { date: '2023-11-15', time: '2:30 PM', location: 'Courtroom 2', caseNumber: 'C67890' },
    // ... more schedule data
  ];

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', marginBottom: '20px', borderRadius: '10px', background: 'linear-gradient(to bottom, rgba(255, 165, 0, 0.2), rgba(255, 165, 0, 0.1))', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}>
      <h3 style={{ marginBottom: '10px' }}>Court Appearances</h3>
      <ul style={{ paddingLeft: '20px', listStyleType: 'none' }}>
        {courtSchedule.map((schedule, index) => (
          <li key={index} style={{ marginBottom: '5px' }}>
            <strong>Date:</strong> {schedule.date}
            {isExpanded && (
              <React.Fragment>
                <br />
                <strong>Time:</strong> {schedule.time}<br />
                <strong>Location:</strong> {schedule.location}<br />
                <strong>Case Number:</strong> {schedule.caseNumber}<br />
              </React.Fragment>
            )}
            <br />
          </li>
        ))}
      </ul>
      <button onClick={() => setIsExpanded(!isExpanded)} style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
        {isExpanded ? <FaAngleUp /> : <FaAngleDown />}
        <span style={{ marginLeft: '10px' }}>
          {isExpanded ? 'Collapse' : 'Expand for More Info'}
        </span>
      </button>
    </div>
  );
};

export default CourtScheduleThumbnail;


