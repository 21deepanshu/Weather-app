import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../redux-services/actions/weatherActions";
import { Form, Button, Alert, Card } from "react-bootstrap";

const Weather = () => {
  const [location, setLocation] = useState("");
  const dispatch = useDispatch();
  const weatherState = useSelector((state) => state.weather);
  const { weatherData, error } = weatherState;

  const handleSearch = () => {
    if (location) {
      dispatch(fetchWeather(location));
    }
  };
  console.log(weatherData, "Response.......");
  return (
    <>
      <h1 style={{ margin: "auto", textAlign: "center" }}>WHEATHER APP</h1>
      <div style={{ padding: 20, maxWidth: 600, margin: "0 auto" }}>
        <Form
          inline
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          <Form.Control
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            style={{ marginRight: 10, flexGrow: 1 }}
          />
          <Button onClick={handleSearch} variant="primary">
            Search
          </Button>
        </Form>
        {error && (
          <Alert variant="danger" style={{ textAlign: "center" }}>
            {error}
          </Alert>
        )}
        {weatherData && (
          <Card style={{ marginTop: 20 }}>
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                {weatherData.location.name}
              </Card.Title>
              <Card.Text
                style={{ textAlign: "center", textTransform: "capitalize" }}
              >
                {weatherData.current.condition.text}
              </Card.Text>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginTop: 20,
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <Card.Text>Temperature:</Card.Text>
                  <Card.Text style={{ fontWeight: "bold" }}>
                    {weatherData.current.temp_c}°C
                  </Card.Text>
                </div>
                <div style={{ textAlign: "center" }}>
                  <Card.Text>Feels like:</Card.Text>
                  <Card.Text style={{ fontWeight: "bold" }}>
                    {weatherData.current.feelslike_c}°C
                  </Card.Text>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  marginTop: 20,
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <Card.Text>Humidity:</Card.Text>
                  <Card.Text style={{ fontWeight: "bold" }}>
                    {weatherData.current.humidity}%
                  </Card.Text>
                </div>
                <div style={{ textAlign: "center" }}>
                  <Card.Text>Wind speed:</Card.Text>
                  <Card.Text style={{ fontWeight: "bold" }}>
                    {weatherData.current.wind_kph} kph
                  </Card.Text>
                </div>
              </div>
            </Card.Body>
          </Card>
        )}
      </div>
    </>
  );
};

export default Weather;
