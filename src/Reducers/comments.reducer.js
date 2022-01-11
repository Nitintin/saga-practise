export function commentReducer(comments = [], action) {
    switch (action.type) {
        case "FETCH_COMMENTS_LIST":
            return (comments);

        default:
            return comments;

    }
}