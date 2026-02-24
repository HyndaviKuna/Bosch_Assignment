import React from 'react';

export default function SalesDashboard() {
  return (
    <div>
      <h1>Sales Dashboard</h1>
      <div
        style={{
           height:"auto", overflow: "hidden", width: "100%", marginTop:"20px"
                ,transform: "scale(1.0)",
       transformOrigin: "top center",
        }}
      >
      <iframe 
        title="Sales Dashboard"
        src="https://drive.google.com/file/d/1zrsszDHczGlZHMWjWbCtC16UJaRIDoIg/preview"
        className="powerbi-container"
        allowFullScreen={true}
      />
      </div>
    </div>
  );
}
