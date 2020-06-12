import React, { Component } from "react";

class todoinput extends Component {
  

  render() {
    
    
    const { handleChangeInput, handlesubmitform, handleValueItem } = this.props;
    return (
      <div className="card todo-input">
        <h3 className="text-center text-capitalize mt-3">to do input</h3>
        <div className="card-body">
          <form onSubmit={handlesubmitform}>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text bg-primary text-white">
                  <i className="fas fa-book"></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control text-capitalize"
                placeholder="add new task"
                onChange={handleChangeInput}
                value={handleValueItem}
              />
            </div>
            <input
              type="submit"
              value="add"
              className="btn btn-primary btn-block text-capitalize mb-3"
            />
          </form>
        </div>
      </div>
    );
    
  }
}

export default todoinput;
