export function userReducer(users = [], action) {
    switch (action.type) {
        case "SET_USER_LIST":
            return (action.payload);

        default: console.log("oops!");
            return users

    }
}