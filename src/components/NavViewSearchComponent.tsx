import { useRef, useState } from "react";

function NavViewSearchComponent() {
  const [isSearch, setIsSearch] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  function swapComponent() {
    setIsSearch((val) => !val);
    
  }
  return (
    <div className="flex overflow-hidden">
      {isSearch ? (
        <input
          name="search"
          type="text"
          placeholder="Type to search"
          autoFocus={true}
          className="block w-full text-sm rounded-md shadow-sm focus:border-activeColor focus:ring-1 focus:ring-activeColor focus:ring-opacity-50 bg-primaryColor focus:bg-hoverColor placeholder:text-light/30"
        />
      ) : (
        <div
          className="border border-dark items-center flex space-x-2 max-w-sm md:max-w-xl overflow-scroll scroll-smooth snap-center"
          ref={ref}
        >
          <div className="px-4 py-2 font-semibold  hover:bg-hoverColor">
            Home
          </div>
          <div className="h-4 border -skew-x-12"></div>
          <div className="px-4 ont-semibold">Images</div>
         
         
        </div>
      )}
      <button
        onClick={swapComponent}
        className="border border-dark ml-2 p-2 rounded bg-dark"
      >
        <ion-icon name="search-outline"></ion-icon>
      </button>
    </div>
  );
}

export default NavViewSearchComponent;
