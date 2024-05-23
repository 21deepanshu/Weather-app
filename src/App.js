import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import Weather from "./components/Weather";
import { Container } from "react-bootstrap";

const App = () => (
  <Provider store={store}>
    <Container>
      <Weather />
    </Container>
  </Provider>
);

export default App;
