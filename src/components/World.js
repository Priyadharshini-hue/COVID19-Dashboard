import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import "bootstrap/dist/css/bootstrap.min.css";
import CurrencyFormat from "react-currency-format";

const World = ({ posts }) => {
  const date = new Date(parseInt(posts.updated));
  //   console.log(posts.updated);
  const postUpdated = date.toString();

  return (
    <div>
      <h2>Global Cases</h2>
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
                value={posts.cases}
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
                value={posts.active}
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
                value={posts.deaths}
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
                value={posts.recovered}
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

export default World;
