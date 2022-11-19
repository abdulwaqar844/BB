export function user(state, action) {
  switch (action.type) {
    case "LOGGED_IN_USER":
      // console.log(action.payload);
      return  { ...state, user: action.payload };
    default:
      return state;
  }
}
