import {BrowserRouter , Switch ,Route  } from "react-router-dom";
import Home from "./components/home"
import  StudentDetais from "./containers/studentDetails"
import NotFound from "./components/notFount"
import AddStudent from "./containers/addStudent"
import DeleteStudent from "./containers/deleteStudent"
import ShowStudent from "./components/showStudent"
import {Provider} from "react-redux"
import {applyMiddleware , createStore} from 'redux'
import reducer from './reduser'
import promiseMW from 'redux-promise';
import React from "react"; 
// import student from './db.json';


const createStoreWithMW = applyMiddleware(promiseMW)(createStore)





const App =()=>{
    return (
        <Provider store={createStoreWithMW(reducer)}>
       
            <BrowserRouter>
                <div className="conatainer">
                    <div className="row">
                        <div className="col">
                            <Switch>
                                <Route exact path="/"  component={Home}/>
                                <Route exact path="/"  component={ShowStudent}/>
                                <Route path="/student/:id" component ={StudentDetais}/>
                                <Route path="/addStudent" component = {AddStudent}/>
                                <Route path="/deleiteStudent" component = {DeleteStudent}/>
                                <Route path="*" component ={NotFound}/>

                            </Switch>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </Provider>
    )
}
export default App;