import React, { Component } from "react";
import "../css/Home.css";
import Card from "./Card";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const cardCollection = this.props.collections.map(card => (
      <Card
        title={card.collection.title}
        id={card.collection.collection_id}
        key={card.collection.collection_id}
        image={card.collection.image_url}
        description={card.collection.description}
        url={card.collection.url}
      />
    ));

    return (
      <div className="main-header">
        <div className="homepage-text">
          <div className="homepage-text-background">
            <h1>FOOD PASSION</h1>
            <p>Find the best restaurants, cafés, and bars in San Francisco</p>
          </div>
        </div>
        <div className="home-box">
          <a href="#collections-section">
            <span />
          </a>
          <a href="#collections-section">
            <span />
          </a>
          <a href="#collections-section">
            <span />
          </a>
        </div>
        <div
          id="collections-section"
          className="container-fluid card-collection"
        >
          <div className="row card-collection-row">{cardCollection}</div>
        </div>
      </div>
    );
  }
}

export default Home;
