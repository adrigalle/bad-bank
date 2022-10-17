function AllData(){
    const ctx = React.useContext(UserContext);
    return (
        <div>
            <h3>All Data Component</h3>
            {JSON.stringify(ctx.users)}
        </div>
    );
}  