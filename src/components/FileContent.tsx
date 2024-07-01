import { useLoaderData } from "react-router-dom";
import FileContentCard from "./FileContentCard";
import { CFileSystem } from "../utils/data";

function FileContent() {
  const { fileSystem } = useLoaderData() as { fileSystem: CFileSystem };

  console.log(fileSystem);
  return (
    <div className="w-full p-2 sm:p-4 flex flex-row flex-wrap justify-start items-start gap-6 sm:gap-12 overflow-scroll">
      {fileSystem.content?.map((item) => (
        <FileContentCard title={item.title} img={item.img} />
      ))}
    </div>
  );
}

export default FileContent;
