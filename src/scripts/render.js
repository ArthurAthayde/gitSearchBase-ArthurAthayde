import { getUserRepos } from "./requests.js";


export async function renderUserRepos(user){
    const reposList = document.querySelector('.repositoryList__container');
    reposList.innerHTML = ''

    const userInfo = JSON.parse(localStorage.getItem('username'))
    const userRepo = JSON.parse(localStorage.getItem('searchUser'))

    userRepo.forEach(repo => {
      const card = createCard(repo)

      reposList.append(card)
    });

    const userContainer = document.querySelector('.user__container');
    const userAvatar = document.createElement('img');
    const username = document.createElement('h2');

    userAvatar.src = userInfo.avatar_url;
    userAvatar.alt = userInfo.login

    username.innerText = userInfo.login
    username.classList.add('username');

    userContainer.append(userAvatar, username);

    return userContainer;
}


export function createCard(element){
    const repoContainer = document.createElement('li');
    const repoTitle = document.createElement('h2');
    const repoDescription = document.createElement('p');
    const repoBtn = document.createElement('a');
    
    repoContainer.classList.add('repository__container')

    repoTitle.classList.add('repository__title');
    repoTitle.innerText = element.name;

    repoDescription.classList.add('repository__description');
    repoDescription.innerText = element.description;

    repoBtn.classList.add('repositoryBtn');
    repoBtn.innerText = 'Repositório';  
    repoBtn.href = element.html_url; 
    repoBtn.target = '_blank'
    console.log(element.html_url);

    repoContainer.append(repoTitle, repoDescription, repoBtn);

    return repoContainer;
}