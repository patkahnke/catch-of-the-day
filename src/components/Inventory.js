import React from "react";
import AddFishForm from "./AddFishForm";

class Inventory extends React.Component {
  render() {
    return (
      <div>
        <div className="inventory">
          <h2>Inventory</h2>
        </div>
        <AddFishForm addFish={this.props.addFish}/>
      </div>
    );
  }
}

export default Inventory;
