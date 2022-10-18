function Spa() {

    return (
      <HashRouter>
        <div>
            <NavBar/>
            <UserContext.Provider value={{}}>
              <Route path="/login/"         component={Login} />
              <Route path="/" exact         component={Home}     />
              <Route path="/alldata/"       component={AllData}    />          
              <Route path="/balance/"       component={Balance} />
              <Route path="/createaccount/" component={CreateAccount} />
              <Route path="/deposit/"       component={Deposit} />
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

  //  {{users:[
  //   {name:'Abel', email:'abel@mit.edu', password:'secret', balance:100},
  // ]}}