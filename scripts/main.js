import { getUsers } from "./datamanager.js";
import { userList } from "./userdetail.js";



const applicationElement = document.querySelector(".main",);

applicationElement.addEventListener("click", event => {
    
	if (event.target.id === "1" ) {
       
       window.location.reload();
    
		
	
}})


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