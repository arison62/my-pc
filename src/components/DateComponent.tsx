import { useEffect, useState } from "react";
import { useDate } from "../utils/customHook";
import { formatDate } from "../utils/helper";
import Calenda from "react-calendar";
import "../assets/Calendar.css";

function DateComponent() {
  const [currentDate] = useState(new Date());
  const [calendaShowed, setCalendaShowed] = useState(false)
  useEffect(()=>{
    document.documentElement.addEventListener('click', ()=>{
      if(calendaShowed){
        setCalendaShowed(false)
      }
    })

    return ()=>{
      document.documentElement.removeEventListener('click', ()=>{})
    }
  }, [calendaShowed])
  function handlCalenda(e : {stopPropagation : ()=>void }) {
    e.stopPropagation()
    setCalendaShowed((status) => !status);
  }
  const date = useDate();
  return (
   
      <div className="mx-auto relative w-fit">
        <div
          className={`text-red px-4 py-1 rounded-full cursor-pointer text-sm font-bold hover:bg-hoverColor ${
            calendaShowed ? "bg-primaryColor" : ""
          }`}
          onClick={handlCalenda}
        >
          {formatDate(date)}
        </div>
        <div
          className={`w-fit shadow-2xl absolute right-1/2 translate-x-1/2 translate-y-2 ${
            calendaShowed ? "z-20" : "hidden"
          }`}
        onClick={(e)=>e.stopPropagation()}>
          <Calenda value={currentDate} />
        </div>
      </div>
    
  );
}

export default DateComponent;
