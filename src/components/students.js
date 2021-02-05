import React from "react"; 
import { Link } from "react-router-dom"

const Students = ({ student,history }) => {
    const goToDetails = ()=>{
        history.push(`/student/${student.id}`)
    }
    const goToDelete = ()=>{
    }
    if (student) {
        
        return <div className="alert alert-dark d-flex justify-content-between">
            <h4 className="align-self-center">
                {student.name}
            </h4>
            <Link to={`student/${student.id}`} class="btn btn-button " style={{backgroundColor:'gray'}}>{student.name}</Link>

        </div>
    }
}
export default Students
