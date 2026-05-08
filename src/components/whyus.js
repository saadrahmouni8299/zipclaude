import React from 'react';
import { whyus } from '../data/whyus';

function WhyUs() {
  return (
    <section className="why-section">
      <div className="why-bg"></div>
      <div className="why-inner">
        <div className="why-eyebrow">Why Choose Us</div>
        <h2 className="why-title">The <span>Pentrent</span> Difference</h2>
        <p className="why-sub">Everything you need. Nothing you don't.</p>
        <div className="why-cards">
          {whyus.map((item, index) => (
            <div key={index} className="why-card">
              <div className="why-icon">{item.icon}</div>
              <div className="why-title">{item.title}</div>
              <div className="why-desc">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyUs;