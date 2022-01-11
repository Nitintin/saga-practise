export function fetchUsers() {
    return { type: "FETCH_USER_LIST" }
}

export function fetchPosts(item) {
    return { type: "FETCH_POST_LIST", payload: item }
}

export function fetchComments() {
    return { type: "FETCH_COMMENTS_LIST" }
}

export function setUsers(item) {
    return { type: "SET_USER_LIST", payload: item }
}

export function setPosts(item) {
    return { type: "SET_POST_LIST", payload: item }
}