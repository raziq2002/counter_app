import { useDispatch, useSelector } from "react-redux";
import { increment,decrement, reset,incrementByAmount } from "./redux/counterSlice";
import { useState } from "react";

const App = () => {

  const [Amount,setAmount]=useState(0)
  const {count} = useSelector(state=>state.counterReducer)
  const dispatch = useDispatch()
  const handleIncrementAmount =()=>{
    if(Amount){
      //dispatch
      dispatch(incrementByAmount(+Amount))

    }else{
      alert("please enter the valid amount!!!")
    }
  }
  

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Counter App</h1>
      <div className="text-center mb-3">
        <h2>{count}</h2>
      </div>
      <div className="d-flex justify-content-center gap-2">
        <button onClick={()=>dispatch(decrement())} className="btn btn-danger">Decrement</button>
        <button onClick={()=>dispatch(reset())} className="btn btn-secondary">Reset</button>
        <button onClick={()=>dispatch(increment())} className="btn btn-success">Increment</button>
      </div>
      <div className="input-group mt-4">
        <input 
        onChange={e=>setAmount(e.target.value)}
          type="number" 
          className="form-control" 
          placeholder="Enter custom value"
        />
        <button onClick={handleIncrementAmount}
          className="btn btn-primary" 
        >
          Add Custom Value
        </button>
      </div>
    </div>
  );
};

export default App;