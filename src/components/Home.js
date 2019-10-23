import React from "react";
import axios from "axios";
import MyPeople from "./MyPeople"
import { Container, } from "semantic-ui-react";

class Home extends React.Component {
  state = { people: [], };

  componentDidMount() {
    axios.get("https://swapi.co/api/people/")
      .then(res =>
        this.setState({
          people: res.data.results,
        })
      )
  }

  render() {
    return (
      <>
        <Container>
          <MyPeople people={this.state.people} />
        </Container>
      </>
    );
  }
}

export default Home;