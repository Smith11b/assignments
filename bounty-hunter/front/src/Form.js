import React, { Component } from "react";
import axios from "axios";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      bounties: [],
      fname: "",
      lname: "",
      living: true,
      bountyAmount: "",
      type: "Sith"
    };
    this.fnameOnChange = this.fnameOnChange.bind(this);
    this.lnameOnChange = this.lnameOnChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.bountyAmountOnChange = this.bountyAmountOnChange.bind(this);
    this.typeOnChangeHandler = this.typeOnChangeHandler.bind(this);
  }

  fnameOnChange(e) {
    this.setState({ fname: e.target.value });
  }

  lnameOnChange(e) {
    this.setState({ lname: e.target.value });
  }

  bountyAmountOnChange(e) {
    this.setState({ bountyAmount: e.target.value });
  }

  submitHandler(e) {
    e.preventDefault();
    const newBounty = { ...this.state };
    axios.post("/bounties", newBounty);
  }

  typeOnChangeHandler(e) {
    this.setState({
      type: e.target.value
    });
  }
  render() {
    return (
      <div className="form">
        <form action="submit">
          <label for="fname">First Name:</label>
          <input
            name="fname"
            value={this.state.fname}
            onChange={this.fnameOnChange}
          />
          <label for="lname">Last Name:</label>
          <input
            name="lname"
            value={this.state.lname}
            onChange={this.lnameOnChange}
          />
          <label for="bountyAmount">Bounty Amount:</label>
          <input
            name="bountyAmount"
            type="number"
            value={this.state.bountyAmount}
            onChange={this.bountyAmountOnChange}
          />
          <label for="type">Affiliation</label>
          <select onChange={this.typeOnChangeHandler}name="type">
            <option value="Sith">
              Sith
            </option>
            <option value="Jedi">
              Jedi
            </option>
          </select>
          <button onClick={this.submitHandler}>Submit</button>
        </form>
      </div>
    );
  }
}
