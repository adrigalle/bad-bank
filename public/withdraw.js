function Withdraw(){
    const ctx = React.useContext(UserContext);
    const [status, setStatus]       = React.useState('');
    const [withdrawal, setWithdrawal] = React.useState('');
    //const [balance, setBalance] = React.useState(ctx.balance);

    //console.log({balance});

    function handleWithdraw() {
        console.log(withdrawal);
        //first check if withdrawal not more than total
        //let newBalance = parseFloat({balance}) - parseFloat(withdrawal);
        //setBalance(newBalance);
        ctx.balance = parseFloat(ctx.balance) - parseFloat(withdrawal);
        setWithdrawal('');
    }

    return (
        <Card 
            bgcolor="purple"
            header="Withdraw"
            txtcolor="black"
            status={status}
            body={
                <>
                    Balance &emsp;&emsp; {ctx.balance} <br/><br/>
                    Withdraw Amount<br/>
                    <input type="input" className="form-control" id="withdraw" placeholder="Withdraw Amount" value={withdrawal} onChange={e => setWithdrawal(e.currentTarget.value)}/><br/>
                    <button type="submit" className="btn btn-light" onClick={handleWithdraw}>Withdraw</button>
                </>
            }

            
        
        />
    );
}  