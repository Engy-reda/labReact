import { data } from "jquery"
const baseURL = "http://localhost:3001/student"
console.log({baseURL})
let payloadjjj;
const list = async()=>{
    
        let response = await fetch(`${baseURL}`).then(res => res.json()).then(data => payloadjjj= data);
        console.log(payloadjjj)
        return response;
        // let payloadjjjl = await response.json()
        // console.log(payloadjjjl)
        // return payloadjjjl;
}
// payloadjjj= 
list();
console.log(payloadjjj);
// console.log(list());
// let paylo = payloadjjj.map((car) =>{ return  car.data})
// console.log(paylo);
export const getStudent= async (brand)=>{
    console.log(brand);
    let payload ;
    try{
        let response = await fetch(`${baseURL}?brand=${brand}`)
        let  payloadjj = await response.json()
        console.log(payloadjj)

        payload = payloadjj.filter((item) => {
            return item.name.toLowerCase().includes(brand.toLowerCase())
        })
        console.log(payload)
    }
    catch(err){
        console.log(err)
    }
    return{
        type : 'STUDENT_LIST',
        payload
    }
}
// console.log(getStudent())
// let brand = {id:8,name:"bbb",age: 11 ,phone:120124521021 };
// console.log(payloadjj);

export const addStudent= async (brand)=>{
    console.log(brand);
    let payload ;
    try{
        let response = await fetch(`${baseURL}?brand=${brand}`)
        payload= await response.json()
        console.log(payload)
            return  payload.push(brand);
    }
    catch(err){
        console.log(err)
    }
    console.log(payload)
    return{
        type : 'STUDENT_ADD',
        payload
    }
}
// addStudent(brand);
// conso
// le.log(addStudent(brand))

export const deleteStudent = async (brand)=>{
    console.log(brand);
    let payload ;
    try{
        let response = await fetch(`${baseURL}?brand=${brand}`)
        payload= await response.json()
        console.log(payload)
            return  payload.slice(0, brand-1)   
    }
    catch(err){
        console.log(err)
    }

    return{
        type : 'STUDENT_DETELES',
        payload
    }

}
// deleteStudent(1);


   
  
export const getStudentDetails=(id)=>{
    let payload ;
    return{
        type : 'STUDENT_DETAILS',
        payload
    }
}

let someArray = [{name:"Kristian", lines:"2,5,10"},
             {name:"John", lines:"1,19,26,96"},
             {name:"John3", lines:"1,19,26,96"},
             {name:"John4", lines:"1,19,26,96"}];
let id =1;
 someArray = someArray.slice(0, id-1);
 console.log(someArray)