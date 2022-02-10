import * as c from "../constants/index"

const initialState = {
    authToken: null,
    currentUser: null,
}
export const authReducer = (state = initialState, action) => {
    switch(action.type){
        case c.LOGIN:
        return{
            ...state, // copies the previous state
            authToken : action.payload.authToken,
            // currentUser : action.payload.currentUser
        }
        case c.LOGOUT:
        return{
            ...initialState //reset the data back to its initial state
        }
        default :
        return state
    }
}