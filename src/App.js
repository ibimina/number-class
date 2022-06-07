import React from "react";

class Header extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  state = {};
  render() {
    return (
      <>
        <h1>{this.props.intro}</h1>
        <h2>{this.props.title}</h2>
      </>
    );
  }
}

class Main extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  state = {};
  render() {
    return (
      <>
        <ul>{this.props.evenOddPrime()}</ul>
      </>
    );
  }
}

class App extends React.Component {
  // state = {  }

  evenOddPrime = () => {
    let ne = [];
    let rate = 33;

    for (let i = 0; i <= rate; i++) {
      let flag = true;
      for (let m = 2; m < i - 1; m++) {
        // if (i === 0 && i === 1) {
        //   flag = true;
        // }
        if (i % m === 0) {
          flag = false;
          break;
        }
      }
      if (i % 2 === 0 && !flag) {
        ne.push(
          <li key={i} style={{ backgroundColor: "green" }}>
            {i}
          </li>
        );
      } else if (!i % 2 === 0 && !flag) {
        ne.push(
          <li key={i} style={{ backgroundColor: "red" }}>
            {i}
          </li>
        );
      } else if (flag) {
        ne.push(
          <li key={i} style={{ backgroundColor: "yellow" }}>
            {i}
          </li>
        );
      }
    }
    return ne;
  };
  render() {
    let intro = "30days of React";
    let title = "Number generator";

    return (
      <div className="wrapper">
        <Header intro={intro} title={title} />
        <Main evenOddPrime={this.evenOddPrime} />
      </div>
    );
  }
}

export default App;
