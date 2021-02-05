import React ,{ useRef } from 'react'
import { getStudent } from '../action'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const Search = ({getStudent}) => {
    const brand = useRef()
    const searchByBrand = () => {
        console.log(brand.current.value)
        getStudent(brand.current.value)
    }
    return(
    <div className="col text-center">
        <div className="form-group">
            <input ref={brand} className="form-control rounded-pill text-center" type="text" placeholder="enter brand" 
            onChange={searchByBrand}/>
        </div>
    </div>
    )
   
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({getStudent}, dispatch)
}
export default connect(null, mapDispatchToProps)(Search)
