import React, { useState } from 'react';
//import Records from './context/records.json';
import { UserContext } from "./context/context";

function AllData(){
    const [users, setUsers] = React.useState([]); 
    const { user, showUser, userBalance } = React.useContext(UserContext); 

    const [data, setData] = useState("");


    React.useEffect(() => {
        
        // fetch all accounts from API
        fetch('/account/all')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setUsers([...data]);  
                setData(JSON.stringify(data));

            });

    }, []);

    return (
    <>
        <h5>All Data in Store:</h5>

        <table className="table table-hover table-bordered table-sm w-50">
            <thead>
                <tr>
                    <th className="th-lg" scope="col">Name</th>
                    <th className="th-lg" scope="col">Email</th>
                    <th className="th-lg" scope="col">Password</th>
                    <th className="th-lg" scope="col">Balance</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) =>(
                    <tr key={index.toString()}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td>${user.balance}</td>
                    </tr>
                ))}
            </tbody>
        </table>

        {showUser ? (
            <>
                <h5>Current user</h5>
                <table className="table table-hover table-bordered table-sm w-50">
                    <thead>
                        <tr>
                            <th className="th-lg" scope="col">Name</th>
                            <th className="th-lg" scope="col">Email</th>
                            <th className="th-lg" scope="col">Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>${userBalance}</td>
                        </tr>
                    </tbody>
                </table>
            </>
        ): (
            <h5>No Current User</h5>
        )}
    </>);
}
 

export default AllData;
