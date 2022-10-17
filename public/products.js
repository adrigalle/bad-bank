function Products(){
    const ctx = React.useContext(UserContext);
    ctx.users.push(Math.random().toString(36).substr(2, 5));
    // this code will add a random string to UserContext
    // everytime click on product, users are being added more to it

    return (
        <div>
            <h3>Products Component</h3>
            <p>List of the the product we make</p>
            {JSON.stringify(ctx.users)}
            {JSON.stringify(ctx.counter)}
        </div>
    );
}  