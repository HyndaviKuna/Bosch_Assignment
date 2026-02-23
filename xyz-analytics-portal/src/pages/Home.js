import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="analytics-landing">
      
      <header className="landing-header">
        <div className="header-content">
          <h1>XYZ Retail Analytics Portal</h1>
          <p>Real-time insights for 10 Bangalore outlets</p>
        </div>
      </header>

      
      <main className="landing-main">
        
        <section className="hero-section">
          <div className="hero-info">
            <div className="hero-badge">ENTERPRISE ANALYTICS</div>
            <h2>Complete Business Intelligence Solution</h2>
            <p>
              Monitor sales performance, quality metrics and operational KPIs 
              across all XYZ Retail Chain outlets with interactive Power BI dashboards.
            </p>
            
            <div className="hero-cta1">
              <Link to="/sales" className="btn btn-primary">
                Sales Dashboard
              </Link>
              <Link to="/quality" className="btn btn-secondary">
                Quality Dashboard
              </Link>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="chart-placeholder">
              <div className="chart-icon">📊</div>
              <div className="chart-label">Interactive Dashboard Preview</div>
            </div>
          </div>
        </section>

        
        <section className="metrics-section">
          <h3>Key Capabilities</h3>
          <div className="metrics-grid">
            <div className="metric-item">
              <div className="metric-number">10</div>
              <div className="metric-label">Bangalore Outlets</div>
            </div>
            <div className="metric-item">
              <div className="metric-number">24/7</div>
              <div className="metric-label">Real-time Monitoring</div>
            </div>
            <div className="metric-item">
              <div className="metric-number">100%</div>
              <div className="metric-label">Mobile Responsive</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
