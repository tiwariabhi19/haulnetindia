import React from "react";
import "./index.css";

const QuoteModal = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Request a Quote</h2>
        <form>
          <label>Name</label>
          <input type="text" name="name" placeholder="Your Name" required />

          <label>Email</label>
          <input type="email" name="email" placeholder="Your Email" required />

          <label>Service</label>
          <select name="service" required>
            <option value="Freight">Freight</option>
            <option value="Warehousing">Warehousing</option>
            <option value="Consulting">Consulting</option>
          </select>

          <label>Details</label>
          <textarea
            name="details"
            placeholder="Enter details here..."
            required
          ></textarea>

          <div>
            <button type="submit" className="btn">
              Submit
            </button>
            <button onClick={onClose} className="btn">
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuoteModal;
