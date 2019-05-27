import React, { Component } from "react";
import listCustomers from "./ListCustomers"




class LookUp extends Component {
  constructor() {
    super();

    this.state = {
      filterString: {},
      customers:  []
    };
  }

  handleChange(filter) {
    this.setState({ filterString: filter });
  }

  render() {
    let invoiceToDisplay = this.state.customers
      .filter((element, index) => {
        return element.code == (this.state.filterString);
      })
      .map((element, index) => {
        return <h2 key={index}>{element.name} {element.price}</h2>;
               
      });

      let invoiceByName = this.state.customers
      .filter((element, index) => {
        return element.name == (this.state.filterString);
      })
      .map((element, index) => {
        return <h2 key={index}>{element.name} {element.price}</h2>;
               
      });


    return (
      <div className="App">
      <div>
        <input onChange={e => this.handleChange(e.target.value)} type="text" placeholder="Search by Invoice" className="lookup" />
         {invoiceToDisplay}
         </div>
         <div>
         <input onChange={e => this.handleChange(e.target.value)} type="text" placeholder="Search by Customer Name" className="lookup" />
         {invoiceByName}

         </div>
      </div>
    );
  }
}

export default LookUp;