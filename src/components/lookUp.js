import React, { Component } from "react";
import listCustomers from "./ListCustomers"




class LookUp extends Component {
  constructor() {
    super();

    this.state = {
      filterString: {},
      customers:  [{
        invoice: "654",
        customerId: "1000",
        price: "$2345.45",
        name: "Color Customs"
      },
    {
        invoice: "655",
        customerId: "1001",
        price: "574.56",
        name: "Maaco Collision"
    },

    {
        invoice: "656",
        customerId: "1002",
        price: "$35.45",
        name: "Caliber Collision"
    },
    {
        invoice: "657",
        customerId: "1003",
        price: "$999.43",
        name: "Xtreme Collision Repair"
    },
    {
        invoice: "658",
        customerId: "1004",
        price: "$4374.46",
        name: "4M Paint and Body"
    },
    {   invoice: "659",
        customerId: "1000",
        price: "$445.98",
        name: "Color Customs"

    }]
    };
  }

  handleChange(filter) {
    this.setState({ filterString: filter });
  }

  render() {
    let invoiceToDisplay = this.state.customers
      .filter((element, index) => {
        return element.invoice == (this.state.filterString);
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