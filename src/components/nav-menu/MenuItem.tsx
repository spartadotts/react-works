import { useState } from "react";
import { MenuItem } from "./interface";
import "./style.css"

export default function Menuitem({ item }: { item: MenuItem }) {
  //receiving a single item here so we need to specify the type of the single item in the object

  const [displayLabel, setDisplayLabel] = useState<{[key: string]:boolean}>({});

  function handleToggle(currentlabel: string){
    setDisplayLabel(() => ({
        ...displayLabel,[currentlabel]: !displayLabel[currentlabel],
    }));
  }

  return (
    <ul className="menuItem">
      <div className="content">
        <p>{item.label}</p>
        {
            item && item.children && item.children.length > 0? <span onClick={() => handleToggle(item.label) }>{
                displayLabel[item.label]? '-': '+'
            }</span> :null
        }
        
      </div>

      {item && item.children && item.children.length && displayLabel[item.label]
        ? item.children.map((childItem) => <Menuitem item={childItem} />)
        : null}
    </ul>
  );
}
