import {useEffect, useState} from "react";

function UserDetailsForm({onSave}) {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const user = {"name": name, "password": password};




    return (
        <div>
            <div>
                <label htmlFor={"name"}> Name: </label>
                <input onChange={event => setName(event.target.value)}/>
            </div>
            <div>
                <label htmlFor={"Password"}> Password: </label>
                <input onChange={event => setPassword(event.target.value)}/>
            </div>
            <button onClick={()=>onSave(user)}>
                submit
            </button>
        </div>

    )
}

export default UserDetailsForm;