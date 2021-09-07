import { getUsers } from "./datamanager.js";
import { users, userList } from "./userdetail.js";


const showUsers = () => {

    const postElement = document.querySelector(".user");
    getUsers().then((allResults) => {
		postElement.innerHTML = userList(allResults.results);
	})
}
const showUser = () =>{
    getUsers().then(response => console.log(response))
    

}

showUser();
showUsers();