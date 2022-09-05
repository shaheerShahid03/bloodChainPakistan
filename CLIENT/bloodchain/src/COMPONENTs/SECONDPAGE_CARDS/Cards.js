import React from "react";
import Card from "react-bootstrap/Card";
import "./cards.css";

const Cards = () => {
  const cardsData = [
    {
      title: "Become a Donor",
      text: " Some quick example text to build on the card title and make up the  bulk of the card's content.",
      img: "slide.jpg",
      id: 1,
    },
    {
      title: "Why Donate?",
      text: " Some quick example text to build on the card title and make up the  bulk of the card's content.",
      img: "slide.jpg",
      id: 2,
    },
    {
      title: "How Donation Helps",
      text: " Some quick example text to build on the card title and make up the  bulk of the card's content.",
      img: "slide.jpg",
      id: 3,
    },
  ];

  return (
    <div className="Cards_wrapper bgGrey">
      {cardsData.map((cards, index) => {
        return (
          <Card style={{ width: "18rem" }} className="cardDiv" key={index}>
            <Card.Img className="p-2" variant="top" src={cards.img} />
            <Card.Body className="p-2">
              <Card.Title>{cards.title}</Card.Title>
              <Card.Text>{cards.text}</Card.Text>
            </Card.Body>
            <div
              className={
                cards.id === 2
                  ? "bgBlack card_btn colorWhite"
                  : "bgRed card_btn colorWhite"
              }
            >
              Go somewhere
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default Cards;
