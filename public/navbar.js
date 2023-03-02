function NavBar(){

  const { user, setUser, setShowUser, setUserBalance } = React.useContext(UserContext);  

  function handleLogout() {
    setShowUser(false);
    setUser({});
    setUserBalance(0);
  }

  return(

    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">

        <a className="navbar-brand" href="#"><img src="BadBank-logo.png" alt="" width="100" className="d-inline-block align-text-top"></img></a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <button type="submit" className="btn btn-light" onClick={handleLogout}>Logout</button>

            <li className="nav-item">
              <a className="nav-link" href="#/deposit/">Deposit</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/withdraw/">Withdraw</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/balance/">Balance</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#/alldata/">AllData</a>
            </li>
          </ul>
          <span className="navbar-text">User logged in: {user.name}</span>
        </div>


      </div>
    </nav>

  );
}