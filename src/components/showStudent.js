import React,{ Component } from "react";
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import {fetchStudent  } from "../action/showAndForm";
import { students } from "../reduser/students";


class ShowStudent extends Component{
   
    render(){
       
        const studentItems = this.props.students.map(stud => (
            
            <div key={stud.id}>
                <h3>{stud.age}</h3>
            </div>
        ));
        
        return(
            <div>
                <h1>Students</h1>
                {studentItems}
            </div>
        );
    }
    componentWillUnmount(){
        console.log('hhhh')
        this.props.fetchStudent();
    }

}
students.prototype = {
    fetchStudent : PropTypes.func.isRequired,
    students: PropTypes.array.isRequired
};

const mapStateToProps = state =>({
    students: state.students.items
})
export default connect(mapStateToProps , {fetchStudent})(ShowStudent)