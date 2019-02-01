import React, { Component } from "react";
import axios from "axios";
import FormList from "./FormList";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      bounties: [],
      fName: "",
      lName: "",
      living: true,
      bounty: "",
      type: "Sith"
    };
    this.fnameOnChange = this.fnameOnChange.bind(this);
    this.lnameOnChange = this.lnameOnChange.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.bountyAmountOnChange = this.bountyAmountOnChange.bind(this);
    this.typeOnChangeHandler = this.typeOnChangeHandler.bind(this);
    this.deleteBounty = this.deleteBounty.bind(this)
    

  }

  fnameOnChange(e) {
    this.setState({ fName: e.target.value });
  }

  lnameOnChange(e) {
    this.setState({ lName: e.target.value });
  }

  async deleteBounty(id){
      await axios.delete(`/bounties/${id}`)
      const bounties =  this.state.bounties.filter(bounty => bounty._id !== id)
      this.setState({bounties});
  }

  bountyAmountOnChange(e) {
    this.setState({ bounty: e.target.value });
  }

  async submitHandler(e) {
    e.preventDefault();
    const newBounty = { ...this.state };
    await axios.post("/bounties", newBounty);
    const bounties = await axios
      .get("/bounties")
      .catch(err => console.log("Couldn't find any bounties"));
      this.setState({
          bounties : bounties.data
      })
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
          <select onChange={this.typeOnChangeHandler} name="type">
            <option value="Sith">Sith</option>
            <option value="Jedi">Jedi</option>
          </select>
          <button onClick={this.submitHandler}>Submit</button>
        </form>
        <FormList bounties={this.state.bounties} delete = {this.deleteBounty} />
      </div>
    );
  }
}
