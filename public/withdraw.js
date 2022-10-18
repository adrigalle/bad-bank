function Withdraw(){
    const ctx = React.useContext(UserContext);
    const [status, setStatus]       = React.useState('');

    function handleWithdraw() {

    }

    return (
        <Card 
            bgcolor="info"
            header="Withdraw"
            txtcolor="black"
            status={status}
            body={
                <>
                    Balance &emsp;&emsp; {JSON.stringify(ctx.users.balance)} <br/><br/>
                    Withdraw Amount<br/>
                    <input type="input" className="form-control" id="withdraw" placeholder="Withdraw Amount"/><br/>
                    <button type="submit" className="btn btn-light" onClick={handleWithdraw}>Withdraw</button>
                </>
            }

            
        
        />
    );
}  