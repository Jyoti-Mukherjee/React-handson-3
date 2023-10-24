import React, { Component } from "react";
import Data from "./Data";

class Forms extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      Department: "",
      Rating: "",
      emptyArray: [],
      Var: true,
    };
  }
  
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (
      this.state.name.length > 0 &&
      this.state.Department.length > 0 &&
      this.state.Rating.length > 0
    ) {
      const tempObj = {
        name: this.state.name,
        Department: this.state.Department,
        Rating: this.state.Rating,
      };
      this.state.emptyArray.push(tempObj);
    } else {
      alert("Click Ok For Data");
    }
    this.setState({
      emptyArray: this.state.emptyArray,
      name: "",
      Department: "",
      Rating: "",
      Var: false,
    });
    console.log(this.state.emptyArray);
  };

  dif = () => {
    this.setState({
      Var: !this.state.Var,
    });
  };

  render() {
    return (
      <>
       <h1 id="heading" className="headingOne">
            Employee Feedback Form
          </h1>
        <div className="form">
         
          {this.state.Var ? (
            <form>
              <label id="font" htmlFor="name" className="label">
                Name:{" "}
              </label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={this.handleChange}
                value={this.state.name}
                className="input"
              ></input>{" "}
              
              <label id="font" className="label" htmlFor="Department">
                Department:{" "}
              </label>
              <input
                type="text"
                name="Department"
                id="Department"
                onChange={this.handleChange}
                value={this.state.Department}
                className="input"
              ></input>
            
              <label id="font" className="label" htmlFor="Ratings">
                Rating :
              </label>
              <input
                type="number"
                name="Rating"
                id="Ratings"
                className="input"
                onChange={this.handleChange}
                value={this.state.Rating}
              ></input>
              <br />
              <br />
              <button onClick={this.handleSubmit} className="submitBtn">
                Submit
              </button>
            </form>
          ) : (
            <Data value={this.state.emptyArray} value2={this.dif} />
          )}
        </div>
      </>
    );
  }
}

export default Forms;