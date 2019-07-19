import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import App from "./App";
import Home from "./components/Home";
import Restaurants from "./components/Restaurants";
import Restaurant from "./components/Restaurant";
import Cuisines from "./components/Cuisines";
import Cuisine from "./components/Cuisine";
import Card from "./components/Card";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders without crashing", function() {
  shallow(<Home />);
});

it("renders without crashing", function() {
  shallow(<Card />);
});

it("renders without crashing", function() {
  shallow(<Restaurants />);
});

it("renders without crashing", function() {
  shallow(<Restaurant />);
});

it("renders without crashing", function() {
  shallow(<Cuisines />);
});

it("renders without crashing", function() {
  shallow(<Cuisine />);
});
