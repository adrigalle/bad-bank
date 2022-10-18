function Withdraw(){
    const ctx = React.useContext(UserContext);
    const [status, setStatus]       = React.useState('');
    const [withdrawal, setWithdrawal] = React.useState('');
    const [balance, setBalance] = React.useState(100);

    function handleWithdraw() {
        console.log(withdrawal);
        //first check if withdrawal not more than total
        let newBalance = parseFloat(balance) - parseFloat(withdrawal);
        setBalance(newBalance);
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
                    Balance &emsp;&emsp; {balance} <br/><br/>
                    Withdraw Amount<br/>
                    <input type="input" className="form-control" id="withdraw" placeholder="Withdraw Amount" value={withdrawal} onChange={e => setWithdrawal(e.currentTarget.value)}/><br/>
                    <button type="submit" className="btn btn-light" onClick={handleWithdraw}>Withdraw</button>
                </>
            }

            
        
        />
    );
}  