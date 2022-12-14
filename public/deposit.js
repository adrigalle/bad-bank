function Deposit(){
    const ctx = React.useContext(UserContext);
    const [status, setStatus]       = React.useState('');
    const [deposit, setDeposit] = React.useState('');
    //const [balance, setBalance] = React.useState(ctx.balance);


    function handleDeposit() {
        console.log(deposit);

        //first check if withdrawal not more than total
        //let newBalance = parseFloat(balance) + parseFloat(deposit);
        //setBalance(newBalance);
        ctx.balance = parseFloat(ctx.balance) + parseFloat(deposit);
        setDeposit('');
    }

    return (
        <Card 
            bgcolor="success"
            header="Deposit"
            txtcolor="black"
            status={status}
            body={
                <>
                    Balance &emsp;&emsp; ${ctx.balance} <br/><br/>
                    Deposit Amount<br/>
                    <input type="input" className="form-control" id="deposit" placeholder="Deposit Amount" value={deposit} onChange={e => setDeposit(e.currentTarget.value)}/><br/>
                    <button type="submit" className="btn btn-light" onClick={handleDeposit}>Deposit</button>
                </>
            }

            
        
        />
    );
}  