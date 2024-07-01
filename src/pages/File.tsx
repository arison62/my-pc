import { useEffect, useRef, useState } from "react";
import FileHeader from "../components/FileHeader";
import FileNavRail from "../components/FileNavRail";
import { Outlet, useNavigate } from "react-router-dom";

function FileView() {
  const [expanded, setExpanded] = useState(true);
  const refDiv = useRef<HTMLDivElement | null>(null);
  const naviagate = useNavigate()


  useEffect(()=>{
	const timeOut = setTimeout(()=>{
		document.documentElement.addEventListener('click', handleNavigation)
	}, 100)
	
	
	return ()=>{
		clearTimeout(timeOut)
		document.documentElement.removeEventListener('click', handleNavigation)
	}
  },[refDiv])
  // naviagate to preview route when user click outside the view
  function handleNavigation(e : MouseEvent){
	const target : Node = e.target as Node

	if(refDiv.current !== null && refDiv.current?.contains(target) == false){
		naviagate('/')
	}
  }


  return (
    <div ref={refDiv}
      className={`${
        expanded ? "h-[calc(100vh-80px)]" : "max-w-3xl h-[700px]"
      } w-full bg-primaryColor overflow-hidden`}
    >
      <FileHeader onScale={() => setExpanded((val) => !val)} />
      <div className="flex h-full">
        <FileNavRail />
        <Outlet />
      </div>
    </div>
  );
}

export default FileView;
