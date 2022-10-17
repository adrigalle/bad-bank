function Deposit(){
    const ctx = React.useContext(UserContext);
    return (
        <div>
            <h3>Deposit Component</h3>
            {JSON.stringify(ctx.users)}
        </div>
    );
}  