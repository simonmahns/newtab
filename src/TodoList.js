import React, { Component } from "react";
import FlipMove from "react-flip-move";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.createTasks = this.createTasks.bind(this);
  }
  createTasks(item) {
    return (
      <li onClick={() => this.delete(item.key)} key={item.key}>
        <span className="listText">{item.text}</span>
      </li>
    );
  }
  delete(key) {
    this.props.delete(key);
  }
  render() {
    var todoEntries = this.props.entries; //receving the entries
    var listItems = todoEntries.map(this.createTasks); //uses map to create a list where each item is turned into xml

    return (
      <ul className="list">
        <FlipMove duration={150} easing="ease-out">
          {listItems}
        </FlipMove>
      </ul>
    );
  }
}

export default TodoList;
