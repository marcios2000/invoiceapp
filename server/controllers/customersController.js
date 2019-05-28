const listCustomers = [{
    code: "1000",
    name: "Color Customs",
    address: "936 Fort Worth Dr",
    city: "Denton",
    state: "TX",
    zip: "76205",
    phone: "(940)-566-1263"
    
},
{   code: "1001",
    name: "Maaco Collision",
    address: "2115 Sadau Ct",
    city: "Denton",
    state: "TX",
    zip: "76210",
    phone: "(940)-220-6073"
    
    
},
{
    code: "1002",
    name: "Caliber Collision",
    address: "718 N Elm",
    city: "Denton",
    state: "TX",
    zip: "76201",
    phone: "(940)-566-8734"
    
},
{
    code: "1003",
    name: "Xtreme Collision Repair",
    address: "15502 Midway RD",
    city: "Addison",
    state: "TX",
    zip: "75001",
    phone: "(972)-233-0207"

}];

const listInvoices = [{
    invoice: "654",
    customerId: "1000",
    price: "$2345.45",
    name: "Color Customs"
},
{   invoice: "655",
    customerId: "1001",
    price: "574.56",
    name: "Maaco Collision"

},
{   invoice: "656",
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
}]


const deleteCustomers = (req, res) => {
    const index = listCustomers.findIndex(customer => customer.name === req.params.name);
    listCustomers.splice(index, 1);
    res.json(listCustomers)
};



const getCustomers = (req, res) => {
    res.json(listCustomers);

};

const AddCustomers = (req, res) => {
    listCustomers.push(req.body);
    res.json(listCustomers);
  };


const getInvoices = (req, res) => {
    res.json(listInvoices);
};

const addInvoices = (req, res) => {
    listInvoices.push(req.body);
    res.json(listInvoices)
};

const deleteInvoices = (req, res) => {
    const {name} = req.params
    const index = listInvoices.findIndex(invoice => invoice.name === name);
    listInvoices.splice(index, 1);
    res.json(listInvoices)
}



module.exports ={
    getCustomers,
    AddCustomers,
    deleteCustomers,
    getInvoices,
    addInvoices,
    deleteInvoices
};

