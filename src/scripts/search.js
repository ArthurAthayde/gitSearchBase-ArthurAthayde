import { getUserByName, getUserRepos } from "./requests.js";

export function searchUser() {
    const input = document.querySelector('.user__input');
    const button = document.querySelector('.user__button');

    button.addEventListener('click', async () => {
        const user = await getUserRepos(input.value);
    })

}