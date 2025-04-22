import AboutImg from '../image/AboutImg.jpg'; 

function AboutUs() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={AboutImg} alt="truck" />
        </div>
        <div className="about-text">
          <span className="about-label">ABOUT US</span>
          <h2>Trusted & Faster Logistic Service Provider</h2>
          <p>
            ShipSync serves thousands of shippers, freight, and courier clients globally with 
            safe, secure and timely services. We’re built to deliver and proud to be your logistics partner.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;