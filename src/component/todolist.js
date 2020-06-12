import React, { Component } from "react";

import Todoitem from "./todoitem";

class todolist extends Component {
  state = {
    tempItem: "",
    id: ""
  };

  handleTempItem = (valueTemp, indexTemp) => {
    const { handleEditInput } = this.props;
    handleEditInput(indexTemp, valueTemp);
  };
  render() {
    let { items, handledeleteitem, handleclearlist } = this.props;

    return (
      <ul className="todo-list my-5  list-group">
        <h3 className="text-center text-capitalize my-3">to do list</h3>

        {items.length ? (
          items.map(item => {
            return (
              <Todoitem
                info={item.do}
                key={item.id}
                handledeleteitem={() => handledeleteitem(item.id)}
                id={item.id}
                tempItem={this.handleTempItem}
              />
            );
          })
        ) : (
          <li className="list-group-item text-center">there is no task</li>
        )}

        <button
          className="btn btn-danger text-capitalize btn-block mt-3"
          onClick={handleclearlist}
        >
          clear list
        </button>
      </ul>
    );
  }
}

export default todolist;
