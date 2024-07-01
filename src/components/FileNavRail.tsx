import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

function NavRailItem({ children } : {children : ReactNode}) {
  return (
    <div className="flex flex-nowrap gap-2 items-center justify-start p-2">
      {children}
    </div>
  );
}

function FileNavRail() {
  return (
    <div className="bg-dark w-64 h-[calc(100%-6.6666%)]">
      <NavLink
        to={`file`}
        className={({ isActive }) =>
          `flex ${isActive ? "bg-accentColor text-primaryColor" : ""}`
        }
      >
        <NavRailItem>
          <ion-icon name="home-outline"></ion-icon>
          <p className="text-sm sm:text-base">Dossier personnel</p>
        </NavRailItem>
      </NavLink>
    </div>
  );
}

export default FileNavRail;
