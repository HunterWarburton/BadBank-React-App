import NavBar from './navbar';
import {Route, HashRouter} from 'react-router-dom';
import Home from './components/Home/home';
import CreateAccount from './components/CreateAccount/createaccount';
import Login from './components/Login/login';
import Deposit from './components/Deposit/deposit';
import Withdraw from './components/Withdraw/withdraw';
import AllData from './components/AllData/alldata';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import * as bootstrap from "bootstrap";


function App() {


  document.addEventListener("DOMContentLoaded", function(){
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function(element){
        return new bootstrap.Tooltip(element);
    });
  });

  return (
   <HashRouter>
    <div className="container-fluid">
    
    <NavBar />
      <Route path="/" exact component={Home} />
      <Route path="/CreateAccount/" component={CreateAccount} />
      <Route path="/login/" component={Login} />
      <Route path="/deposit/" component={Deposit}/>
      <Route path="/withdraw/" component={Withdraw} />
      <Route path="/alldata/" component={AllData} />
      <hr class="solid"></hr>
    </div>
    
   </HashRouter>
   
  );
}

export default App;
