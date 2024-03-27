import UserDetailsForm from "./UserDetailsForm.jsx";

function CreateUser(){

    const createUser = (user) => {
        return fetch("/api/user/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        }).then((res) => res.json())
    }




    return(
        <div>
        <UserDetailsForm onSave={createUser}/>
        </div>
    )
}

export default CreateUser;