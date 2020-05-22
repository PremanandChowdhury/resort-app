import React, { Component } from "react";
import { RoomContext } from "../Context";

export default class FeaturedRooms extends Component {
  // for public class fields syntax the "static" keyword in used in the contextType
  static contextType = RoomContext;

  render() {
    // storing the value of the context using this.context
    const { greeting, name } = this.context;

    return (
      <div>
        {greeting} {name} from FeaturedRooms
      </div>
    );
  }
}
