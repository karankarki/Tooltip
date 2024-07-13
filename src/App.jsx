
import './App.css'

import { useState,useRef } from 'react';

function App() {

  let top = useRef(null);
  let bottom = useRef(null);
  let left = useRef(null);
  let right = useRef(null);

  function hover(){
    console.log("mouse is hover");
    console.log(Dir);
    if(Dir==='Top'){
      top.current.style.visibility = 'visible'
   
    }
    else if(Dir=='Bottom'){
       bottom.current.style.visibility = 'visible'
    }else if(Dir=='Right'){
       left.current.style.visibility = 'visible'
    }
    else{
      right.current.style.visibility = 'visible'
    }
  }

  function Leave(){
    bottom.current.style.visibility = 'hidden'
    left.current.style.visibility = 'hidden'
    right.current.style.visibility = 'hidden'
    top.current.style.visibility = 'hidden'
  }

 let [Dir,setDir] = useState('Top')

  return (
    <>




  <div className="card">

    <div className="inp">
    <label className='label'  htmlFor="Val">Direction:</label>
  <select onChange={(e)=>{setDir(e.target.value)}} id="Val" name="Val">
    <option value="Top">Top</option>
    <option value="Bottom">Bottom</option>
    <option value="Right">Right</option>
    <option value="Left">Left</option>
  </select>
    </div>
  


 
  </div>
  



<div className="container">
  <div ref={top} className="Tool top">
  Hi i am top text
  </div>


<div className="center">
  <div ref={right} className="right Tool ">
  Hi i am Left text

  </div>
<button onMouseLeave={()=>{
  Leave()
}} onMouseOver={()=>{hover()}} >Hover Me!</button>

<div ref={left} className="left Tool">
Hi i am Right text
</div>
</div>
<div ref={bottom} className="bottom Tool">
Hi i am bottom text
</div>
</div>


     
    


    </>
  )
}

export default App
