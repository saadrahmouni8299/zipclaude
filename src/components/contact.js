import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setToastMessage("✓ Message sent! We'll be in touch soon.");
    setShowToast(true);

    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
      setShowToast(false);
    }, 3500);
  };

  return (
    <>
      <section className="contact-section" id="contact">
        <div className="contact-left">
          <h2 className="contact-title">Where are we<br /><span>located?</span></h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="professional@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your message…"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
              style={isSubmitting ? { background: '#2d7a4f' } : {}}
            >
              {isSubmitting ? '✓ Sent!' : 'Submit'}
            </button>
          </form>
        </div>
        <div className="contact-right">
          <iframe
            title="Casablanca Map"
            src="https://maps.google.com/maps?q=Casablanca,Morocco&t=&z=12&ie=UTF8&iwloc=&output=embed"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
      <div className={`toast ${showToast ? 'show' : ''}`}>
        {toastMessage}
      </div>
    </>
  );
}

export default Contact;