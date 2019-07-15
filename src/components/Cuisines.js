import React, { Component } from "react";
import Cuisine from "./Cuisine";
import "../css/Cuisines.css";
class Cuisines extends Component {
  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props.location.state.query);
    const cuisines = this.props.location.state.cuisines.map(one => (
      <Cuisine
        name={one.restaurant.name}
        image={one.restaurant.featured_image}
        key={one.restaurant.id}
        cuisines={one.restaurant.cuisines}
        location={one.restaurant.location.locality_verbose}
        url={one.restaurant.url}
      />
    ));
    if (this.props.location.state.cuisines.length > 0) {
      return (
        <div className="cuisine-header">
          <div className="cuisine-text">
            <div className="cuisine-text-background">
              <h1>{this.props.location.state.query}</h1>
            </div>
          </div>
          <div className="container-fluid cuisine-collection">
            <div className="row restaurants-collection-row">{cuisines}</div>
          </div>
        </div>
      );
    }
    return (
      <div className="container-fluid not-found-background">
        <div className="row">
          <div className="col-md cuisines-text">
            <h1>Please Go back</h1>
            <h3>Try one more time!</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Cuisines;
