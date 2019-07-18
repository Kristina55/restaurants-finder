import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className="col-sm-4">
        <a href={`/restaurants/${this.props.id}/#restaurants-header-section`}>
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
        </a>
      </div>
    );
  }
}

export default Card;
