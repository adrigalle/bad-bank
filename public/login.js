function Login(){
    const ctx = React.useContext(UserContext);
    const [status, setStatus]       = React.useState('');

    function accountValidation(email, password) {
        //I am looking in ctx


    }

    function handleLogin(email, password) {
        //theUser(email, password);

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