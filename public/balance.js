function Balance(){
    const ctx = React.useContext(UserContext);

    return (
        <div>
            <h3>Balance Component</h3>
            <p>List of the the product we make</p>
            {JSON.stringify(ctx)}
        </div>
    );
}  