

export const users = (resultsObject) => {

    return `
      <section class="user">
        <header>          
            <h2 class="user__name">${resultsObject.name.first}</h2>
        </header>
        <img class="user__image" src="${resultsObject.picture.medium}" />
        <h3 class="user_date">${resultsObject.registered.date}</h3>
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