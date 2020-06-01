import React from "react";
import styles from "./list.scss"

export default class List extends React.Component {
  constructor() {
    super();

    this.state = {
      listArray: [],
    };
  }

  clickHandler() {
    console.log(this.state.listArray);
    alert("Item successfully added to to-do-list!");
  }

  blurHandler(event) {
    let listArray = this.state.listArray;
    listArray.push(event.target.value);
    this.setState({ listArray });
    event.target.value = "";
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {

    let list = this.state.listArray.map((element) => {
      return <li>{this.capitalizeFirstLetter(element)}</li>
    });

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
        <div className={styles.list}>
          <ol>
            {list}
          </ol>
        </div>
      </div>
    );
  }
}
