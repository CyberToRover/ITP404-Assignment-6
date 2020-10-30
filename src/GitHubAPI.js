export function fetchOrganization(organization) {
    return fetch(`https://api.github.com/orgs/${organization}/members`, {
        headers: {
            Accept: "application/json",
        },
    }).then((response) => {
        return response.json();
    });
}

export function fetchMemberInfo(username) {
    return fetch(`https://api.github.com/users/${username}`, {
        headers: {
            Accept: "application/json",
        },
    }).then((response) => {
        return response.json();
    });
}

export function fetchMemberRepos(username) {
    return fetch(`https://api.github.com/users/${username}/repos`, {
        headers: {
            Accept: "application/json",
        },
    }).then((response) => {
        return response.json();
    });
}