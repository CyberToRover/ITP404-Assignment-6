export function fetchFollowingMembers() {
    return fetch(`/api/users`, {
        headers: {
            "Accept": "application/json",
        },
    }).then((response) => {
        return response.json();
    });
}

export function followMember(userId) {
    return fetch(`/api/users/`, {
        method: "POST",
        body: JSON.stringify({ id: userId }),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => {
        return response.json();
    });
}

export function unfollowMember(userId) {
    return fetch(`/api/users/${userId}`, {
        method: "DELETE",
    }).then((response) => {
        return response.json();
    });
}