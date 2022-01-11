import axios from "axios";
import { call, put } from "redux-saga/effects";
import { setPosts, setUsers } from "../Actions/ActionCreator";

const fetchData = (endpoint) => {
    return axios.request({
        method: "get",
        url: endpoint
    })
}

export function* workerSagaUser() {
    let endpoint = "https://jsonplaceholder.typicode.com/users";
    try {
        const user = yield call(() => fetchData(endpoint));
        yield put(setUsers(user.data));
    } catch (e) {
        console.log(e.message);
    }
}

export function* workerSagaPost(item) {
    let endpoint = "https://jsonplaceholder.typicode.com/posts"
    try {
        const post = yield call(() => fetchData(endpoint));
        const filteredPosts = post.data.filter(post => post.userId === item.payload);
        yield put(setPosts(filteredPosts));
    } catch (e) {
        console.log(e.message);
    }
}