import React from 'react';
import './ActivityCard.css';

function ActivityCard({ activity }) {
  return (
    <div className="activity-card">
      {/* Existing card content for activity details */}

      {/* Participants Section */}
      <div className="participants-section">
        <h3>Participants</h3>
        <ul>
          {activity.participants && activity.participants.length > 0 ? (
            activity.participants.map((name, idx) => (
              <li key={idx} className="participant-name">{name}</li>
            ))
          ) : (
            <li className="no-participants">No participants yet.</li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default ActivityCard;