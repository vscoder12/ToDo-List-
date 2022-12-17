 import React,{useState} from "react";
 import ToDolists from "./ToDolists";
import AddIcon from "@material-ui/icons/Add";

 const Todo=()=>{
    const [inputlist,setInputlist]=useState("");
    const [items,setitems]=useState([]);

 const itemevents=(event)=>{
    setInputlist(event.target.value);
 };
  const listOfItems=()=>{
    setitems((olditems)=>{
     return [...olditems,inputlist];
    });
    setInputlist("");
  };
  const deleteItems=(id)=>{
    console.log("deleted");
   
    setitems((olditems)=>{
       return olditems.filter((arrElem,index)=>{
          return index!==id;
       })
    }) 
 };
    return(
     <>
     <div className='main_div'>
        <div  className='center_div'>
          <br/>
         <h1>ToDo List</h1>
          <br/>
          <input 
          type="text"
           placeholder='Add your item'
           value={inputlist}
           onChange={itemevents}
           />
          <button onClick={listOfItems}><AddIcon/></button>
          <ol>
            {/* <li>{inputlist}</li> */}
            {items.map((itemval,index)=>{
               return   <ToDolists  key={index}  id={index} text={itemval} onSelect={deleteItems}/>;
            })}
          </ol>
        </div>
     </div>

    </>
    );
 };
  
 export default Todo;