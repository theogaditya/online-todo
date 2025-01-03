import React, { useState } from "react";
import "./addtodo.css";

function Addtodo() {
  const [todos, settodos] = useState([]);
  const [newtodo, setnewtodo] = useState("");

  function inputfn(e) {
    setnewtodo(e.target.value);
  }
  function buttonfn() {
    if(newtodo.trim() != ""){
        settodos((t) => [...t, newtodo]);
        setnewtodo("");
    }
  }

  function deletefn(index) {
    let afterDeleteArray = todos.filter( (x,i)=>{
        return( i!=index )
    } )
    settodos(afterDeleteArray)
  }

  function moveupfn(index) {
    if(index >0){
        let aftermovmentArray = [...todos];
        [ aftermovmentArray[index] , aftermovmentArray[index-1] ] = 
        [ aftermovmentArray[index-1], aftermovmentArray[index] ]
        settodos(aftermovmentArray); 
    }
  }

  function movedownfn(index) {
    if(index < todos.length-1 ){
        let aftermovmentArray = [...todos];
        [ aftermovmentArray[index] , aftermovmentArray[index+1] ] = 
        [ aftermovmentArray[index+1], aftermovmentArray[index] ]
        settodos(aftermovmentArray); 
    }
  }

  return (
    <div className="Innerdiv">
      <input
        type="text"
        value={newtodo}
        onChange={inputfn}
        placeholder="enter your task"
        onKeyDown={(e) => e.key === "Enter" && buttonfn()}
      />
      <button onClick={buttonfn} className="AddTaskButton">
        add task 💪
      </button>
      <hr />
      <div className="displaytodo">
        <h3>Your Todos</h3>
        <ul>
          {todos.map((x, index) => {
            return (
              <div className="individualtodos">
                <li key={index}> {x}

                  <button
                    onClick={() => deletefn(index)}
                    className="deleteTaskButton"
                  >
                    delete ☠️
                  </button>
                  <button
                    onClick={() => moveupfn(index)}
                    className="movingTaskButton"
                  >
                    move up 👆
                  </button>
                  <button
                    onClick={() => movedownfn(index)}
                    className="movingTaskButton"
                  >
                    move down 👇
                  </button>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Addtodo;
