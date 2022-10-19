function NavBar(){
    const ctx = React.useContext(UserContext);
    const [loggedIn, setLoggedIn] = React.useState(loggedInDecision);
    let loggedInDecision = false;

    const checkUser = (user) => {
        if(!user) return false;
        return true;
    }

    console.log(JSON.stringify(loggedIn));

    React.useEffect(() =>{
        if(!checkUser(ctx)) return;
        setLoggedIn(true);
        console.log('render');
    },[loggedIn])



return(
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">
                <img src="/src/images/BadBank-logo.png" alt="" width="100" className="d-inline-block align-text-top"></img>
            </Link>
            <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="nav">
                            <li className="nav-item bg-nav">
                                <Link className="nav-link" to="/account/">Account</Link>
                            </li>
                            <li className="nav-item bg-nav">
                                <Link className="nav-link" to="/deposit/">Deposit</Link>
                            </li>
                            <li className="nav-item bg-nav">
                                <Link className="nav-link" to="/withdraw/">Withdraw</Link>
                            </li>
                            <li className="nav-item bg-nav">
                                <Link className="nav-link" to="/alldata/">All Data</Link>
                            </li>
                            <li className="nav-item bg-nav">
                                <Link className="nav-link" to="/CreateAccount">Create Account</Link>
                            </li>
                            <li className="nav-item bg-nav">
                                <Link className="nav-link" to="/login/">Login</Link>
                            </li>
                </ul>
            </div>
        </div>
    </nav>
); 
}

// add login button + logout button that resets current user

// don't totally need home but just in case here it is

{/* <li className="nav-item bg-nav">
<Link className="nav-link" to="/">Home</Link>
</li> */}


{/* <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">
                <img src="/src/images/BadBank-logo.png" alt="" width="100" className="d-inline-block align-text-top"></img>
            </Link>
            <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="nav">


                        <>
                            <li className="nav-item bg-nav">
                                <Link className="nav-link" to="/CreateAccount">Create Account</Link>
                            </li>
                            <li className="nav-item bg-nav">
                                <Link className="nav-link" to="/login/">Login</Link>
                            </li>
                            <li className="nav-item bg-nav">
                                <Link className="nav-link" to="/deposit/">Deposit</Link>
                            </li>
                            <li className="nav-item bg-nav">
                                <Link className="nav-link" to="/withdraw/">Withdraw</Link>
                            </li>
                            <li className="nav-item bg-nav">
                                <Link className="nav-link" to="/balance/">Balance</Link>
                            </li>
                            <li className="nav-item bg-nav">
                                <Link className="nav-link" to="/alldata/">All Data</Link>
                            </li>
                            <button>
                                <Link className="nav-link" onClick={logout}>Logout</Link>
                            </button>
                        </>

                        <>
                            <button>
                                <Link className="nav-link" to="/CreateAccount">Create Account</Link>
                            </button>
                            <button>
                                <Link className="nav-link" to="/login/">Login</Link>
                            </button>
                        </>


                </ul>
            </div>
        </div>
    </nav> */}