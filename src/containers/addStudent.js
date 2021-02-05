import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Component } from "react";
import React from "react"; 
import { addStudent } from '../action'
import Students from '../components/students'
class AddStudent extends Component {
    constructor(){
        super()
        this.state={
            id:0,
            name:"",
            age:0,
            phone:0
        }
    }

    clickToAddStudentDetails=(IDN , Namen ,agen,phonen)=>{
        console.log('2- init props(intial state,actions)')
        console.log(this.props)
        let arr ={id:this.state.id, name:this.state.name , age:this.state.age ,phone:this.state.phone};
        console.log(arr)
        this.props.addStudent(arr);
    }
    render(){
        return <div>
               <form controlId="formBasicSelect" className="text-center"  style={{border:'1px hidden blue' , width:'20%' , margin:'5% 0 0 40%' , backgroundColor:'lightgray'}}>
                    <div class="form-group">
                        <label className="text-center" for="id"  >id  </label><br/>
                        <input type="number"  id="id" className="form-control rounded-pill text-center"
                
                         placeholder="Enter id"
                         value={this.state.id} required pattern="[0-9]{2}"
                         onChange={
                             (e) => {
                             console.log('id')
                        

                              this.setState({ id: e.target.value })
                               }
                             }
                         />
                        <small id="id" class="form-text text-muted">We'll never share your id with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label className="text-center" for="Name" >Name : </label><br/>
                        <input type="text"  id="Name" className="form-control rounded-pill text-center"
                
                         placeholder="Enter Name"  required pattern="[a-zA-Z ]{5}"
                         value={this.state.name}
                         onChange={
                             (e) => {
                             console.log('name')
                         
                              this.setState({ name: e.target.value })
                            }
                             }
                         />
                        <small id="Name" class="form-text text-muted">We'll never share your name with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label className="text-center" for="exampleInputPassword1" style={{textAlign:'center'}}>Age : </label><br/>
                        <input type="number"  id="exampleInputPassword1" className="form-control rounded-pill text-center"
                           placeholder="Age" required    pattern="[0-9]{2}"
                           value={this.state.age}
                            onChange={
                            (e) => {
                            console.log('age')
                        
                            this.setState({ age: e.target.value })
                            }
                             }
                         />
                    </div>
                    <div class="form-group">
                        <label className="text-center" for="Namee" >phone : </label><br/>
                        <div>+20<input type="number"  id="Namee"  className=" text-center"
                
                         placeholder="Enter phone"  required pattern="[0-9]{10}"
                         value={this.state.phone}
                         onChange={
                             (e) => {
                             console.log('phone')
                   

                              this.setState({ phone: e.target.value })
                               }
                             }
                         /></div>
                        <small id="Namee" class="form-text text-muted">We'll never share your phone with anyone else.</small>
                    </div>
                    <button type="submit" class="btn btn-primary" className="text-center"  
                    onClick={()=>{
                        let arr ={id:this.state.id, name:this.state.name , age:this.state.age ,phone:this.state.phone};
                        console.log(arr)
                        this.props.addStudent(arr);

                     }}
                    // onClick={this. clickToAddStudentDetails(this.state.id , this.state.name,this.state.age, this.state.phone)}

                    >Submit</button>
                </form>
                 {this.renderStudent(this.props)}
             </div>
            }

    renderStudent({list}){
        
        console.log(list);
        // alert("done");
        if(list){
            if (list.length > 0)
            return (
                <div className="alert ">
                    {list.map((student) => {

               return(
                <div className="alert alert-dark">
                    {/* <p>{student.id}</p>
                    <p>{student.name}</p>
                    <p>{student.age}</p>
                    <p>{student.phone}</p> */}
                    <Students key={student.id} student={student}/>

                </div>
               )})}</div>)

                    
        }
        // return <p>
        //     No Movies Available
        // </p>
    }
    componentDidMount(){
        console.log('2- init props(intial state,actions)')
        console.log(this.props)
        // this.props.getMovieById(2)
        console.log("hhhhh");  
    }
    componentDidUpdate(){
        console.log('5- component updated with new state')
        console.log(this.props)
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ addStudent }, dispatch)
}

const mapStateToProps = (state) => {
    console.log(state)
    console.log(state.students.add)
    return {
        list: state.students.add
        
    }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(AddStudent)