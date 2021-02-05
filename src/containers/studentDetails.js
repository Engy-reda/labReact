import {useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
const StudentDetais = ({match})=>{
    let [student,setartistInfo] = useState({})
    console.log(student)
    const baseURL = "http://localhost:3001/student";


    useEffect(()=>{
        fetch(`${baseURL}/${match.params.id}`)
        .then((response)=>{
            return response.json()
        })
        .then(data=>{
            console.log(data)
            setartistInfo(data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
        return (
            <div className="container-fluid" style={{marginTop:'200px'}}>
               <div className="row">
                   <div className="col">
                       <div className="container" style={{backgroundColor:'lavender ' ,textAlign:'center'}}>
                           <div className="card" style={{width:'100%' ,backgroundColor:'lavenderblush'}}>
                              <div className="card-body">
                                 <h1 className="card-title">{student.name}</h1>
                                  <h4 className="card-text">{student.age}</h4>
                                  <h4 className="card-text">{student.phone}</h4>
                                  <Link to={`/`} class="btn btn-button " style={{backgroundColor:'gray'}}>Back</Link> 
                                </div> 
                            </div>
                       </div>
                   </div>
                </div>
           </div>
        )
}

export default StudentDetais



