import React, { Component } from "react";
import items from "./data";

// const MyContext = React.createContext(defaultValue)
const RoomContext = React.createContext();

class RoomProvider extends Component {
  // state: initial state of the props of the data
  state = {
    rooms: [],
    featuredRooms: [],
    sortedRooms: [],
    loading: true,
  };

  // getData: to get data from the remote/ dynamic

  // componentDidMount : when components has mount
  componentDidMount() {
    let rooms = this.formatData(items);
    // filter: with feature key

    let featuredRooms = rooms.filter((room) => room.featured === true);

    // set the state
    this.setState({
      rooms,
      featuredRooms,
      sortedRooms: rooms,
      loading: false,
    });
  }

  // formatData: formats the required data into resuable variables
  formatData(items) {
    // loop through the data get the item: id, images, room return room, and return the tempData.

    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }

  // GET ROOM
  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };

  render() {
    return (
      // <MyContext.Provider value={/* some value */}>
      <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

// const ContextConsumer = MyContext.Consumer
const RoomConsumer = RoomContext.Consumer;

// exporting the context
export { RoomProvider, RoomConsumer, RoomContext };
