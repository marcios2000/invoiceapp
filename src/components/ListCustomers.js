import React, {Component} from "react"
import axios from "axios"
import ListCustomer from "./ListCustomer"
import DeleteCustomer from './removeCustomer'


class ListCustomers extends Component {
    constructor(props) {
        super(props);
        this.state ={
            listCustomers: [],
            loading: true,
            error: ""

        }
        this.deleteCustomers = this.deleteCustomers.bind(this)
   }
   componentDidMount(){
       axios.get("/api/customers").then(response => {
           this.setState({listCustomers: response.data, loading: false});
       }).catch(error => {
           console.log(error);
           this.setState({loading: false, error: "An error occurred"});
       })
   }

   deleteCustomers(newCustomers) {
       this.setState({ listCustomers : newCustomers})
   }

   render() {
       const {listCustomers} = this.state;
       return (
           <section>
               {this.state.loading ? <p>Loading....</p> : null}
               {this.state.error}
               {listCustomers.map(listCustomer => (
                   <article>
                       <h5>{listCustomer.code}</h5>
                       <h5>{listCustomer.name}</h5>
                       <h5>{listCustomer.address}</h5>
                       <h5>{listCustomer.city}</h5>
                       <h5>{listCustomer.state}</h5>
                       <h5>{listCustomer.zip}</h5>
                       <h5>{listCustomer.phone}</h5>
                       <DeleteCustomer  deleteCustomers = {this.deleteCustomers} listCustomer= {listCustomer}/>
                   </article>
               ))}
    
           </section>
       );
   }
}

export default ListCustomers;