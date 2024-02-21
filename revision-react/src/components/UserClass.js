import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy data",
        location: "default",
      },
    };

    console.log(this.props.name + "child constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + "child componentdidMount");
    //API Call
    //loads- render-api-
    const data = await fetch("https://api.github.com/users/ruchita00");
    const josn = await data.json();
    console.log(josn);

    this.setState({ userInfo: josn });
  }

  componentDidUpdate(prevPros, prevState) {
    // if (
    //   // [] -- array dependency
    //   this.state.userInfo.name !== prevState.userInfo.name ||
    //   this.state.userInfo.name !== prevState.userInfo.name
    // )

    this.timer = setInterval(() => {
      console.log("hello op");
    }, 1000);
    console.log("component did update");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("componentWillUnmount");
  }
  render() {
    console.log("child render");
    return (
      <div>
        {/* <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          button
        </button> */}
        <h1>Name: {this.state.userInfo.name}</h1>
        <h2>Loctaion: {this.state.userInfo.location}</h2>
      </div>
    );
  }
}

export default UserClass;
