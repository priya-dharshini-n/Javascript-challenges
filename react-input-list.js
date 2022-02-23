import React, { useState } from "react";
import "./style.css";

const arr = ["abc", "hfew", "fweiweuf"];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: null,
    };
  }

  handleInput = (val, id) => {
    this.setState(
      {
        visible: id,
      },
      () => console.log(this.state.visible)
    );
  };

  render() {
    return (
      <div>
        <ul>
          {arr.map((value, id) => (
            <>
              <li
                key={id}
                onClick={(e) => this.handleInput(e.target.value, id)}
              >
                {this.state.visible === id ? (
                  <input
                    type="text"
                    value={value}
                    onBlur={() => this.setState({ visible: null })}
                  />
                ) : (
                  <p>{value}</p>
                )}
              </li>
            </>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
