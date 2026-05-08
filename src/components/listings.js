import React, { useState } from 'react';
import { listings } from '../data/listings';

function Listings() {
  const [showModal, setShowModal] = useState(false);
  const [selectedListing, setSelectedListing] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    moveInDate: '',
    leaseDuration: '',
    occupants: '',
    budget: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
    billingAddress: '',
    message: ''
  });

  const pinIcon = (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
         stroke="#C9A84C" strokeWidth="2"
         strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );

  const handlePriceClick = (listing) => {
    setSelectedListing(listing);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedListing(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      moveInDate: '',
      leaseDuration: '',
      occupants: '',
      budget: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      cardholderName: '',
      billingAddress: '',
      message: ''
    });
  };

  const handleInputChange = (e) => {
    let value = e.target.value;

    // Format card number with spaces
    if (e.target.name === 'cardNumber') {
      value = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
    }

    // Format expiry date with slash
    if (e.target.name === 'expiryDate') {
      value = value.replace(/\D/g, '').replace(/(\d{2})(\d{2})/, '$1/$2');
    }

    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const inquiryDetails = `
🏠 Property: ${selectedListing.loc}
💰 Price: ${selectedListing.price}
📅 Move-in Date: ${formData.moveInDate}
📋 Lease Duration: ${formData.leaseDuration}
👥 Occupants: ${formData.occupants}
💵 Budget: ${formData.budget}

👤 Contact: ${formData.name}
📧 Email: ${formData.email}
📞 Phone: ${formData.phone}

💳 Payment: Card ending in ****${formData.cardNumber.slice(-4)} processed successfully!

Thank you for your booking! We'll send confirmation details to ${formData.email}.
    `;
    alert(`🎉 Booking Confirmed!\n\n${inquiryDetails}`);
    handleCloseModal();
  };

  return (
    <>
      <section className="listings-section" id="listings">
        <div className="listings-grid">
          {listings.map((listing, index) => (
            <div key={index} className="listing-card">
              <img src={listing.img} alt={listing.loc} loading="lazy" />
              <div className="listing-body">
                <div className="listing-location">
                  {pinIcon}
                  <span>{listing.loc}</span>
                </div>
                <div className="listing-specs">{listing.specs}</div>
                <span
                  className={`listing-badge ${listing.dark ? "dark" : "gold"}`}
                  onClick={() => handlePriceClick(listing)}
                  style={{ cursor: 'pointer' }}
                >
                  {listing.price}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="view-all-wrap">
          <button className="view-all-btn">View All &rarr;</button>
        </div>
      </section>

      {showModal && selectedListing && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Rent Inquiry: {selectedListing.loc}</h3>
              <button className="modal-close" onClick={handleCloseModal}>&times;</button>
            </div>
            <div className="modal-body">
              <div className="listing-preview">
                <img src={selectedListing.img} alt={selectedListing.loc} />
                <div>
                  <p><strong>{selectedListing.loc}</strong></p>
                  <p>{selectedListing.specs}</p>
                  <p className="price">{selectedListing.price}</p>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="date"
                    name="moveInDate"
                    placeholder="Desired Move-in Date"
                    value={formData.moveInDate}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <select
                    name="leaseDuration"
                    value={formData.leaseDuration}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Lease Duration</option>
                    <option value="6-months">6 Months</option>
                    <option value="1-year">1 Year</option>
                    <option value="2-years">2 Years</option>
                    <option value="flexible">Flexible Term</option>
                  </select>
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    name="occupants"
                    placeholder="Number of Occupants"
                    min="1"
                    value={formData.occupants}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                  >
                    <option value="">Monthly Budget Range</option>
                    <option value="under-25k">Under 25,000 MAD</option>
                    <option value="25k-35k">25,000 - 35,000 MAD</option>
                    <option value="35k-50k">35,000 - 50,000 MAD</option>
                    <option value="over-50k">Over 50,000 MAD</option>
                  </select>
                </div>

                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '20px', marginTop: '20px' }}>
                  <h4 style={{ marginBottom: '15px', color: 'var(--dark)', fontFamily: 'var(--font-serif)' }}>Payment Information</h4>
                  <p style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '15px' }}>
                    🔒 Demo purposes only. In production, payment data would be securely processed through certified gateways.
                  </p>

                  <div className="form-group">
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="Card Number (1234 5678 9012 3456)"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      maxLength="19"
                      required
                    />
                  </div>

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <div className="form-group" style={{ flex: '1' }}>
                      <input
                        type="text"
                        name="expiryDate"
                        placeholder="MM/YY"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        maxLength="5"
                        required
                      />
                    </div>
                    <div className="form-group" style={{ flex: '1' }}>
                      <input
                        type="text"
                        name="cvv"
                        placeholder="CVV"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        maxLength="4"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      name="cardholderName"
                      placeholder="Cardholder Name"
                      value={formData.cardholderName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      name="billingAddress"
                      placeholder="Billing Address"
                      value={formData.billingAddress}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Special Requests or Questions"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="3"
                  />
                </div>
                <button type="submit" className="submit-btn">Submit Rental Inquiry</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Listings;