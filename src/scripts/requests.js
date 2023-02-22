import { renderUserRepos } from "./render.js";

export async function getUserByName(username) {
    const user = await fetch(`https://api.github.com/users/${username}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (response.ok) {
                window.location.replace('../src/pages/profile.html')
                return response.json()
            } else {
                window.location.replace('../src/pages/error.html');
            }
        })

    return user;
}


export async function getUserRepos(username) {
    const userRepo = await fetch(`https://api.github.com/users/${username}/repos`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())

        .then(response => {
            if (response.message == "Not Found") {
                window.location.replace('../src/pages/error.html');
            } else {
                localStorage.setItem('searchUser', JSON.stringify(response))
                window.location.replace('../src/pages/profile.html')
                return response.json()
            }
        })
    return userRepo;
}
