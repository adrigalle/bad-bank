const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);



// const theUser(email, password) {
//     const [currentUser, setCurrentUser] = React.useState({});
//     let person = {email, password};

//     setCurrentUser(person);
// }

// can add other components that are used throughout here!
// here going to make new card component
function Card(props){
    function classes(){
        const bg = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
        // this will check to see if background color was set to something else, if not then do blank
        const txt = props.txtcolor ? ' text-' + props.txtcolor : ' text-white';
        // checks if the component in other pages has a color, if not then white
        return 'card mb-3 ' + bg + txt;
    }

    return (
        <div className={classes()} style={{maxWidth: "18rem"}}>
            <div className="card-header">{props.header}</div>
            <div className="card-body">
                {props.title && (<h5 className="card-title">{props.title}</h5>)}
                {props.text && (<p className="card-text">{props.text}</p>)}
                {props.body}
                {props.status && (<div id='createStatus'>{props.status}</div>)}
            </div>
        </div>
    );
}

// the props.title thing is checking to see if there even is a title or the rest of the things
// if they dont exist then nothing will be added to the page


function accessAllUsers() {
    
    React.useEffect(() => {
        async function getData() {
            const res = await fetch('./all-users.json');
            const json = await res.json();
            setData(json.users);
        }
        getData();
    },[])

}