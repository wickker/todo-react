import React from "react";
import styles from "./list.scss";

export default class List extends React.Component {
  constructor() {
    super();

    this.state = {
      listArray: [],
      errorMsg: "",
    };
  }

  clickHandler() {
    console.log(this.state.listArray);
  }

  blurHandler(event) {
    let listArray = this.state.listArray;
    if (event.target.value.length <= 1 || event.target.value.length >= 200) {
      let errorMsg =
        "Please enter a valid string input between 1 and 200 characters";
      this.setState({ errorMsg });
    } else {
      let errorMsg = "";
      listArray.push(event.target.value);
      this.setState({ listArray, errorMsg });
      event.target.value = "";
      // alert("Item successfully added to to-do-list!");
    }
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  remove(event) {
    let id = event.target.id;
    console.log(id);
    let listArray = this.state.listArray;
    listArray.splice(id, 1);
    this.setState({ listArray });
  }

  render() {
    let list = this.state.listArray.map((element, index) => {
      return <li id={index} onClick={(event) => {
        this.remove(event);
      }}>{this.capitalizeFirstLetter(element)}</li>;
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
        
        {/* <div>
          Remove List Item Number:{" "}
          <input
            onBlur={(event) => {
              this.blurHandlerRemove(event);
            }}
          ></input>
        </div> */}
        <br />
        <button
          onClick={() => {
            this.clickHandler();
          }}
        >
          Add Item
        </button>
        <div className={styles.errorMsg}>{this.state.errorMsg}</div>
        <h1>To-do List</h1>
        <div>Click on item to remove it from the list.</div>
        <div className={styles.list}>
          <ol>{list}</ol>
        </div>
      </div>
    );
  }
}
