import React from 'react';

export default function QualityDashboard() {
  return (
    <div>
      <h1>Quality Dashboard</h1>
      <div
        style={{
           height: "auto",overflow: "hidden", width: "100%", marginTop:"20px"  
          ,transform: "scale(1.0)",
       transformOrigin: "top center",
          }}
      >
      <iframe 
        title="Quality Dashboard"
        src="https://drive.google.com/file/d/1RsofVuvZiolmSgLtjPyRf2m0ytVejmfG/preview"
        className="powerbi-container"
        allowFullScreen={true}
      />
      </div>
    </div>
  );
}
