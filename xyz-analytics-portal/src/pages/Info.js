import React from 'react';

export default function Info() {
  return (
    <div className="analytics-info">
      
      <header className="info-header">
        <div className="header-content">
          <h1>Project Specifications</h1>
          <p>Technical details & implementation overview</p>
        </div>
      </header>

      <main className="info-main">
        
        <section className="overview-section">
          <div className="overview-info">
            <div className="overview-badge">TECHNICAL SPECIFICATION</div>
            <h2>XYZ Retail Analytics Portal</h2>
            <p>
              Complete enterprise analytics solution integrating Power BI dashboards 
              with React frontend for XYZ Retail Chain's 10 Bangalore outlets.
            </p>
          </div>
          
          <div className="overview-visual">
            <div className="tech-stack-preview">
              <div className="stack-item">
                <div className="stack-icon">⚛️</div>
                <div>React 18</div>
              </div>
              <div className="stack-item">
                <div className="stack-icon">📊</div>
                <div>Power BI</div>
              </div>
            </div>
          </div>
        </section>

       
        <section className="specs-section">
          <h3>Technical Specifications</h3>
          <div className="specs-grid">
           
            <div className="spec-card data">
              <div className="spec-icon">📁</div>
              <h4>Data Sources</h4>
              <div className="spec-details">
                <div className="detail-row">
                  <span>xyz_Sales.csv</span>
                  <span>Sales transactions for 10 outlets</span>
                </div>
                <div className="detail-row">
                  <span>xyz_Quality.csv</span>
                  <span>Quality & operational metrics</span>
                </div>
              </div>
            </div>

          
            <div className="spec-card assumptions">
              <div className="spec-icon">🎯</div>
              <h4>Project Assumptions</h4>
              <div className="spec-details">
                <div className="detail-row">
                  <span>Clean datasets</span>
                  <span>Light DAX modeling required</span>
                </div>
                <div className="detail-row">
                  <span>Monthly aggregation</span>
                  <span>Outlet-wise analysis</span>
                </div>
                <div className="detail-row">
                  <span>Brand assets</span>
                  <span>XYZ colors & logo provided</span>
                </div>
              </div>
            </div>

            
            <div className="spec-card tech">
              <div className="spec-icon">⚙️</div>
              <h4>Technology Stack</h4>
              <div className="tech-tags">
                <span className="tag">React 18 + Router v6</span>
                <span className="tag">Power BI Public</span>
                <span className="tag">XYZ Brand Colors</span>
                <span className="tag">Fully Responsive</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
