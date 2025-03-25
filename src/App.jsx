import React, { useState , useEffect} from 'react'

import './App.css'

function App() {
  const [time,setTime]= useState(new Date());

  useEffect(()=>{
   const timerID =  setInterval(()=>  setTime(new Date()),1000);
   return()=> clearInterval(timerID)

  },[]);

  const formattedTime= time.toLocaleTimeString('en-US',{hour:'2-digit',
    minute:'2-digit',
    second:'2-digit'
  })

  return (
    <div className='clock-container'>
      <div className='clock'>
         {formattedTime}
      </div>
       
     
    </div>
  )
}

export default App
