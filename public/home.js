function Home(){
  const { user, setUser } = React.useContext(UserContext);

  return (
    <Card
      txtcolor="black"
      header="BadBank Landing Module"
      title="Welcome to the bank"
      text={user.name}
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)} 
    />
  );  
}
