import { connect } from 'react-redux';
import React from "react"; 
import  Students from '../components/students';
import StudentStart from '../components/studentStart';
const StudentList =({ list ,history})=>{
    console.log(list)
    if (list) {
        if (list.length > 0)
            return (
                <div className="alert ">
                    {list.map((student) => {
                        return <Students key={student.id} student={student} history={history}/>
                    })}
                </div>)
        return (
            <p>
            Enter a valid brand and search again :P 
        </p> 
        )
    }
  
     return (
         <StudentStart/>

    )
}

const mapStateToProps = (state) => {
    return {
        list: state.students.list
        
    }
}

export default connect(mapStateToProps, null)(StudentList)