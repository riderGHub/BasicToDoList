import React, { useState } from "react";
import ToDolists from "./toDolists";
import "../index.css";


const Listpage = () => {
  const [len,setlen]=useState("🤔😃");
  const [inputlist, setinput] = useState([]);
  const [itm, enter_val] = useState("");
  const Add = () => {
    if (itm === "") return;
    setinput([...inputlist, itm]);
////// changing Reactions /////////
    var rxn=inputlist.length;
    console.log(rxn);
    if(rxn<3)
    setlen("🤔😅");
    else if(rxn<6)
    setlen("🤔😟");
    else if(rxn<10)
    setlen("🤔🤕");
    else if(rxn<13)
    setlen("🤔🥲");
    else if(rxn<16)
    setlen("🤔😵‍💫");
    else if(rxn<19)
    setlen("🤔😨");
    else 
    setlen("🤔🤒🤯");
    enter_val("");
  ///////////////////////////////
    
  };
  
  const Item = (e) => {
      enter_val(e.target.value);
  };
  const del = (id) => {
    console.log("deleted");
    /////////changing reactions/////////////
    var rxn=inputlist.length;
    if(rxn<2)setlen("🤔😃")
    else if(rxn<5)
    setlen("🤔😅");
    else if(rxn<8)
    setlen("🤔😟");
    else if(rxn<12)
    setlen("🤔🤕");
    else if(rxn<15)
    setlen("🤔🥲");
    else if(rxn<18)
    setlen("🤔😵‍💫");
    else if(rxn<21)
    setlen("🤔😨");
    else 
    setlen("🤔🤒🤯");
   ///////////////////////////////////
    setinput((inputlist) => {
      return inputlist.filter((arrElem, indx) => {
        return indx !== id;
      });
    });
    
  };

  const check=(e)=>{
      if(e.key==='Enter')Add();
      }
  
  const clear = () => {
    setinput([]);
    //////Reaction/////////
      setlen("🤔😃");   
    ///////////////////////
  };

  
  
  return (
    <>
      <div className="main_div">
        <div className="headline">Today's Task</div>
        <div className="inputfield">
          <input
            className="cin"
            type="text"
            placeholder="Add a Item"
            onChange={Item}
            onKeyUp={check}
            value={itm}
          />

          <button className="addbtn" onClick={Add} title="Add to list">
            <i class="fas fa-solid fa-plus"></i>
          </button>
        </div>
      <div className="emoji"> {len}
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
