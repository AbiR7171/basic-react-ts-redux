import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment } from './redux/features/counterSlice'

function App() {


  const count = useSelector((state)=> state.counter.count)
  const dispatch = useDispatch()


  return (
   <div className='h-screen w-full flex justify-center items-center'>
        <div className=' space-x-3 flex items-center border border-purple-800 p-10 rounded'>
        <button onClick={()=>dispatch(increment())} className='py-3 px-10 bg-green-600 rounded text-white font-bold font-serif'>Increment</button>
        <p className='text-red-600'>{count}</p>
        <button onClick={()=>dispatch(decrement())} className='py-3 px-10 bg-red-600 rounded text-white font-bold font-serif'>Decrement</button>
        </div>
   </div>
  )
}

export default App
