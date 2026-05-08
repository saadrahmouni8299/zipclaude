import React, { useState, useEffect } from 'react';

const slides = [
  {
    img: "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=1400&q=80",
    alt: "Luxury penthouse terrace",
    topLabel: "LUXURY",
    botLabel: "SERVICE",
  },
  {
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=80",
    alt: "Prime Corniche view",
    topLabel: "PRIME",
    botLabel: "VIEWS",
  },
  {
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&q=80",
    alt: "Elite penthouse living room",
    topLabel: "ELITE",
    botLabel: "LIVING",
  },
];

function Slider() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const goTo = (index) => {
    setCurrent(((index % total) + total) % total);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 5000);

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        setCurrent((prev) => ((prev - 1 + total) % total));
      }
      if (e.key === 'ArrowRight') {
        setCurrent((prev) => (prev + 1) % total);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(timer);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [total]);

  return (
    <div className="slider-wrap" id="discover">
      <div
        className="slider-track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide.img} alt={slide.alt} loading="lazy" />
            <div className="slide-label tl">{slide.topLabel}</div>
            <div className="slide-label br">{slide.botLabel}</div>
          </div>
        ))}
      </div>
      <button className="sl-btn prev" onClick={() => goTo(current - 1)}>
        ‹
      </button>
      <button className="sl-btn next" onClick={() => goTo(current + 1)}>
        ›
      </button>
      <div className="slider-dots">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === current ? 'active' : ''}`}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;