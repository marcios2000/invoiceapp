const express = require("express")
const app = express();
const customersController = require("./controllers/customersController")

app.use(express.json());

app.get("/api/customers", customersController.getCustomers)
app.post("/api/customers", customersController.AddCustomers)
app.delete("/api/customers/:name", customersController.deleteCustomers)

app.get("/api/invoices", customersController.getInvoices)
app.post("/api/invoices", customersController.addInvoices)
app.delete("/api/invoices/:name", customersController.deleteInvoices)

const port = 5050

app.listen(port, () => {
    console.log(`Server is Listening on ${port}`)
})


