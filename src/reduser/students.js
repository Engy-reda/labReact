export const students = (state={},action)=>{
    console.log(state)
    console.log("done")
    switch(action.type){
        case 'STUDENT_LIST':{
            return {
                ...state,
                list:action.payload
            }
        }
        case 'STUDENT_DETAILS':{    
            return {
                ...state,
                details:action.payload}
        }
        
        case 'STUDENT_ADD':{
            return{...state,
                add:action.payload
            }
        }

        // case 'CLEAR_CAR_DETAILS':{
        //     return{...state,details:action.payload}
        // }
    }

    return state
}