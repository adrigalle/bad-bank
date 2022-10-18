function Login(){
    const ctx = React.useContext(UserContext);
    const [status, setStatus]       = React.useState('');

    function handleLogin() {

    }

    return (
        <Card 
            bgcolor="warning"
            header="Login"
            txtcolor="black"
            status={status}
            body={
                <>
                    Email address<br/>
                    <input type="input" className="form-control" id="email" placeholder="Enter email"/><br/>
                    Password<br/>
                    <input type="input" className="form-control" id="password" placeholder="Enter password"/><br/>
                    <button type="submit" className="btn btn-light" onClick={handleLogin}>Login</button>
                </>
            }

            
        
        />
    );
}  