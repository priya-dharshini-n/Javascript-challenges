import React from "react";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      INITIAL_LIST: {
        "Organize closet": [
          { "Donate old clothes and shoes": false },
          { "Buy new shelf": false },
          { "Put in shelf by color": false }
        ],
        "Finish homework": [
          { "Finish math homework": true },
          { "Finish science homework": false },
          { "Finish Reactjs homework": false }
        ],
        "Achieve nirvana": [
          { "Meditate a little": false },
          { "Gain some wisdom": false }
        ]
      }
    };
  }
  UpdateCompleted = (list, entry, key1) => {
    this.setState((prevState) => ({
      INITIAL_LIST: {
        ...prevState.INITIAL_LIST,
        [list]: [
          ...prevState.INITIAL_LIST[list].map((v, i) =>
            v === entry ? { [key1]: true } : v
          )
        ]
      }
    }));
  };

  render() {
    return (
      <>
        {Object.keys(this.state.INITIAL_LIST).map((value, id1) => (
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div style={{ float: "left" }}>
              <h1>{value}</h1>
              {this.state.INITIAL_LIST[value].map((val, id2) =>
                Object.entries(val).map(([key1, key2]) =>
                  key2 === false ? (
                    <h4
                      style={{ left: "10%", margin: "auto" }}
                      onClick={() => this.UpdateCompleted(value, val, key1)}
                    >
                      {key1}
                    </h4>
                  ) : (
                    ""
                  )
                )
              )}
            </div>
            <div style={{ float: "right" }}>
              <h1>Completed</h1>
              {this.state.INITIAL_LIST[value].map((val, id3) =>
                Object.entries(val).map(([key1, key2]) =>
                  key2 === true ? (
                    <>
                      <del style={{ left: "10%", margin: "auto" }}>{key1}</del>
                      <br />
                    </>
                  ) : (
                    ""
                  )
                )
              )}
            </div>
          </div>
        ))}
      </>
    );
  }
}
export default TodoApp;
