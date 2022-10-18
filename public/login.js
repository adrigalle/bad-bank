function Login(){
    const ctx = React.useContext(UserContext);
    const [status, setStatus]       = React.useState('');
    const [reqEmail, setReqEmail]   = React.useState('');
    const [reqPassword, setReqPassword] = React.useState('');
    const [show, setShow] = React.useState(true);
    const [data, setData] = React.useState([]);
    //const users = [];

    React.useEffect(() => {
        async function getData() {
            const res = await fetch('./all-users.json');
            const json = await res.json();
            setData(json.users);
        }
        getData();
    },[])

    const users = [...data];
    const peep = {};
    

    // validate fields to make sure that they even work
    function validate(field, label) {
        if (!field) {
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''),3000);
            // this is to reset status after 3 seconds
            return false;
        }
        return true;
    }
    function validateEmail(email, label) {
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; // simple email validation
        if (!email) {
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''),3000);
            // this is to reset status after 3 seconds
            return false;
        }
        if(validRegex.test(email) == false) {
            setStatus('Please enter a valid email address');
            setTimeout(() => setStatus(''),3000);
            // this is to reset status after 3 seconds
            return false;
        };
        return true;
    }

    function accountValidation(reqEmail, reqPassword) {
        // making all email lower case to check
        const emailCheck = reqEmail.toLowerCase();
        console.log(emailCheck);
        const test1 = users.find(user => {
            if(user.email === emailCheck) {
                console.log(user);
                if(user.password === reqPassword) {
                    ctx.name = user.name;
                    ctx.email = user.email;
                    ctx.password = user.password;
                    ctx.balance = user.balance;
                    return true;
                }
                else return false;

            } 
            else {
                setStatus('Incorrect email or password');
                setTimeout(() => setStatus(''),3000);
                return false;
            };
           
        });

        return true;


    }

    function handleLogin() {
        //theUser(email, password);
        console.log(`${reqEmail} : ${reqPassword}`);
        //console.log(users);
        if (!validateEmail(reqEmail, 'email'))     return;
        if (!validate(reqPassword, 'password'))    return;
        if (!accountValidation(reqEmail, reqPassword)) return;
        console.log(ctx);
        setShow(false);

    }

    return (
        <Card 
            bgcolor="warning"
            header="Login"
            txtcolor="black"
            status={status}
            body={show ? (
                <>
                    Email address<br/>
                    <input type="input" className="form-control" id="email" placeholder="Enter email" value={reqEmail} onChange={e => setReqEmail(e.currentTarget.value)}/><br/>
                    Password<br/>
                    <input type="input" className="form-control" id="password" placeholder="Enter password" value={reqPassword} onChange={e => setReqPassword(e.currentTarget.value)}/><br/>
                    <button type="submit" className="btn btn-light" onClick={handleLogin}>Login</button>
                </>
                ) : (
                <>
                    <h5>Success Logging in!</h5>
                </>

                )}
        />
    );
}  