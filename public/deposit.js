function Deposit(){
    const ctx = React.useContext(UserContext);
    const [status, setStatus]       = React.useState('');
    const [deposit, setDeposit] = React.useState('');
    const [balance, setBalance] = React.useState(100);


    function handleDeposit() {
        console.log(deposit);

        //first check if withdrawal not more than total
        let newBalance = parseFloat(balance) + parseFloat(deposit);
        setBalance(newBalance);
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
                    Balance &emsp;&emsp; {balance} <br/><br/>
                    Deposit Amount<br/>
                    <input type="input" className="form-control" id="deposit" placeholder="Deposit Amount" value={deposit} onChange={e => setDeposit(e.currentTarget.value)}/><br/>
                    <button type="submit" className="btn btn-light" onClick={handleDeposit}>Deposit</button>
                </>
            }

            
        
        />
    );
}  