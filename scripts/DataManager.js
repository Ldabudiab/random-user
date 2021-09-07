export const getUsers = () => {

    return fetch("https://randomuser.me/api/?user")
    .then(response => response.json())
}