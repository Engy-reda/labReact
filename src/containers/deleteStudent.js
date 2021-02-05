import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Component } from "react";
import React from "react"; 
import { deleteStudent } from '../action'
class DeleteStudent extends Component {
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
        let arr ={id:IDN , name:Namen , age:agen ,phone:phonen};
        this.props.deleteStudent(IDN);
    }

    // clickToAddStudentDetails=()=>{
    //     return(
    //       <div>
    //       <h1>are you sure </h1>
    //       <button type="button" class="btn btn-primary" onClick={this.delete()}>yes</button>
    //       <button type="button" class="btn btn-primary" onClick={<h1>no</h1>}>No</button>
    //   </div>
    //     )
    //   }
    //   delete=(props)=>{
    //       let arr ={id:this.state.id, name:this.state.name , age:this.state.age ,phone:this.state.phone};
    //       console.log(arr)
    //       this.props.deleteStudent(arr);
  
    //   }
    render(){
        return <div>
               <form className="text-center"  style={{border:'1px hidden blue' , width:'20%' , margin:'5% 0 0 40%' , backgroundColor:'lightgray'}}>
                    <div class="form-group">
                        <label for="id" >id : </label><br/>
                        <input type="number"  id="id" 
                
                         placeholder="Enter id" 
                         value={this.state.id}
                         onChange={
                             (e) => {
                             console.log('id')
                              this.setState({ id: e.target.value })
                               }
                             }
                         />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="Name" >Name : </label><br/>
                        <input type="text"  id="Name" 
                
                         placeholder="Enter Name" 
                         value={this.state.name}
                         onChange={
                             (e) => {
                             console.log('name')
                              this.setState({ name: e.target.value })
                               }
                             }
                         />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1" style={{textAlign:'center'}}>Age : </label><br/>
                        <input type="number"  id="exampleInputPassword1"
                           placeholder="Age" required
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
                        <label for="Namee" >phone : </label><br/>
                        <input type="number"  id="Namee" 
                
                         placeholder="Enter phone" 
                         value={this.state.phone}
                         onChange={
                             (e) => {
                             console.log('phone')
                              this.setState({ phone: e.target.value })
                               }
                             }
                         />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <button type="submit" class="btn btn-primary"   onClick={this. clickToAddStudentDetails(this.state.id , this.state.name,this.state.age, this.state.phone)}>Submit</button>
                </form>
                 {/* {this.renderMovies(this.props)} */}
             </div>
            }

    // renderMovies({mList}){
    //     console.log(mList);
    //     if(mList){
    //         return (
    //             <div className="alert alert-dark">
    //                 <p>{mList.id}</p>
    //                 <p>{mList.name}</p>
    //                 <p>{mList.age}</p>
    //                 <p>{mList.phone}</p>
    //             </div>
    //         )         
    //     }
    //     return <p>
    //         No Movies Available
    //     </p>
    // }
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
    return bindActionCreators({ deleteStudent }, dispatch)
}
export default connect(null, mapDispatchToProps)(DeleteStudent)