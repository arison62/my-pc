import { useState, useEffect } from "react";

export function useDate(): Date{

  const [date, setDate] = useState<Date>(new Date());

  useEffect(()=>{
    const interval = setInterval(()=>{
        setDate(new Date())
    }, 1000)
    return ()=>{
        clearInterval(interval)
    }
  })
  return date;
}

export function useConnection(){
  const [online, setOline] = useState(navigator.onLine)
  useEffect(()=>{

    window.addEventListener('online', ()=> setOline(true))
    window.addEventListener('offline', ()=> setOline(false))
    
    return ()=>{
      window.removeEventListener('online', ()=>setOline(true))
      window.removeEventListener('offline', ()=>setOline(false))
    }
  }, [online])
  return online
}