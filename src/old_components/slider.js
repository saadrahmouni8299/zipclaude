// ============================================================
// COMPONENTS/SLIDER.JS  —  Auto-playing image slider
// ============================================================

(function renderSlider() {
  const root = document.getElementById("slider-root");
  if (!root) return;

  // Slide data
  const slides = [
    {
      img:    "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?w=1400&q=80",
      alt:    "Luxury penthouse terrace",
      topLabel: "LUXURY",
      botLabel: "SERVICE",
    },
    {
      img:    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=80",
      alt:    "Prime Corniche view",
      topLabel: "PRIME",
      botLabel: "VIEWS",
    },
    {
      img:    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1400&q=80",
      alt:    "Elite penthouse living room",
      topLabel: "ELITE",
      botLabel: "LIVING",
    },
  ];

  // Build HTML
  const slidesHTML = slides
    .map(
      (s) => `
      <div class="slide">
        <img src="${s.img}" alt="${s.alt}" loading="lazy" />
        <div class="slide-label tl">${s.topLabel}</div>
        <div class="slide-label br">${s.botLabel}</div>
      </div>`
    )
    .join("");

  root.innerHTML = `
    <div class="slider-wrap" id="discover">
      <div class="slider-track" id="slider-track">
        ${slidesHTML}
      </div>
      <button class="sl-btn prev" id="sl-prev">&#8249;</button>
      <button class="sl-btn next" id="sl-next">&#8250;</button>
      <div class="slider-dots" id="slider-dots"></div>
    </div>
  `;

  // State
  const track    = document.getElementById("slider-track");
  const dotsWrap = document.getElementById("slider-dots");
  const total    = slides.length;
  let current    = 0;
  let timer;

  // Build dots
  slides.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.className = "dot" + (i === 0 ? " active" : "");
    dot.addEventListener("click", () => goTo(i));
    dotsWrap.appendChild(dot);
  });

  function updateDots() {
    document.querySelectorAll(".dot").forEach((d, i) => {
      d.classList.toggle("active", i === current);
    });
  }

  function goTo(index) {
    current = ((index % total) + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    updateDots();
    // Restart auto-play
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 5000);
  }

  // Buttons
  document.getElementById("sl-prev").addEventListener("click", () => goTo(current - 1));
  document.getElementById("sl-next").addEventListener("click", () => goTo(current + 1));

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft")  goTo(current - 1);
    if (e.key === "ArrowRight") goTo(current + 1);
  });

  // Auto-play
  timer = setInterval(() => goTo(current + 1), 5000);
})();
