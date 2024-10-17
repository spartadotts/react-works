import Menulist from "./MenuList";
import { NavBarProps } from "./interface";

export default function NavBar({ menu = [] } : NavBarProps) {
  return (
    <div className="main-container">
      <Menulist list={menu} />
    </div>
  );
}
