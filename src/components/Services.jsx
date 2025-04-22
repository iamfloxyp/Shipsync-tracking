
import delivery from '../image/delivery.jpg';
import freight from '../image/freight.jpg';
import tracking from '../image/tracking.jpg';
import warehouse from '../image/warehouse.jpg';
import support from '../image/support.jpg';
import international from '../image/international.jpg';

function Services() {
  const services = [
    {
      title: 'Express Delivery',
      image: delivery,
      description: 'Fast and reliable delivery within 24–48 hours for urgent packages. Ideal for city-to-city or business-critical deliveries.'
    },
    {
      title: 'Freight & Cargo',
      image: freight,
      description: 'Bulk goods transportation via road, air, or sea. Secure handling of heavy-duty loads across international borders.'
    },
    {
      title: 'Real-Time Tracking',
      image: tracking,
      description: 'Live package tracking with SMS/email notifications. Stay updated on your parcel’s location and delivery status.'
    },
    {
      title: 'Warehousing Solutions',
      image: warehouse,
      description: 'Short-term and long-term storage options with inventory management and secure facilities.'
    },
    {
      title: '24/7 Customer Support',
      image: support,
      description: 'Dedicated support team to assist you anytime. From tracking updates to delivery help, we’re here for you.'
    },
    {
      title: 'International Shipping',
      image: international,
      description: 'Seamless global logistics with customs clearance and reliable international partners.'
    }
  ];

  return (
    <section className="services-section">
      <h2 className="section-title">Our Services</h2>
      <p className="section-intro">
        At ShipSync, we offer comprehensive logistics and supply chain solutions tailored to your needs.
      </p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;