import React, { Component } from "react";
import { Link } from "react-router-dom";

class Card extends Component {
  render() {
    return (
      <div className="col-sm-4">
        <Link to={`/restaurants/${this.props.id}`}>
          <div
            className="card"
            style={{
              backgroundImage: `url(${this.props.image})`,
              backgroundSize: "cover"
            }}
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <h6 className="card-description">{this.props.description}</h6>
          </div>
        </Link>
      </div>
    );
  }
}

export default Card;
