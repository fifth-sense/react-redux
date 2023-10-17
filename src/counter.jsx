import { connect } from "react-redux"
import { increment, decrement, createBug } from "./action-creators"
const Counter = ({ count, increment, decrement, bug }) =>{
    return(
      <div>
        <h2>Counter: {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button>create</button>
        <h4>{bug.description}</h4>
      </div>
    )
  }

  const mapStateToProps = state => {
    return{
      count: state.count
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return {
      increment: () => dispatch(increment()),
      decrement: () => dispatch(decrement()),
      create: () => dispatch(createBug("bug1"))
      
    }
  
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Counter)
  