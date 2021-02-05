import { FETCH_STUDENT , NEW_STUDENT } from "./types";

export  const fetchStudent= ()=> dispatch =>{
    console.log('fetching')
        fetch("http://localhost:3001/student")
        .then(res => res.json())
        .then(students => 
            dispatch({
                type :FETCH_STUDENT,
                payload : students
            })

        );
};