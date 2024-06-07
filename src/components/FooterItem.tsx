import { NavLink } from "react-router-dom";

function FooterItem({
  iconImg,
  path,
  title,
}: {
  iconImg: string;
  title: string;
  path: string;
}) {
  return (
    <NavLink
    to={path}
      className="p-2 hover:bg-hoverColor rounded-2xl cursor-pointer relative group"
    >
      <p className="absolute translate-y-[-100%] top-[-4px] right-1/2 translate-x-1/2 text-nowrap p-2 rounded-full bg-ternaryColor hidden group-hover:block">
        {title}
      </p>
      <img src={iconImg} alt="launch app image" className="w-12 md:w-16" />
    </NavLink>
  );
}

export default FooterItem;
