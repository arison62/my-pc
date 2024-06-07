import FooterItem from "./FooterItem";
import { dockItems } from "../utils/data";

function FooterRoot() {
  const expanded = false; // TODO use setting context for expanded
  return (
    <div
      className={`${
        expanded ? "w-screen" : "min-w-md"
      } bg-secondaryColor fixed bottom-0 right-1/2 translate-x-1/2 flex justify-center items-center ${
        !expanded ? "rounded-2xl" : ""
      }`}
    >
      {dockItems.map((dockItem)=>(<FooterItem title={dockItem.title} iconImg={dockItem.img} path={dockItem.path} />))}
    </div>
  );
}

export default FooterRoot;
