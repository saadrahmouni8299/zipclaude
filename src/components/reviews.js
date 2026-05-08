import React from 'react';
import { reviews } from '../data/reviews';

function Reviews() {
  const renderStars = (stars) => {
    return '★★★★★'.slice(0, stars) + '☆☆☆☆☆'.slice(stars);
  };

  return (
    <section className="section" id="reviews">
      <p className="section-eyebrow">Latest reviews</p>
      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <div className="review-stars">{renderStars(review.stars)}</div>
            <div className="review-rating">{review.stars} Stars</div>
            <div className="review-title">{review.title}</div>
            <div className="review-sub">{review.sub}</div>
            <div className="review-author">{review.author}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;