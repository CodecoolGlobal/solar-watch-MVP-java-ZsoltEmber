import UserDetailsForm from "./UserDetailsForm.jsx";
import { useNavigate } from "react-router-dom";
import {useState} from "react";

function LogInUser(){
    const [authenticated, setAuthenticated] = useState(true)
    const navigate = useNavigate();

    const logInUser = (user) => {
        return fetch("/api/user/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        }).then((res) => res.ok? navigate("/main") : setAuthenticated(false))
    }






    return(
        <div>
            <UserDetailsForm onSave={logInUser}/>
            <div>
                {authenticated ? <></> : <div style={{color: "crimson",}}>Unauthenticated</div>}
            </div>
        </div>
    )
}

export default LogInUser;