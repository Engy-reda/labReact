// import { Component } from "react";

// import { connect } from 'react-redux';
// import * as actions from '../actions';
// class StudentDetail extends Component {
//     constructor(){
//         super()
//         this.state={
//             id:0
//         }
//     }

//     // clickToGetMoviseDetails=(IDN)=>{
//     //     console.log('2- init props(intial state,actions)')
//     //     console.log(this.props)
//     //     this.props.getMovieById(IDN);
//     // }
//     render(){
//         return <div>
//             <button type="submit" onClick={()=>{
//                         this.props.getMovieById(this.state.id);

//             }}>Get Movise</button>

//             {this.renderMovies(this.props)}
            
            
//         </div>
//     }

//     renderMovies({mList}){
//         console.log(mList);
//         if(mList){
//             return (
//                 <div className="alert alert-dark">
//                     <p>{mList.name}</p>
//                     <p>{mList.age}</p>
//                     <p>{mList.phone}</p>
//                 </div>
//             )         
//         }
//         return <p>
//             No Movies Available
//         </p>
//     }
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

// const mapReduxStateToComponentProps = (state)=>{
//     console.log(state)
//     // return {
    
//     // }
// }
// export default connect(mapReduxStateToComponentProps,actions)(StudentDetail)