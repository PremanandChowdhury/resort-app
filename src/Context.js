import React, { Component } from "react";
// import items from "./data";
import Client from "./Contentful";

// const MyContext = React.createContext(defaultValue)
const RoomContext = React.createContext();

class RoomProvider extends Component {
  // state: initial state of the props of the data
  state = {
    rooms: [],
    featuredRooms: [],
    sortedRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };

  // getData: to get data from the remote/ dynamic
  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "resortRoom",
        order: "sys.createdAt",
      });

      let rooms = this.formatData(response.items);
      let featuredRooms = rooms.filter((room) => room.featured === true);
      let maxPrice = Math.max(...rooms.map((item) => item.price));
      let maxSize = Math.max(...rooms.map((item) => item.size));

      this.setState({
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        loading: false,
        price: maxPrice,
        maxPrice,
        maxSize,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // componentDidMount : when components has mount
  componentDidMount() {
    this.getData();
    // let rooms = this.formatData(items);
    // // filter: with feature key
    // let featuredRooms = rooms.filter((room) => room.featured === true);

    // let maxPrice = Math.max(...rooms.map((room) => room.price));
    // let maxSize = Math.max(...rooms.map((room) => room.size));

    // // set the state
    // this.setState({
    //   rooms,
    //   featuredRooms,
    //   sortedRooms: rooms,
    //   loading: false,
    //   price: maxPrice,
    //   maxPrice,
    //   maxSize,
    // });
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
    // storing all the rooms
    let tempRooms = [...this.state.rooms];
    // storing a single room
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };

  // HANDLE CHANGE
  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    // set initial data of name to the dynamic value
    this.setState(
      {
        [name]: value,
      },
      this.filterRooms
    );
  };

  // show the sortedRooms according to the filter
  filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets,
    } = this.state;

    // all the rooms
    let tempRooms = [...rooms];

    // transform value
    capacity = parseInt(capacity);
    price = parseInt(price);

    // filter by type
    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }

    // filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }

    // filter by price
    tempRooms = tempRooms.filter((room) => room.price <= price);

    // filter by size
    tempRooms = tempRooms.filter(
      (room) => room.size >= minSize && room.size <= maxSize
    );

    // filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === true);
    }

    // filter by pets
    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets === true);
    }

    //  CHANGE STATE
    this.setState({
      sortedRooms: tempRooms,
    });
  };

  render() {
    return (
      // <MyContext.Provider value={/* some value */}>
      // In the value we store the state value and the single room and pass them as a children
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

// const ContextConsumer = MyContext.Consumer
const RoomConsumer = RoomContext.Consumer;

// Higher order function
export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {(value) => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}

// exporting the RoomProvider, RoomConsumer, RoomContext
export { RoomProvider, RoomConsumer, RoomContext };
