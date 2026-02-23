import React from 'react';

export default function SalesDashboard() {
  return (
    <div>
      <h2>Sales Performance Dashboard</h2>
      <iframe 
        title="Sales Dashboard"
        src="https://app.powerbi.com/YOUR_SALES_REPORT_EMBED_URL"
        className="powerbi-container"
        frameBorder="0"
        allowFullScreen={true}
      />
    </div>
  );
}
