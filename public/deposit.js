function Deposit(){
    const ctx = React.useContext(UserContext);
    const [status, setStatus]       = React.useState('');

    function handleDeposit() {

    }

    return (
        <Card 
            bgcolor="success"
            header="Deposit"
            txtcolor="black"
            status={status}
            body={
                <>
                    Balance &emsp;&emsp; {JSON.stringify(ctx.users.balance)} <br/><br/>
                    Deposit Amount<br/>
                    <input type="input" className="form-control" id="deposit" placeholder="Deposit Amount"/><br/>
                    <button type="submit" className="btn btn-light" onClick={handleDeposit}>Deposit</button>
                </>
            }

            
        
        />
    );
}  