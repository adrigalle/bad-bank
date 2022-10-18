function Spa() {
  const [currentUser, setCurrentUser] = React.useState({});

    return (
      <HashRouter>
        <div>
            <NavBar/>
            <UserContext.Provider value={{users:[
                {name:'Abel', email:'abel@mit.edu', password:'secret', balance:100},
                {name:'jane doe', email:'jane@me.com', password:'access123', balance:100},
                {name:'Peter Parker', email:'peter@mit.edu', password:'Passcode321', balance:100},
                {name:'John Smith', email:'john@msn.com', password:'Letmein33', balance:100}
                ]}}>
              <Route path="/" exact         component={Home}     />
              <Route path="/alldata/"       component={AllData}    />          
              <Route path="/balance/"       component={Balance} />
              <Route path="/createaccount/" component={CreateAccount} />
              <Route path="/deposit/"       component={Deposit} />
              <Route path="/login/"         component={Login} />
              <Route path="/withdraw/"      component={Withdraw} />
            </UserContext.Provider>
        </div>
      </HashRouter>
    );
  }
  
  ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
  );
    
  // called SPA fro single page application