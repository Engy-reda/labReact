import  Search  from "../containers/search"
import  StudentList  from '../containers/studentList'
import AddStudent from '../containers/addStudent'
import React from "react"
import { Link } from "react-router-dom"
import StudentDetails from "../components/StudentDetail"
import DeleteStudent from "../containers/deleteStudent";


const Home =()=>{
    return(
        <div>
            
            <h1 className="text-white bg-dark text-center">Home Component</h1>
            <Link to={'/addStudent'} class="btn btn-button  form-control rounded-pill text-center" style={{backgroundColor:'gray'}}>ADD</Link>
            <Link to={'/deleiteStudent'} class="btn btn-button  form-control rounded-pill text-center" style={{backgroundColor:'gray'}}>Delete</Link>
            <Search/>
            <StudentList/>
        </div>
    )

}
export default Home

