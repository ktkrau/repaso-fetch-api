import React, { useEffect, useState } from "react";

//MANERA SINCRONICA
/* const App = () => {

    const [users, setUsers] = useState([]); 

    useEffect(() => {
        getUsers();

    })
    const getUsers = () => {
       
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                console.log(response.ok);
                return response.json();
            }) 
            .then((data) => {
                console.log(data);
                setUsers(data);
            })
            .catch((error) => {
                console.log(error)
            })
        console.log("hola")
    }
    return (
        <>
        <h1>App React</h1>
        <ul>
            {
                users.length > 0 ?
                users.map((user) => <li key={user.id}>{user.name}</li>): 
                <li>Listado vacío</li>
            }
        </ul>
        </>
    )
} */
//MANERA ASINCRONICA
const App = () => {

    const [users, setUsers] = useState([]); 

    useEffect(() => {
        getUsersAsync();

    })
    const getUsersAsync = async () => {

        try{
          
       
       
        const response = await fetch("https://jsonplaceholder.typicode.com/users", {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(response);

        const info = await response.json();

        console.log(info);

        setUsers(info);
}   catch (error) {
    console.log(error);
}
        console.log("hola")
    }
    return (
        <>
        <h1>App React</h1>
        <ul>
            {
                users.length > 0 ?
                users.map((user) => <li key={user.id}>{user.name}</li>): 
                <li>Listado vvacío</li>
            }
        </ul>
        </>
    )
}

export default App; 