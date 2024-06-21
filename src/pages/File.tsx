import { useState } from "react";
import FileHeader from "../components/FileHeader";

function FileView() {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className={`${expanded ? "h-[calc(100vh-80px)]" : "max-w-3xl min-h-[700px]"} w-full bg-primaryColor`}>
      <FileHeader onScale={() => setExpanded((val) => !val)} />
    </div>
  );
}

export default FileView;
