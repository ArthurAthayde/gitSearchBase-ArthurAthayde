import { getUserRepos } from "./requests.js";


export async function renderUserRepos(array){
    const reposList = document.querySelector('.repositoryList__container');
    // reposList.innerHTML = ''

    // const allRepos = await getUserRepos(array)
}

export function renderHeader(element){
    const userContainer = document.querySelector('.user__container');
    const userAvatar = document.createElement('img');
    const username = document.createElement('h2');

    userAvatar.src = element.avatar_url;
    userAvatar.alt = element.login

    username.innerText = element.login
    username.classList.add('username');

    userContainer.append(userAvatar, username);

    return userContainer;
}


function createCard(element){
    const repoContainer = document.createElement('li');
    const repoTitle = document.createElement('h2');
    const repoDescription = document.createElement('p');
    const repoBtn = document.createElement('button');
    
    repoContainer.classList.add('repository__container')

    repoTitle.classList.add('repository__title');
    repoTitle.innerText = element.name;

    repoDescription.classList.add('repository__description');
    repoDescription.innerText = element.description;

    repoBtn.classList.add('repositoryBtn');

    repoContainer.append(repoTitle, repoDescription, repoBtn);

    return repoContainer;
}