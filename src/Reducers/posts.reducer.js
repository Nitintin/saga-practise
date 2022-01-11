export function postReducer(posts = [], action) {
    switch (action.type) {
        case "SET_POST_LIST":
            return (action.payload);

        default:
            console.log("oops!!");
            return posts;
    }
}