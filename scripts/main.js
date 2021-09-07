import { getUsers } from "./datamanager.js";


const showUser = () =>{
    getUsers().then(response => console.log(response))
    

}

showUser();