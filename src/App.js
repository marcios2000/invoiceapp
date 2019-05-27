import React from 'react';
import ListCustomers from "./components/ListCustomers";
import './App.css';
import AddCustomers from './components/AddCustomer';
import ListInvoices from './components/ListInvoices';
import AddInvoices from './components/AddInvoice';
import LookUp from './components/lookUp';



function App() {
  return (
    <div className="App">
    <header>
      <img alt ="logo"src="https://www.bakergoodchild.co.uk/wp-content/uploads/2017/08/Invoice-printing-and-mailing-862x881.png"></img>
      <h1>Invoice LookUp</h1>
      <div>
        <div >
          <nav className="inputboxes">
            <div >
          <AddCustomers />
          <div className="listcustomers">
          <ListCustomers />
          </div>
          </div>
          <div>
          <AddInvoices />
          <div className="listinvoices">
          <ListInvoices />
          </div>
          </div>
        
          <search><LookUp /></search>
         
          </nav>
        </div>
      </div>
      <main>
        <div></div>
        <div></div>
       
        
      
      
      </main>
    </header>
   
      
    </div>
  );
}

export default App;