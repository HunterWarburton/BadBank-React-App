/* eslint-disable jsx-a11y/anchor-is-valid */
import {useContext} from 'react';
import { Store } from './AppState/Store';
import { useLocation } from 'react-router-dom'

export default function NavBar() { 
  const {state} = useContext(Store);
  const location = useLocation();
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">


      <a className="navbar-brand" href="#">BadBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">

          <li className="nav-item">
            <a className={location.pathname==="/CreateAccount/" ? "nav-link active" : "nav-link"} href="#/CreateAccount/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Make NEW credentials">Create Account</a>
          </li>

          <li className="nav-item" hidden={state.currentUser ? 1 : 0}>
            <a className={location.pathname==="/login/" ? "nav-link active" : "nav-link"} href="#/login/" aria-label="login-link" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Enter your credentials to access banking options">{state.currentUser ? "Profile" : "Login"}</a>
          </li>

          <li className="nav-item" hidden={state.currentUser ? 0 : 1}>
            <a className={location.pathname==="/login/" ? "nav-link active" : "nav-link"} href="#/login/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="View your profile">Profile</a>
          </li>

          <li className="nav-item" hidden={state.currentUser ? 0 : 1}>
            <a className={location.pathname==="/deposit/" ? "nav-link active" : "nav-link"} href="#/deposit/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Add Funds">Deposit</a>
          </li>

          <li className="nav-item" hidden={state.currentUser ? 0 : 1}>
            <a className={location.pathname==="/withdraw/" ? "nav-link active" : "nav-link"} href="#/withdraw/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Remove Funds">Withdraw</a>
          </li>
          
          <li className="nav-item">
            <a className={location.pathname==="/alldata/" ? "nav-link active" : "nav-link"} href="#/alldata/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="See All Credentials and Balances">AllData</a>
          </li>    

        </ul>
      </div>
    </nav>
    </>
  );
}