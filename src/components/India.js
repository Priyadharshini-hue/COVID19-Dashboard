import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import "bootstrap/dist/css/bootstrap.min.css";
import CurrencyFormat from "react-currency-format";

const India = ({ posts1 }) => {
  const date = new Date(parseInt(posts1.updated));
  //   console.log(posts.updated);
  const postUpdated = date.toString();

  return (
    <div>
      <h2>India</h2>
      <small id="small">Last updated : {postUpdated}</small>
      <CardDeck>
        <Card
          bg="dark"
          text="white"
          className="text-center"
          style={{ margin: "20px" }}
        >
          <Card.Body>
            <Card.Title>Confirmed</Card.Title>
            <Card.Text>
              <CurrencyFormat
                value={posts1.cases}
                displayType={"text"}
                thousandSeparator={true}
              />
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          bg="dark"
          text="white"
          className="text-center"
          style={{ margin: "20px" }}
        >
          <Card.Body>
            <Card.Title>Active</Card.Title>
            <Card.Text>
              <CurrencyFormat
                value={posts1.active}
                displayType={"text"}
                thousandSeparator={true}
              />
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          bg="dark"
          text="white"
          className="text-center"
          style={{ margin: "20px" }}
        >
          <Card.Body>
            <Card.Title>Deaths</Card.Title>
            <Card.Text>
              <CurrencyFormat
                value={posts1.deaths}
                displayType={"text"}
                thousandSeparator={true}
              />
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          bg="dark"
          text="white"
          className="text-center"
          style={{ margin: "20px" }}
        >
          <Card.Body>
            <Card.Title>Recovered</Card.Title>
            <Card.Text>
              <CurrencyFormat
                value={posts1.recovered}
                displayType={"text"}
                thousandSeparator={true}
              />
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
};

export default India;
