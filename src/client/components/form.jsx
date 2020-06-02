import React from "react";
import styles from "./list.scss";
var moment = require("moment");
moment().format();

export default class Form extends React.Component {
  render() {
    return (
      <div>
        New List Item:{" "}
        <input
          onBlur={this.props.blurFunc}
        ></input>
        <br />
        <button
          onClick={this.props.clickFunc}
        >
          Add Item
        </button>
        <div className={styles.errorMsg}>{this.props.errorMsg}</div>
      </div>
    );
  }
}
