import { MenuProps } from "./interface";
import Menuitem from "./MenuItem";

export default function Menulist({ list = [] } : MenuProps ) {
  return (
    <div className="menuList">
      {list.map((listItem) => {
        return <Menuitem item={listItem} />;
      })}
    </div>
  );
}
