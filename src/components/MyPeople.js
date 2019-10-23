import React, { useEffect, useState, } from "react";
import { List, } from "semantic-ui-react";
import axios from "axios";

const MyPeople = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.co/api/people/")
      .then(res => setPeople(res.data.results))
  }, []);

  return (
    <List>
      { people.map( people =>
        <List.Item key={people.id}>
          <List.Content>
            <List.Header>{ people.name }</List.Header>
          </List.Content>
        </List.Item>
      )}
    </List>
  )
}

export default MyPeople;