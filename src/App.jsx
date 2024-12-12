import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
/*import'./App.css'*/

function App() {
const[length,setlength] = useState(8)
const[num,setNum] = useState(false)
const[char,setChar] = useState(false)

  return(
    <>
    <h1 className='text-center text-4xl text-cyan-700'>Password generator</h1>
    <div className=' flex-col  flex items-center justify-center w-screen'>
      <div className=' mt-8 p-4 w-1/2 border-2 border-cyan-400  rounded-md  flex-col flex items-center justify-center  readonly '>
      <div className='w-auto '><input type="text"placeholder="Type Here" className='p-2 border-2 border-cyan-400 rounded-md mr-1 w-96'/>
      <button className='p-2 border-2 border-solid text-white bg-slate-950 px-7 rounded-md  cursor-pointer  border-cyan-600 hover:bg-slate-50  hover:text-cyan-600' >Copy</button></div>
      <div className=' flex-row gap-2 align-middle justify-center px-14  w-auto'><label><input type="range" value={length} onChange={(e)=>{setlength(e.target.value)}}/>Length:({length})</label> Numbers <label><input  type="checkbox" onChange={(e)=>{setNum((prev) => !prev)}}/></label><label>Characters <input  type="checkbox" onChange={(e)=>{setChar((prev)=>!prev)}}/></label></div></div>

   
    </div>
  
    </> 
  )
}
export default App
