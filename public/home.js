function Home(){
    const ctx = React.useContext(UserContext);
    // this helps us to access the shared context that is being shared by all the components

    ctx.counter ++ ;


    return (
        <div>
            <h3>Home Component</h3>
            <p>Welcome to the site - happy to see you</p>
            {JSON.stringify(ctx.users)}
            {JSON.stringify(ctx.counter)}
        </div>
    );
} 
//just returning a small littl message for now 