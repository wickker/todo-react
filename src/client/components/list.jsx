import React from "react";

export default class List extends React.Component {
  constructor() {
    super();

    this.state = {
      listArray: [],
    };
  }

  clickHandler() {
    console.log(this.state.listArray);
    let listArray = this.state.listArray;
    alert("Item successfully added to to-do-list!");
  }

  blurHandler(event) {
    let listArray = this.state.listArray;
    listArray.push(event.target.value);
    this.setState({ listArray });
    event.target.value = "";
  }

  render() {
    return (
      <div>
        <div>
          New List Item:{" "}
          <input
            onBlur={(event) => {
              this.blurHandler(event);
            }}
          ></input>
        </div>
        <button
          onClick={() => {
            this.clickHandler();
          }}
        >
          Add Item
        </button>
      </div>
    );
  }
}
