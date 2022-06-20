import React, { useState } from "react";
import ToDolists from "./toDolists";
import "../index.css";

const Listpage = () => {
  const [inputlist, setinput] = useState([]);
  const [itm, enter_val] = useState("");
  const Item = (e) => {
    enter_val(e.target.value);
  };
  const Add = () => {
    console.log(inputlist);
    if (itm === "") return;
    setinput([...inputlist, itm]);
    enter_val("");
  };

  const del = (id) => {
    console.log("deleted");
    setinput((inputlist) => {
      return inputlist.filter((arrElem, indx) => {
        return indx !== id;
      });
    });
  };

  const clear = () => {
    setinput([]);
  };

  return (
    <>
      <div className="main_div">
        <div className="headline">ToDo List</div>
        <div className="inputfield">
          <input
            className="cin"
            type="text"
            placeholder="Add a Item"
            onChange={Item}
            value={itm}
          />

          <button className="addbtn" onClick={Add} title="Add to list">
            {" "}
            +
          </button>
        </div>
        <ol>
          {inputlist.map((itmval, indx) => {
            return (
              <ToDolists key={indx} id={indx} text={itmval} onSelect={del} />
            );
          })}
        </ol>
        {inputlist.length !== 0 ? (
          <div className="clearall" onClick={clear}>
            Clear All
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Listpage;
