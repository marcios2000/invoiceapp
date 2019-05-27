import React, {Component} from "react"
import axios from "axios"

class AddCustomers extends Component {
    constructor(props) {
        super(props);
        this.state ={
            code: "",
            name: "",
            address: "",
            city: "",
            state: "",
            zip: "",
            phone: ""
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
              .post("/api/customers", {
                code: this.state.code,
                name: this.state.name,
                address: this.state.address,
                city: this.state.city,
                state: this.state.state,
                zip: this.state.zip,
                phone: this.state.phone

              })
              .then(response => {
                console.log(response.data);
                this.props.changeView("customers")
              })
              .catch(error => {
                console.log(error);

              });
          }} className="addCustomer">
        <button type="submit" className="addcus">Add Customer</button>
        Customer ID<input name="code" onChange={this.handleChange} />
        Name:<input name="name" onChange={this.handleChange} />
        Address:<input name="address" onChange={this.handleChange} />
        City:<input name="city" onChange={this.handleChange} />
        State:<input name="state" onChange={this.handleChange} />
        Zip Code:<input name="zip" onChange={this.handleChange} />
        Phone:<input name="phone" onChange={this.handleChange}/>
        
        


        </form>
        )}
}

export default AddCustomers;