import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Columns from "react-columns";
import Form from "react-bootstrap/Form";

const Search = ({ fullcountries }) => {
  const [search, setsearch] = useState("");

  const filterCountries = fullcountries.filter((item) => {
    return search !== ""
      ? item.country.toLowerCase().includes(search.toLowerCase())
      : item;
  });

  const countries = filterCountries.map((data, i) => {
    return (
      <Card
        key={i}
        bg="light"
        text="dark"
        className="text-center"
        style={{ margin: "10px" }}
      >
        <Card.Img variant="top" src={data.countryInfo.flag} />
        <Card.Body>
          <Card.Title>{data.country}</Card.Title>
          <Card.Text>Cases {data.cases}</Card.Text>
          <Card.Text>Deaths {data.deaths}</Card.Text>
          <Card.Text>Recovered {data.recovered}</Card.Text>
          <Card.Text>Today's cases {data.todayCases}</Card.Text>
          <Card.Text>Today's deaths {data.todayDeaths}</Card.Text>
          <Card.Text>Active {data.active}</Card.Text>
          <Card.Text>Critical {data.critical}</Card.Text>
        </Card.Body>
      </Card>
    );
  });

  return (
    <div>
      <Form>
        <Form.Group controlId="formGroupSearch">
          <Form.Control
            bg="dark"
            type="text"
            placeholder="Search for country"
            onChange={(e) => setsearch(e.target.value)}
          />
        </Form.Group>
      </Form>
      <Columns>{countries}</Columns>
    </div>
  );
};

export default Search;
