function Home(){
    const ctx = React.useContext(UserContext);
    // this helps us to access the shared context that is being shared by all the components
    return (
        <div>
            <h3>Home Component</h3>
            <p>Welcome to the site - happy to see you</p>
            {JSON.stringify(ctx.users)}
        </div>
    );
} 
//just returning a small littl message for now 