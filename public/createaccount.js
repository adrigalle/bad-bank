function CreateAccount(){
    const ctx = React.useContext(UserContext);
    return (
        <div>
            <h3>Create Account Component</h3>
            {JSON.stringify(ctx.users)}
        </div>
    );
}  