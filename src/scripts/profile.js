import { renderUserRepos } from "./render.js";

function showProfile(){
    const user = JSON.parse(localStorage.getItem('searchUser'));

   renderUserRepos(user)
}

showProfile()