import React from "react";
import axios from "axios";



function DeleteInvoice(props) {
    return(
    <article>
        <h5></h5>
        <section>
        <button onClick={ () => 
        axios.delete("/api/invoices/" + props.listInvoice.name).then(response => {
            props.deleteInvoices(response.data)
        })}>Delete</button>
        </section>
    </article>
    )}

export default DeleteInvoice;