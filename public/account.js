function Account(){
    const ctx = React.useContext(UserContext);

    return (
        <div>
            <h3>Welcome to your account {ctx.name}!</h3>
            <p>Here is your account info</p>
            <Card 
                bgcolor="white"
                txtcolor="black"
                header="Here is your account info"
                body={
                    <>
                        Name: &emsp;&emsp;&emsp; {ctx.name} <br/>
                        Email: &emsp;&emsp;&emsp; {ctx.email} <br/>
                        Balance: &emsp;&emsp; {ctx.balance} <br/>
                        <div className="d-grid gap-2 col-8 mx-auto">
                            <button className="btn btn-light">
                                <Link to="/deposit/">Make a Deposit</Link>
                            </button>
                            <button className="btn btn-light">
                                <Link to="/withdraw/">Make a Withdrawal</Link>
                            </button>
                        </div>
                    </>
                }

            />
        </div>
    );
}  