import React from "react";
import styles from "./list.scss";
var moment = require("moment");
moment().format();
import Form from "./form";

export default class List extends React.Component {
  constructor() {
    super();

    this.state = {
      listArray: [],
      errorMsg: "",
      deletedItems: []
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
      let timeNow = moment().format("LLL");
      let string = event.target.value + " | " + timeNow;
      listArray.push(string);
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
    let removed = listArray.splice(id, 1);
    let deletedItems = this.state.deletedItems;
    deletedItems.push(removed[0]);
    this.setState({ listArray, deletedItems });
  }

  render() {
    let list = this.state.listArray.map((element, index) => {
      return (
        <div className={styles.list_item}>
          <p>{this.capitalizeFirstLetter(element)}</p>
          <button
            id={index}
            onClick={(event) => {
              this.remove(event);
            }}
          >
            Delete Item
          </button>
        </div>
      );
    });

    let deletes = this.state.deletedItems.map((element) => {
      return (
        <div className={styles.list_item}>
          <p>{this.capitalizeFirstLetter(element)}</p>
        </div>
      );
    });

    return (
      <div>
        <Form
          blurFunc={(event) => {
            this.blurHandler(event);
          }}
          clickFunc={(event) => {
            this.clickHandler(event);
          }}
          errorMsg={this.state.errorMsg}
        />

        <h1>To-do List</h1>
        <div>Click on item to remove it from the list.</div>
        <div className={styles.list}>{list}</div>
        <h3>Deleted Items:</h3>
        <div className={styles.list}>{deletes}</div>
      </div>
    );
  }
}
