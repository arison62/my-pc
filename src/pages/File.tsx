import { useState } from "react"
import FileHeader from "../components/FileHeader"

function FileView(){
  const [expanded, setExpanded] = useState(true)

    return(<div className={`${expanded ? '' : 'max-w-3xl min-h-96'} w-full border-2 border-solid border-r-emerald-900`}>
        <FileHeader />
    </div>)
}

export default FileView