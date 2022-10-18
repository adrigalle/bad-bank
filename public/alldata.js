function AllData(){
    //const ctx = React.useContext(UserContext);
    //console.log(JSON.stringify(ctx.users));
    const [data, setData] = React.useState([]);

    // React.useEffect(() =>{
    //     setData(ctx.users); 
    // });
    // console.log(data);

    React.useEffect(() => {
        setData(allUsers);
    },[])

    // React.useEffect(() => {
    //     async function getData() {
    //         const res = await fetch('./all-users.json');
    //         const json = await res.json();
    //         setData(json.users);
    //     }
    //     getData();
    // },[])


    return (
        <>
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
                {data.map((user, index) =>(
                    <tr key={index.toString()}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td>{user.balance}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    );
}  