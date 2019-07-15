import React, { Component } from "react";

class Restaurant extends Component {
  render() {
    return (
      <div className="col-sm-4">
        <a href={this.props.url}>
          <div
            className="card"
            style={{
              backgroundImage: `url(${this.props.image})`,
              backgroundSize: "cover"
            }}
          />

          <div className="card-body">
            <h5 className="card-title">{this.props.name}</h5>
            <h6 className="card-description">{this.props.location}</h6>
            <p>{this.props.cuisines}</p>
          </div>
        </a>
      </div>
    );
  }
}

export default Restaurant;
