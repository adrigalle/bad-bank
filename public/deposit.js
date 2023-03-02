function Deposit(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  


  return (
    <Card
      bgcolor="warning"
      header="Deposit"
      status={status}
      body={show ? 
        <DepositForm setShow={setShow} setStatus={setStatus}/> :
        <DepositMsg setShow={setShow} setStatus={setStatus}/>}
    />
  )
}

function DepositMsg(props){
  return (<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => {
          props.setShow(true);
          props.setStatus('');
      }}>
        Deposit again
    </button>
  </>);
} 

function DepositForm(props){
  const [amount, setAmount] = React.useState('');
  const { user, userBalance, setUserBalance } = React.useContext(UserContext); 
  
  const btnValidate = () => {
    return amount.length;
  }
  const amountValidate = () => {
      if(!Number(amount)) {
        props.setStatus('Please enter a valid amount');
        setTimeout(() => props.setStatus(''),3000);
        return false;
      }
      return true;
  }
  const amountNegative = () => {
      if(amount < 0) {
        props.setStatus('Please enter a positive amount');
        setTimeout(() => props.setStatus(''),3000);
        return false;
      }
      props.setStatus(`Successfully deposited $${amount} to account!`);
      setTimeout(() => props.setStatus(''),3000);
      console.log(JSON.stringify(user));
      return true;
  }

  function handle(){
    if(!amountValidate(amount)) return;
    if(!amountNegative(amount)) return;
    fetch(`/account/update/${user.email}/${amount}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            props.setStatus('Your new balance is: $' + JSON.stringify(data.value.balance));
            props.setShow(false);
            setUserBalance(data.value.balance);
            console.log('JSON:', data);
        } catch(err) {
            props.setStatus('Deposit failed')
            console.log('err:', text);
        }
    });
  }

  return(<>

    Email: {user.email}<br/><br/>
      
    Amount<br/>
    <input type="number" 
      className="form-control" 
      placeholder="Enter amount" 
      value={amount} onChange={e => setAmount(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}
      disabled={!btnValidate()}>Deposit</button>

  </>);
}