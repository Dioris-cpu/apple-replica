import React from "react";

const SectionTwo = () => {
  return (
    <section className="hero iphone-11">
      <div className="container">
        <div className="title-dark">
          <h2 className="title-heading">iPhone 11 </h2>
          <h3 className="title-sub-heading">Just the right amount of everything</h3>
          <p className="title-price">From $16.62/mo. or $399 with trade-in *</p>
        </div>
        <div className="cta">
          <a href="#" className="cta-link">
            {" "}
            Learn More
          </a>
          <a href="#" className="cta-link">
            {" "}
            Buy
          </a>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
