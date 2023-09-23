import React from 'react'
import logo from './images/logo.png'
import { useState } from 'react';

export default function Todopractice() {
const[input,inputdata]=useState('');
const[arr,arrdata]=useState([]);
const[toggle,togglebutton]=useState(true)
const [ids,idna]=useState(null)
  function additem()
  {
    if(!input)
    {
        alert('empty values')
    }
    else if(input && !toggle)
    {
        arrdata(
        arr.map((ele)=>
        {
            if(ele.id==ids)
            {
                return{...ele,name:input}
            }
            return ele;
        }))
        inputdata('')
        togglebutton(true)
        idna(null)    
    }
  
    else
    {
        const obj={id:new Date().getTime().toString() , name:input}
        arrdata([...arr,obj])
        inputdata('')

    }
  }
  function deleteitem(id)
  {
    const newitem=arr.filter((elem)=>
    {
        return elem.id !=id;
    })
    arrdata(newitem);
  }
  function edititem(id)
  {
    const newe=arr.find((eled)=>{
        return  eled.id===id
    })
    inputdata(newe.name)
    togglebutton(false)
    idna(id)
  }
  return (
    <>
    <div className="header">
    <div className="child-div">
        <figure>
        <img src={logo} className='todo-image'/>
<figcaption className="title">ADD YOUR TODO</figcaption>
        </figure>
    </div>
    </div>
    <div className='inputfield'>
        <input type='text' className='input-field' placeholder='Add..' onChange={(e)=>inputdata(e.target.value)}></input>
     {toggle ?         <button className='additems' onClick={additem}>add</button> :
             <button className='additems' onClick={additem}>edit</button>  
 
}
        
        
 </div>
 <div className='show-items'>
    {
        arr.map((ele)=>{
            return(
                <div className='eachitem'>
                    <h1>{ele.name}</h1>
                    <button onClick={()=>deleteitem(ele.id)}>delete</button>
                    <button onClick={()=>edititem(ele.id)}>edit</button>

                    </div>
            )
        })
    }
 </div>
    </>
  )
}