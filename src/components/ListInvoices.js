import React, {Component} from "react"
import axios from "axios"
import ListCustomer from "./ListCustomer"
import DeleteCustomer from './removeCustomer'
import DeleteInvoice from './removeInvoice'


class ListInvoices extends Component {
    constructor(props) {
        super(props);
        this.state ={
            listInvoices: [],
            loading: true,
            error: ""

        }
        this.deleteInvoices = this.deleteInvoices.bind(this)
   }
   componentDidMount(){
       axios.get("/api/invoices").then(response => {
           this.setState({listInvoices: response.data, loading: false});
       }).catch(error => {
           console.log(error);
           this.setState({loading: false, error: "An error occurred"});
       })
   }

   deleteInvoices(newInvoices) {
       this.setState({ listInvoices : newInvoices})
   }

   render() {
       const {listInvoices} = this.state;
       return (
           <section>
               {this.state.loading ? <p>Loading....</p> : null}
               {this.state.error}
               {listInvoices.map(listInvoice=> (
                   <article>
                       <h5>{listInvoice.customerId}</h5>
                       <h5>{listInvoice.invoice}</h5>
                       <h5>{listInvoice.price}</h5>
                       <h5>{listInvoice.name}</h5>
                     
                       <DeleteInvoice  deleteInvoices = {this.deleteInvoices} listInvoice= {listInvoice}/>
                   </article>
               ))}
    
           </section>
       );
   }
}

export default ListInvoices;