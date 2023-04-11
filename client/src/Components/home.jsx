import React from 'react';
import Card from './assets/card';
import { UserContext } from "./context/context";

function Home(){
    const { user } = React.useContext(UserContext);
  
    return (
      <Card
        txtcolor="black"
        header="BadBank Landing Module"
        title="Welcome to the bank"
        text={user.name}
        body={(<img src="bank.png" className="img-fluid" alt="Responsive bank vector"/>)} 
      />
    );  
}

export default Home;