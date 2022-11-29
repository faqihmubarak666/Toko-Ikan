import React, { Component } from "react";
import Footbar from "./components/Footbar";
import NavigationBar from "./components/NavigationBar";
import Advertisement from "./pages/Advertisement";
import Superiority from "./pages/Superiority";
import Testimonial from "./pages/Testimonial";

class App extends Component {
  render() {
    return (
      <>
        <NavigationBar />
        <Advertisement />
        <Superiority />
        <Testimonial />
        <Footbar />
      </>
    );
  }
}
export default App;
