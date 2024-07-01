import NavViewSearchComponent from "./NavViewSearchComponent";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      "ion-icon": { name: string };
    }
  }
}


type Props = {
    onScale : ()=> void
}
function FileHeader({onScale} : Props) {
  const active = true;
  return (
    <div className="w-full bg-ternaryColor p-2 flex justify-between">
      <div className="*:text-md w-fit bg-secondaryColor text-hoverColor border border-dark *:px-2 *:py-2 rounded flex *:flex *:justify-center *:items-center divide-x divide-primaryColor">
        <button className={`${active ? "bg-ternaryColor text-light" : ""}`}>
          <ion-icon name="chevron-back-outline"></ion-icon>
        </button>
        <button>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </button>
      </div>
      <NavViewSearchComponent />
      <div className="flex justify-center gap-2">
        <button className="rounded" onClick={onScale}>
          <ion-icon name="copy-outline"></ion-icon>
        </button>
        <button className="rounded text-2xl text-activeColor self-center">
          <ion-icon name="close-circle"></ion-icon>
        </button>
      </div>
    </div>
  );
}

export default FileHeader;
