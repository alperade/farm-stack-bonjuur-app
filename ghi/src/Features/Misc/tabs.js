import React, { useState } from "react";
import { Tab } from "react-bootstrap";
import { Tabs } from "react-bootstrap";
import { ListRestaurants } from "../Events/ListRestaurants";
import { ListAttractions } from "../Events/ListAttractions";
import { ListEvents } from "../Events/ListEvents";


function SearchTabs() {
  const [key, setKey] = useState("home");


  return (
    <div>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="home" title="Restaurants">
          <ListRestaurants />
        </Tab>
        <Tab eventKey="events" title="Events">
          <ListEvents />
        </Tab>
        <Tab eventKey="attractions" title="Attractions">
          <ListAttractions />
        </Tab>
      </Tabs>
    </div>
  );
}

export default SearchTabs;
