import { FETCH_STUDENT , NEW_STUDENT } from "../action/types";
console.log("reduser")
const initialState={
    items:[],
    item:{}
} ;
export default function(state =initialState ,action){
    switch (action.type) {
        case FETCH_STUDENT:
           return{
               ...state,
               items:action.payload
           };
        default:
            return state;
    }
}