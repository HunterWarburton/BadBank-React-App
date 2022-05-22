import Card from '../../util/card';
export default function Home() {

  return (
    <Card
    className="home-splash"
    bgcolor="info"
    header="Welcome to Bad BankⓇ"
    body={
      
      <>
      
        <p>No security means costs are low!<br/>And we pass the savings on to you</p>
        <div>
          <img src='./bankicon.jpg' alt="wat" width="100%"/>
        </div>
      </>
    }
    />
  )
}