/* eslint-disable no-unused-expressions */
import { render } from '@testing-library/react'
import { connect } from 'react-redux'

function Togg (props) {

  return ( 
    <>
     <button type = "button" className = "delete_button"
                        onClick = {() => props.dispatch({ type: 'TOGGLE'})}>
                        pressme 
                        
                        </button>
     
    
      <p>
        {props.flagstate?"true":"false"}
      </p>
    </>

 
              
                    
  )


// return (
//     <button type = "button" className = "delete_button"
//                         onClick = {() => props.dispatch({ type: 'TOGGLE'})}>
//                         pressme2 
//                         </button>
// )
}
function mapStateToProps (state) {
    return { flagstate: state.flag }
  }
  


export default connect(mapStateToProps)(Togg)
