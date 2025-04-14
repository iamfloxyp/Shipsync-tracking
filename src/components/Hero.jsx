import plane from "../image/plane.png"

function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${plane})` }}>
      <div className="overlay"></div> 
      <div className="hero-content">
        <h1>Revolutionizing Shipping with Ease</h1>
        <p>
          ShipSync is your trusted logistics partner, offering seamless tracking,
          efficient deliveries, and secure transactions worldwide.
        </p>
        <a href="#explore" className="cta">Explore Now</a>
      </div>
    </section>
  );
}

export default Hero;