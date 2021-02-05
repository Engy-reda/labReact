// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'
// import { Component } from "react";
// import React from "react"; 
// import {addStudent} from '../actions'
// class AddStudent extends Component {
//     constructor(){
//         super()
//         this.state={
//             id:0,
//             name:"",
//             age:0,
//             phone:0
//         }
//     }

//     clickToAddStudentDetails=(IDN , Namen ,agen,phonen)=>{
//         console.log('2- init props(intial state,actions)')
//         console.log(this.props)
//         let arr ={id:IDN , name:Namen , age:agen ,phone:phonen};
//         this.props.addStudent(arr);
//     }
//     render(){
//         return <div>
//                <form style={{border:'1px solid blue' , width:'20%' , margin:'0 0 0 40%' , backgroundColor:''}}>
//                     <div class="form-group">
//                         <label for="Name" >id : </label><br/>
//                         <input type="number"  id="Name" 
                
//                          placeholder="Enter id" 
//                          value={this.state.id}
//                          onChange={
//                              (e) => {
//                              console.log('id')
//                               this.setState({ id: e.target.value })
//                                }
//                              }
//                          />
//                         <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
//                     </div>
//                     <div class="form-group">
//                         <label for="Name" >Name : </label><br/>
//                         <input type="text"  id="Name" 
                
//                          placeholder="Enter id" 
//                          value={this.state.name}
//                          onChange={
//                              (e) => {
//                              console.log('name')
//                               this.setState({ id: e.target.value })
//                                }
//                              }
//                          />
//                         <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
//                     </div>
//                     <div class="form-group">
//                         <label for="exampleInputPassword1" style={{textAlign:'center'}}>Age : </label><br/>
//                         <input type="number"  id="exampleInputPassword1"
//                            placeholder="Age" required
//                            value={this.state.age}
//                             onChange={
//                             (e) => {
//                             console.log('age')
//                             this.setState({ KeyAge: e.target.value })
//                               }
//                              }
//                          />
//                     </div>
//                     <div class="form-group">
//                         <label for="Name" >phone : </label><br/>
//                         <input type="number"  id="Name" 
                
//                          placeholder="Enter id" 
//                          value={this.state.phone}
//                          onChange={
//                              (e) => {
//                              console.log('phone')
//                               this.setState({ id: e.target.value })
//                                }
//                              }
//                          />
//                         <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
//                     </div>
//                     <button type="submit" class="btn btn-primary"   onClick={this. clickToAddStudentDetails(this.state.id , this.state.name,this.state.age, this.state.phone)}>Submit</button>
//                 </form>
//                  {/* {this.renderMovies(this.props)} */}
//              </div>
//             }

//     // renderMovies({mList}){
//     //     console.log(mList);
//     //     if(mList){
//     //         return (
//     //             <div className="alert alert-dark">
//     //                 <p>{mList.id}</p>
//     //                 <p>{mList.name}</p>
//     //                 <p>{mList.age}</p>
//     //                 <p>{mList.phone}</p>
//     //             </div>
//     //         )         
//     //     }
//     //     return <p>
//     //         No Movies Available
//     //     </p>
//     // }
//     componentDidMount(){
//         console.log('2- init props(intial state,actions)')
//         console.log(this.props)
//         // this.props.getMovieById(2)
//         console.log("hhhhh");
//     }
//     componentDidUpdate(){
//         console.log('5- component updated with new state')
//         console.log(this.props)

//     }

// }

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({ addStudent }, dispatch)
// }
// export default connect(null, mapDispatchToProps)(AddStudent)






























// // import { render } from '@testing-library/react';
// // import React ,{ Component } from 'react';
// // export default class AddStudent extends Component {
// //     constructor(){
// //         super()
// //         this.rrayList =[{}]
// //         this.state = {
// //             KeyName :"hhhh",
// //             KeyAge: 0

// //         }
// //     }
// //     AddNewList= (e)=>{
// //         // this.setState({ Name: this.state.KeyName, Age:this.state.KeyAge })
// //         this.setState({ KeyName:e.target.value, KeyAge:e.target.value })
// //                     console.log(this.state.KeyName , this.state.KeyAge);
// //                    this.rrayList.push(this.state.KeyName, this.state.KeyAge) ;
// //                     console.log(this.rrayList)
// //                     console.log(this.props);
// //                     this.props.onKeyWordsChange(this.state.KeyName ,  this.state.KeyAge);
// //     }

// //     render(){

    
        
// //         return( 
// //             <div>
// //             <form style={{border:'1px solid blue' , width:'20%' , margin:'0 0 0 40%' , backgroundColor:''}}>
// //                <div class="form-group">
// //                  <label for="Name" >Name : </label><br/>
// //                  <input type="text"  id="Name" 
                
// //                  placeholder="Enter Name" 
// //                  value={this.state.KeyName}
// //                  onChange={
// //                     (e) => {
// //                         console.log('name')
// //                         //Don't do this 
// //                         // this.state.name = e.target.value
// //                         this.setState({ KeyName: e.target.value })
// //                     }
// //                 }
// //                   />
// //                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
// //                </div>
// //                <div class="form-group">
// //                 <label for="exampleInputPassword1" style={{textAlign:'center'}}>Age : </label><br/>
// //                 <input type="number"  id="exampleInputPassword1"
// //                  placeholder="Age" required
// //                   value={this.state.KeyAge}
// //                     onChange={
// //                  (e) => {
// //                 console.log('age')
// //                 this.setState({ KeyAge: e.target.value })
// //                 }
// //                   }
// //                 />
// //           </div>
// //        <div class="form-check">
// //         <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
// //         <label class="form-check-label" for="exampleCheck1">Check me out</label>
// //        </div>
// //         <button type="submit" class="btn btn-primary"   onClick={this.AddNewList

// //             }
      
      
// //       >Submit</button>
// // </form>
// // <p>KeyList:{this.state.KeyAge}</p>
// // <p>KeyList:{this.state.KeyName}</p>
// // </div>

// //         )
        
    
        
// //     }
// // }



