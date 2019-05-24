import React from 'react';
import ListCustomers from "./components/ListCustomers";
import './App.css';
import AddCustomers from './components/AddCustomer';


function App() {
  return (
    <div className="App">
    <header>
      <img alt ="logo"src="https://www.bakergoodchild.co.uk/wp-content/uploads/2017/08/Invoice-printing-and-mailing-862x881.png"></img>
      <h1>Invoice LookUp</h1>
      <nav>
        <AddCustomers />
        <button>Add Invoice</button>
        <button>Invoice Lookup</button>
        
      </nav>
      <main>
        
      <ListCustomers />
      </main>
    </header>
   
      
    </div>
  );
}

export default App;