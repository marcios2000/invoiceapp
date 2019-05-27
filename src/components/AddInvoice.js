import React, {Component} from "react"
import axios from "axios"

class AddInvoices extends Component {
    constructor(props) {
        super(props);
        this.state ={
            invoice: "",
            price: "",
            customerId: "",
            
            
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }



    render(){
        
        return(
        <form onSubmit={e => {
            
            axios
              .post("/api/invoices", {
                invoice: this.state.invoice,
                price: this.state.price,
                customerId: this.state.customerId
                

              })
              .then(response => {
                console.log(response.data);
                this.props.changeView("invoices")
              })
              .catch(error => {
                console.log(error);

              });
          }} className="addCustomer">
        <button type="submit" className="addcus">Add </button>
        Customer ID<input name="customerId" onChange={this.handleChange} />
        Invoice:<input name="invoice" onChange={this.handleChange} />
        Price:<input name="price" onChange={this.handleChange} />
        
        
        


        </form>
        
        )}
}

export default AddInvoices;