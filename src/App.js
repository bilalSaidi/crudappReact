import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Todoinput from "./component/todoinput";
import Todolist from "./component/todolist";
class App extends Component {
  state = {
    items: [],
    item: ""
  };
  // Delete Item From The List
  handledeleteitem = i => {
    let items = this.state.items;
    let newitems = items.filter(item => {
      return item.id !== i;
    });
    this.setState({
      items: newitems
    });
  };

  // clear list

  handleclearlist = () => {
    this.setState({
      items: []
    });
  };

  // handle chnge input

  handleChangeInput = e => {
    this.setState({
      item: e.target.value
    });
  };

  // handle submit form

  handlesubmitform = e => {
    e.preventDefault();
    if (this.state.item === "") {
      // case the input is empty
      return null;
    } else {
      let myitem = { id: Math.random(), do: this.state.item };
      let items = this.state.items;
      items.push(myitem);

      this.setState({ items, item: "" });
    }
  };

  // handle Edit input
  handleEditInput = (index, value) => {
    // index contain id
    const { items } = this.state;
    let myItem = items.find(item => item.id === index);

    myItem.do = value;

    this.setState({
      items: items
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-10  mx-auto mt-5 myapp">
            <Todoinput
              handleChangeInput={this.handleChangeInput}
              handlesubmitform={this.handlesubmitform}
              handleValueItem={this.state.item}
            />
            <Todolist
              items={this.state.items}
              handledeleteitem={this.handledeleteitem}
              handleclearlist={this.handleclearlist}
              handleEditInput={this.handleEditInput}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
