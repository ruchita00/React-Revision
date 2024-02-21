import React from "react";
import UserClass from "./components/UserClass";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("parent componentdidMount");
  }

  render() {
    console.log("parent render");
    return (
      <div>
        <h1>hello class based component</h1>
        <UserClass name="1 class" location="pune" />
        {/* <UserClass name="2 class" location="mumbai" /> */}
      </div>
    );
  }
}

export default App;
