import React from 'react';

export default function LoadingScreen() {
  return (
    <div id="loading">
      <div className="loader">
        <svg width="50" height="50" viewBox="0 0 50 50">
          <circle cx="25" cy="25" r="20" fill="none" stroke="#A8D5BA" strokeWidth="5">
            <animate attributeName="stroke-dasharray" dur="1.5s" repeatCount="indefinite" from="0 150" to="150 150" />
          </circle>
        </svg>
      </div>
    </div>
  );
}