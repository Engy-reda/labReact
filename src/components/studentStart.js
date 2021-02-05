import React , { Component } from "react";
import StudentDetails from "../containers/studentDetails";
import { Link } from "react-router-dom"


export default class  StudentStart extends Component{
    constructor(props){
        super(props)
        this.state = {
            students:[],
            value:"",
        }
        this.baseURL =  "http://localhost:3001/student"
        console.log(this.props);
    }

    renderStudents({student}){
        console.log(student);
        if(student&&student.length>0){
            return student.map((student)=>{

              return (
                <div className="alert alert-dark d-flex justify-content-between">
                     <h4 className="align-self-center">
                         {student.name}
                    </h4>
                    <Link to={`student/${student.id}`} class="btn btn-button " style={{backgroundColor:'gray'}}>{student.name}</Link>
                </div>
                     )})}
                
    }

    render(){

        //logic
        console.log('render')
        return(
            <div> 
                  {this.renderStudents(this.state)}
             </div>
             )
    }

    componentDidMount(){
        fetch(this.baseURL,{method:'GET'})
        .then((response)=>{
            
            // console.log(response.json());
            if(response.status == 200)
                return response.json()
                
        })
        .then((data)=>{
            console.log(data)
            this.setState({student:data})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    }