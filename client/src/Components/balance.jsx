import React from 'react';
//import Records from './context/records.json';
import Card from './assets/card';
import { UserContext } from "./context/context";


function Balance(){
    const [show, setShow]     = React.useState(true);
    const [status, setStatus] = React.useState('');  
  
    return (
      <Card
        bgcolor="info"
        header="Balance"
        status={status}
        body={show ?
          <BalanceForm setShow={setShow} setStatus={setStatus}/> :
          <BalanceMsg setShow={setShow} setStatus={setStatus}/>}
      />
    )
  
  }
  
  function BalanceMsg(props){
    return(<>
      <h5>Success</h5>
      <button type="submit" 
        className="btn btn-light" 
        onClick={() => {
          props.setShow(true);
          props.setStatus('');
        }}>
          Check balance again
      </button>
    </>);
  }
  
  function BalanceForm(props){
    //const [email, setEmail]   = React.useState('');
    //const [balance, setBalance] = React.useState('');  
    const { user, setUserBalance } = React.useContext(UserContext);
  
    function handle(){
      fetch(`/account/findOne/${user.email}`)
      .then(response => response.text())
      .then(text => {
          try {
              const data = JSON.parse(text);
              props.setStatus('Your current balance is: $' + data.balance);
              props.setShow(false);
              //setBalance(user.balance);
              setUserBalance(data.balance)
              console.log('JSON:', data);
          } catch(err) {
              props.setStatus(text)
              console.log('err:', text);
          }
      });
    }
  
    return (<>
  
      Email: {user.email}<br/><br/>
  
      <button type="submit" 
        className="btn btn-light" 
        onClick={handle}>
          Check Balance
      </button>
  
    </>);
}

export default Balance;