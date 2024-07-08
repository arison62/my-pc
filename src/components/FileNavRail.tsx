import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { navRailItems } from "../utils/data";

function NavRailItem({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-nowrap gap-2 items-center justify-start p-2">
      {children}
    </div>
  );
}

function FileNavRail() {
  return (
    <div className="bg-dark w-64 h-[calc(100%-6.6666%)]">
      {navRailItems.map((item) => (
        <NavLink to={item.path} key={item.title} className={({ isActive }) => `flex ${isActive ? "bg-accentColor text-primaryColor" : ""}`}>
          <NavRailItem>
            <ion-icon name={item.icon}></ion-icon>
            <p className="text-sm sm:text-base">{item.title}</p>
          </NavRailItem>
        </NavLink>
      ))}
     
    </div>
  );
}

export default FileNavRail;
