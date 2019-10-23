import React from "react";
import MyPeople from "./components/MyPeople";
import Home from "./components/Home";
import { Container } from 'semantic-ui-react';
import { Switch, Route, } from "react-router-dom";

const App = () => (
  <>
  <Container>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/people/:id" component={MyPeople} />
    </Switch>
  </Container>
  </>
)

export default App;
