import React ,  { useState,useRef, useEffect } from 'react'

const SW = () => {
  const [isRunning, setisRunning] = useState(false);
  const [elapsedTime, setelapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {

      if(isRunning){
        intervalIdRef.current = setInterval(()=>{
          setelapsedTime(Date.now()-startTimeRef.current);
        },10)
      }
      return () => {
        clearInterval(intervalIdRef.current);
      }
  },[isRunning])

  function start(){
    setisRunning(true)
    startTimeRef.current = Date.now() - elapsedTime;
  }
  
  function stop(){
    setisRunning(false)
  }
  
  function reset(){
    setelapsedTime(0)
    setisRunning(false)
  }
  
  function FormatTime(){
    let minutes = Math.floor(elapsedTime/(1000*60)%60);
    let seconds = Math.floor(elapsedTime/(1000)%60);
    let milliseconds = Math.floor((elapsedTime%1000)/10);

    minutes = String(minutes).padStart(2,"0");
    
    seconds = String(seconds).padStart(2,"0");
    
    milliseconds = String(milliseconds).padStart(2,"0");

    return `${minutes} : ${seconds} : ${milliseconds}`;
  }

  return (
    <div>
      <section className='bg-slate-950 h-screen flex justify-center items-center'>
            <div className='grid grid-flow-row h-60 border-2 border-lime-500 rounded-xl'>
                  <div className='flex justify-center items-center'>
                  <h1 className='text-lime-500 text-4xl text-center font-extrabold'>{FormatTime()}</h1>
                  </div>
                  <div className='flex justify-around items-center space-x-2 p-2'>
                       <button onClick={start} className='bg-green-700 text-white rounded-xl w-32 h-10 font-extrabold'>START</button>
                       <button onClick={stop} className='bg-red-700 text-white rounded-xl w-32 h-10 font-extrabold'>STOP</button> 
                       <button onClick={reset} className='bg-blue-700 text-white rounded-xl w-32 h-10 font-extrabold'>RESET</button>  
                  </div>
            </div>
      </section>
    </div>
  )
}

export default SW
