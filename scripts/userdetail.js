import { dateConverter } from "./date.js";

const users = (resultsObject) => {

    return `
      
        <header>          
            <h2 class="user__name">${resultsObject.name.first} - ${resultsObject.name.last}</h2>
        </header>
        <img class="user__image" src="${resultsObject.picture.medium}" />
        <section>
        <h3 class="user_date">${dateConverter(resultsObject.registered.date)}</h3>
        <h3 class="user_country">${resultsObject.location.country}</h3>
        <h3 class="user_age"> Age: ${resultsObject.dob.age}</h3>
        </section>
     
    `
  }

  export const userList = (allResults) => {
    let postHTML = "";
     
    for (const resultsObject of allResults) {
        postHTML += users(resultsObject)
    }
    return postHTML;

  }