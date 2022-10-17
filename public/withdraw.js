function Withdraw(){
    const ctx = React.useContext(UserContext);
    return (
        <div>
            <h3>Withdraw Component</h3>
            {JSON.stringify(ctx.users)}
        </div>
    );
}  