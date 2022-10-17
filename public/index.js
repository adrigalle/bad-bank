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
            <h1>Routing - Hello World</h1>
            <Nav/>
            <hr/>
            <UserContext.Provider value={{users:['peter'], counter: 0}}>
              <Route path="/" exact    component={Home}     />
              <Route path="/about/"    component={About}    />          
              <Route path="/products/" component={Products} />
            </UserContext.Provider>
        </div>
      </HashRouter>
    );
  }
  // <hr> is a horizontal rule
  // the little -- separate out the links in the navigation bar (not using styles yet so theyd be too close to each other)
  // the user context
  
  ReactDOM.render(
    <Spa/>,
    document.getElementById('root')
  );
    
  // called SPA fro single page application