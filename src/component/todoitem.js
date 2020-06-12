import React, { Component } from "react";

class todoitem extends Component {
  state = {
    isEdit: false
  };

  handleShowItem = () => {
    const { info, handledeleteitem } = this.props;
    return (
      <li className="list-group-item d-flex justify-content-between mb-3 ">
        <h6 className="item-info">{info}</h6>
        <div className="item-option">
          <span
            className="text-success mx-3 "
            onClick={() => this.handleToggleShowUpdate()}
          >
            <i className="fas fa-pen"></i>
          </span>
          <span className="text-danger mx-3" onClick={handledeleteitem}>
            <i className="fas fa-trash"></i>
          </span>
        </div>
      </li>
    );
  };

  handleUpdateItemFinal = e => {
    e.preventDefault();
    const { tempItem, id } = this.props;

    this.handleToggleShowUpdate();

    tempItem(this.input.value, id);
  };

  handleUpdateItem = () => {
    const { info } = this.props;
    return (
      <li className="list-group-item">
        <form className="form-inline" onSubmit={this.handleUpdateItemFinal}>
          <div className="form-group  mb-2">
            <input
              type="text"
              className="form-control"
              ref={v => {
                this.input = v;
              }}
              defaultValue={info}
            />
          </div>
          <button type="submit" className="btn btn-success mb-2">
            confirm update
          </button>
        </form>
      </li>
    );
  };

  handleToggleShowUpdate = () => {
    let isedit = this.state.isEdit;
    this.setState({
      isEdit: !isedit
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.isEdit ? this.handleUpdateItem() : this.handleShowItem()}
      </React.Fragment>
    );
  }
}

export default todoitem;
