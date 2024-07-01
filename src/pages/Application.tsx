import {
  ChangeEvent,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { AppItem, appItem } from "../utils/data";
import ApplicationItem from "./ApplicationItem";
import { useNavigate } from "react-router-dom";

function Application() {
  const ref = useRef<HTMLInputElement | null>(null);
  const refDiv = useRef<HTMLDivElement | null>(null);
  const naviagate = useNavigate();

  const [app, setApp] = useState(
    appItem.sort((el1, el2) => (el1.title > el2.title ? 1 : -1))
  );
  useLayoutEffect(() => {
    ref.current?.focus();
  });

  useEffect(() => {
    const timeOut = setTimeout(() => {
      document.documentElement.addEventListener("click", handleNavigation);
    }, 100);

    return () => {
      clearTimeout(timeOut);
      document.documentElement.removeEventListener("click", handleNavigation);
    };
  }, [refDiv]);
  // naviagate to preview route when user click outside the view
  function handleNavigation(e: MouseEvent) {
    const target: Node = e.target as Node;

    if (refDiv.current !== null && refDiv.current?.contains(target) == false) {
      naviagate("/");
    }
  }

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    let matchApp: AppItem[] = [];
    const value = e.target.value;
    if (value === "") {
      setApp(appItem);
    } else {
      matchApp = appItem.filter((app) =>
        app.title.toLowerCase().startsWith(value.toLowerCase())
      );
      setApp(matchApp);
    }
  }
  return (
    <div
      className="min-w-96 px-8 min-h-96 flex justify-start flex-col items-center bg-primaryColor shadow-2xl rounded-md w-full max-w-5xl h-[600px]"
      ref={refDiv}
    >
      <form className="p-4 bg-primaryColor">
        <input
          ref={ref}
          name="search"
          type="text"
          placeholder="Type to search"
          onChange={handleSearch}
          className="block w-full rounded-md shadow-sm focus:border-activeColor focus:ring focus:ring-activeColor focus:ring-opacity-50 bg-primaryColor focus:bg-hoverColor placeholder:text-light/30"
        />
      </form>
      <div className="w-full overflow-scroll flex flex-wrap justify-center md:justify-start">
        {app.map((el) => (
          <ApplicationItem title={el.title} img={el.img} path={el.path} />
        ))}
      </div>
      <div></div>
    </div>
  );
}

export default Application;
