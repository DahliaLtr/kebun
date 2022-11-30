import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { useAppContext } from "../../../../Hooks/useAppContext";

function SubMenu({ title, icon, route, SubMenus }) {
  const { Menu } = useAppContext();
  const {
    open,
    setOpen
  } = Menu;
  return (
    <div>
      <Link href={route !== undefined ? route : "#"+title}>
        <a className={`mt-1 mb-1 flex justify-between pt-2 py-2 ${open === "#"+title ? "bg-[#064635] text-white" : "bg-white text-[#064635]" } hover:bg-[#064635] hover:text-white`} onClick={() => setOpen("#"+title)}>
          <div className="flex">
            <div className="text-2xl ml-2">{icon}</div>
            <span className="ml-4">{title}</span>
          </div>
          <div className="mr-3">{SubMenus && <IoIosArrowDown className={`${open === "#"+title && "rotate-180"}`} />}</div>
        </a>
      </Link>
      {open === "#"+title && SubMenus !== undefined && (
        <div className="">
          {SubMenus.map((subMenu, index) => (
            <Link href={subMenu.route} key={subMenu.title}>
              <a className={`mt-1 mb-1 ml-6 mr-5 pt-2 py-2 bg-white text-[#064635] hover:bg-[#064635] hover:text-white rounded-md flex`} key={index}>
                <div className="text-2xl ml-4">{subMenu.icon}</div>
                <div className="ml-2">{subMenu.title}</div>
              </a>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default SubMenu;
