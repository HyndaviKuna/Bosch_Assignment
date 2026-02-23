import React from 'react';

export default function QualityDashboard() {
  return (
    <div>
      <h1>Quality Metrics Dashboard</h1>
      <div
        style={{
           height: "100vh", width: "100%", marginTop:"20px"  
          //  ,transform: "scale(1.1)",
      //  transformOrigin: "top center",
        }}
      >
      <iframe 
        title="Quality Dashboard"
        src="https://drive.google.com/file/d/1Laijccx1eZr054mQDzYtWq5PiNzQiCON/preview"
        className="powerbi-container"
        frameBorder="0"
        allowFullScreen={true}
      />
      </div>
    </div>
  );
}
