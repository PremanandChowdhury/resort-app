import React, { Component } from "react";

// const MyContext = React.createContext(defaultValue)
const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    greeting: "Hello how you doing ",
    name: "Prem",
  };

  render() {
    return (
      // <MyContext.Provider value={/* some value */}>

      <RoomContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

// const ContextConsumer = MyContext.Consumer
const RoomConsumer = RoomContext.Consumer;

// exporting the context
export { RoomProvider, RoomConsumer, RoomContext };
