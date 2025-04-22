import { useState } from "react";
import shiptrack from '../image/shiptrack.jpg'; 

function TrackingPage() {
  const [activeTab, setActiveTab] = useState("rates");

  return (
    <section className="tracking-page">
      {/* Left */}
      <div className="tracking-left">
        <h2>Shipping Details</h2>
        <p>
          We historically build meaningful relationships with our customers. We connect with our customers. We care.
        </p>
        <img src={shiptrack} alt="Shipping" />
      </div>

      {/* Right */}
      <div className="tracking-right">
        <div className="tracking-tabs">
          <button className={activeTab === "rates" ? "active" : ""} onClick={() => setActiveTab("rates")}>
            Shipping Rates
          </button>
          <button className={activeTab === "tracking" ? "active" : ""} onClick={() => setActiveTab("tracking")}>
            Tracking
          </button>
        </div>

        {activeTab === "rates" && (
          <form className="tracking-form">
            <div className="form-group with-icon">
              <label htmlFor="from">From</label>
              <input id="from" type="text" placeholder="Enter origin" />
            </div>
            <div className="form-group with-icon">
              <label htmlFor="to">To</label>
              <input id="to" type="text" placeholder="Enter destination" />
            </div>
            <div className="form-group">
              <label htmlFor="weight">Weight</label>
              <input id="weight" type="text" placeholder="e.g. 10kg" />
            </div>
            <div className="form-group">
              <label htmlFor="length">Length</label>
              <input id="length" type="text" />
            </div>
            <div className="form-group">
              <label htmlFor="width">Width</label>
              <input id="width" type="text" />
            </div>
            <div className="form-group">
              <label htmlFor="height">Height</label>
              <input id="height" type="text" />
            </div>
            <button type="submit" className="send-btn">Send</button>
          </form>
        )}

        {activeTab === "tracking" && (
          <form className="tracking-form tracking-only">
            <label htmlFor="track">Enter Tracking Number</label>
            <input id="track" type="text" placeholder="Enter tracking number...." />
            <button type="submit" className="send-btn">Track</button>
          </form>
        )}
      </div>
    </section>
  );
}

export default TrackingPage;