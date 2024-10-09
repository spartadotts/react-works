import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {
  const [selection, setSelection] = useState<number>(0);
  const [multiselection, setMultiselection] = useState<boolean>(false);
  const [multi, setMulti] = useState<number[]>([]);

  function HandleSingleSelection(getCurrId: number) {
    setSelection(getCurrId === selection ? 0 : getCurrId);
  }

  function HandleMultiSelection(getCurrId: number) {
    const secMulti = [...multi];
    const findcurrIndex = secMulti.indexOf(getCurrId);
    if(findcurrIndex === -1){
        secMulti.push(getCurrId)
    }
    else
    {
        secMulti.splice(findcurrIndex,1)
    }
    setMulti(secMulti);
  }

  return (
    <div className="wrapper">
      <button onClick={() => setMultiselection(!multiselection)}>
        Enable Mulitiple selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((data) => (
            <div className="item">
              <div
                onClick={
                  multiselection
                    ? () => HandleMultiSelection(data.id)
                    : () => HandleSingleSelection(data.id)
                }
                className="title"
              >
                <h3>{data.question}</h3>
                <span>+</span>
              </div>
              {selection === data.id || multi.indexOf(data.id) !== -1? (
                <div className="content">{data.answer}</div>
              ) : (
                <div></div>
              )}
            </div>
          ))
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
