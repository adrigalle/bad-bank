const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;
// referencing these from the routing library
// adding this to the outside so that it is global and not just inside SPA
const UserContext = React.createContext(null);


function Spa() {

    return (
      <HashRouter>
        <div>
            <NavBar/>

            <UserContext.Provider value={{users:['peter'], counter: 0}}>
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