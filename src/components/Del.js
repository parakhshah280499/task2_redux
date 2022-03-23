import React from 'react'
import { connect } from 'react-redux'


function Del(props) {
  return (
    <button type="button" onClick={()=> props.dispatch({type:'HANDLE_DELETE_CLICK',payload:props.campaign})}>
    Delete
  </button>
  )

}

function mapStateToProps(state)
{
    return {campaign:state.campaign}
}

export default connect(mapStateToProps)(Del)
