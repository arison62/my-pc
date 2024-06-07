import { Outlet, useLocation} from "react-router-dom";
import HeaderRoot from "../components/HeaderRoot";
import FooterRoot from "../components/FoooterRoot";

function PageRootLayoutPage() {
  const {pathname} = useLocation()
  
  return (
    <>
      <HeaderRoot />
      <div className={`${pathname === '/application'? 'md:top-[72px] top-[36px]': 'top-[36px]'} relative  flex justify-center`}>
        <Outlet />
      </div>
      <FooterRoot />
    </>
  );
}

export default PageRootLayoutPage;
