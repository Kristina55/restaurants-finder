// import React, { Component } from "react";
// import Cuisine from "./Cuisine";
// class Cuisines extends Component {
//   static defaultProps = {};

//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     const cuisines = this.props.location.state.cuisines.map(one => (
//       <Cuisine
//         name={one.restaurant.name}
//         image={one.restaurant.featured_image}
//         key={one.restaurant.id}
//         cuisines={one.restaurant.cuisines}
//         location={one.restaurant.location.locality_verbose}
//         url={one.restaurant.url}
//       />
//     ));
//     if (this.props.location.state.cuisines.length > 0) {
//       return (
//         <div>
//           <div className="row restaurants-collection-row">{cuisines}</div>
//         </div>
//       );
//     }
//     return (
//       <img
//         src="
//   https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
//       />
//     );
//   }
//   // let cuisines = this.props.location.state.cuisines;
// }

// export default Cuisines;
