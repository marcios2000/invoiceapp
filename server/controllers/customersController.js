const listCustomers = [{
    code: "1",
    name: "Color Customs",
    address: "936 Fort Worth Dr",
    city: "Denton",
    state: "TX",
    zip: "76205",
    phone: "(940)-566-1263"
    
}];


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




module.exports ={
    getCustomers,
    AddCustomers,
    deleteCustomers
};