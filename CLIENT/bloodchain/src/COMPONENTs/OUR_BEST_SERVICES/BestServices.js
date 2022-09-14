import React from "react";
import "./bestServices.css";
const BestServices = () => {
  const servicesData = [
    {
      title: "Blood Donation",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: "cover.jpg",
      id: "01",
    },
    {
      title: "Health Checkup",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: "cover.jpg",
      id: "02",
    },
    {
      title: "Blood Bank",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      img: "cover.jpg",
      id: "03",
    },
  ];

  return (
    <div>
      <div className="services_wrapper">
        <div className="services_heading">
          <p className="red">WHAT WE DO</p>
          <h1 className="black">OUR BEST SERVICES</h1>
        </div>
      </div>

      <div>
        {servicesData.map((services, index) => {
          return (
            <div
              className={
                services.id === "02" ? "services_card" : "services_cards"
              }
              key={index}
            >
              <img className="service_img" src={services.img} alt="imga" />
              <article className="service_article">
                <h1>
                  <b>{services.id}</b>
                </h1>
                <h3>{services.title}</h3>
                <p>{services.text} </p>
                <div className="service_btn bgRed colorWhite"> Read More</div>
              </article>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BestServices;
