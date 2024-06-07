import { useNavigate } from "react-router-dom";
import { AppItem } from "../utils/data";

function ApplicationItem({ title, img, path }: AppItem) {
  const naviagate = useNavigate();
  function handleNavigate() {
    if (path != undefined) {
      naviagate(path);
    }
  }
  return (
    <div className="flex justify-center items-center">
      <div
        className="rounded-md hover:bg-hoverColor flex flex-col items-center justify-center w-32 h-40 space-x-4 px-4 py-2 sm:w-44 sm:px-8 sm:py-4 sm:space-y-8"
        onClick={handleNavigate}
      >
        <img src={img} alt="title" className="w-12 md:w-16" />
        <p className="text-wrap text-sm">{title}</p>
      </div>
    </div>
  );
}

export default ApplicationItem;
