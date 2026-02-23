import React from 'react';

export default function QualityDashboard() {
  return (
    <div>
      <h2>Quality Metrics Dashboard</h2>
      <iframe 
        title="Quality Dashboard"
        src="https://app.powerbi.com/YOUR_QUALITY_REPORT_EMBED_URL"
        className="powerbi-container"
        frameBorder="0"
        allowFullScreen={true}
      />
    </div>
  );
}
