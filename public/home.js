function Home(){
    const ctx = React.useContext(UserContext);

    return (
        <div>
            <Card 
                txtcolor="black"
                header="BadBank Landing Page"
                title="Welcome to the bank"
                text="You can use this bank jk pls dont cuz this aint actually real thing"
                body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
            />
        </div>
    );
} 
// for the background of the whole card do bgcolor="color"