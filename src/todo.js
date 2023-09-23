import React, { useState } from "react";
import ReactDom from "react-dom";
import logo from './images/logo.png'
const Todo=()=>
{
    const [inputdata,setinputdata]=useState('');
    const[items,setitems]=useState([]);
    const[togglesubmit,settogglesubmit]=useState(true);
    const [isedititem,setisedititem]=useState(null);
    // adding todos
    const addItem=()=>{
        if(!inputdata)
        {
alert('enter value');
        }
        // this else if is for edit option
    //  step2 , only when the data is there in input field and the button type is edit ,the index is checked and name is replaced.  
        else if(inputdata && !togglesubmit ){
            setitems(
                items.map((elem)=>
                {
                    if(elem.id === isedititem) 
                    {
                        return{ ...elem, name:inputdata}
                    }     
                    return elem;    
                      })
                    
            )
            settogglesubmit(true);
            setinputdata('');
            setisedititem(null);
        }
        /// for adding todo
        // allinputdata is a object that creates a id and name for all the element of the array.every array element is given the id and value enterreed is name.

        else{
            const allinputdata={id: new Date().getTime().toString(),name:inputdata}
        setitems([... items,allinputdata])
        setinputdata('')
        }
    }

    // deleting the item from the array.every element has a index that index is checked with the list of array index then it returns the list of elements which is not equal ,the element with equal value is removed form the array.
    const deleteitem=(index)=>{
const updateditem=items.filter((elem)=>{
    return index != elem.id;
});
setitems(updateditem);

    }
    const removeall=()=>{
        setitems([]);
    }

    // editing the element involves 3 steps.
    // step1 - when the edit is clicked the data must go to input and button must change to edit.the index is passed to the find the value in the array using find method , 
    const edititemfn = (id) =>
    {
     let newedititem=items.find((elem) => {
    return elem.id === id
     });
     settogglesubmit(false);
     setinputdata(newedititem.name); // this add the finded value to the input field and additem is again called to insert the new data to the same place in the array where previous data was there.step2 is approached.
          setisedititem(id);
    }
   
    return(
        <div className="header">
        <div className="child-div">
            <figure>
            <img src={logo} className='todo-image'/>
<figcaption className="title">ADD YOUR TODO</figcaption>
            </figure>
        </div>
        <div className="add-items">
            <input type='text' placeholder="ADD ITEMS.." className="input-field"  value={inputdata} onChange={(e)=>setinputdata(e.target.value)}/>
            {
                togglesubmit ?   <button className="add-btn" onClick={addItem}>ADD</button> :  <button className="edit-btn" onClick={addItem}>Edit</button>
            }
          
            
        </div>
        
        <div className="show-items">
            {
                // for displaying the todos
                items.map((elem)=>{
                    return (
                        <div className="eachitem" >
                        <span>{elem.name}</span>
                    
                     <button className="edititem" onClick={()=>edititemfn(elem.id)}>Edit</button>
                        <button className="deleteitem" onClick={()=>deleteitem(elem.id)}>Delete</button>
                      
                    </div>
                    )
                })
            }
           
        </div>
       <button className="deleteall" onClick={removeall}>Delete-All</button>
        </div>
    )
}
export default Todo;
