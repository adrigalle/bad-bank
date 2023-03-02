function Withdraw(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');  

  return (
    <Card
      bgcolor="success"
      header="Withdraw"
      status={status}
      body={show ? 
        <WithdrawForm setShow={setShow} setStatus={setStatus}/> :
        <WithdrawMsg setShow={setShow} setStatus={setStatus}/>}
    />
  )
}

function WithdrawMsg(props){
  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => {
        props.setShow(true);
        props.setStatus('');
      }}>
        Withdraw again
    </button>
  </>);
}

function WithdrawForm(props){
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
      if(amount > userBalance) {
        props.setStatus('Overdraft! Enter amount lower than balance');
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
      setTimeout(() => props.setStatus(''),3000);
      return true;
  }


  function handle(){
    console.log('Current balance: $' + user.balance + ', amount to withdraw: $' + amount);
    if(!amountValidate(!amount)) return;
    if(!amountNegative(amount)) return;
    fetch(`/account/update/${user.email}/-${amount}`)
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
      value={amount} 
      onChange={e => setAmount(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="btn btn-light" 
      onClick={handle}
      disabled={!btnValidate()}>
        Withdraw
    </button>

  </>);
}
