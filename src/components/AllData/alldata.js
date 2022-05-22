import {useContext} from 'react';
import {Store} from "../../AppState/Store";
import Card from '../../util/card';

export default function AllData() {

  const { state } = useContext(Store)

  return (
<>
    <hr class="solid"></hr>
    <h3>ADMIN DATA</h3>
<Card
      header="List of all user credentials and balances"
      bgcolor="secondary"
      body= {
    <table className="table" style={{maxWidth: "90%"}}>
      <thead>
        <tr>
          <th scope="col">Email</th>
          <th scope="col">Name</th>
          <th scope="col">Password</th>
          <th scope="col">Balance</th>
        </tr>
      </thead>
      <tbody>
        {state.users.map(element=> {
          return <tr>
          <td>{element.email}</td>
          <td>{element.name}</td>
          <td>{element.password}</td>
          <td>{element.balance}</td>
        </tr>
        })}
      </tbody>
  </table>
      }
/>
</>
  )
}