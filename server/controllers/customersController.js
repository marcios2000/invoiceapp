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
    invoice: "21345",
    customerId: "1000",
    price: "34.45",
    name: listCustomers[0].name
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
    const index = listInvoices.findIndex(invoice => invoice.name === req.params.name);
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

