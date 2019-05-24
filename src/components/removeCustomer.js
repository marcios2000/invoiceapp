import React from "react";
import axios from "axios";



function DeleteCustomer(props) {
    return(
    <article>
        <h5></h5>
        <section>
        <button onClick={ () => 
        axios.delete("/api/customers/" + props.listCustomer.name).then(response => {
            props.deleteCustomers(response.data)
        })}>Delete</button>
        </section>
    </article>
    )}

export default DeleteCustomer;