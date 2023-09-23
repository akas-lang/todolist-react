import React,{useState} from "react";
import ReactDom from "react-dom";
import logo from './images/logo.png'
const Practice=()=>
{
    const[one,call1]=useState('');
    const[arr,arrfunc]=useState([]);
    const[tog,toggle]=useState(true);
    const [c1,check]=useState(null);
    const additem= () =>
  {
   
    if(!one)
    {
        alert('enter the value')
    }

    else if(one && !tog)
    {
        arrfunc(
            arr.map((elem)=>
            {
                if(elem.id === c1) 
                {
                    return{ ...elem,name:one}
                }     
                return elem;    
            } ))
                
       
        call1('');
        check(null);
        toggle(true);
    }
    else{
const obj={id:new Date().getTime().toString(),
name:one};
arrfunc([...arr,obj]);
call1('');
    }
  }

  const deleteitem = (id) =>
  {
const de=arr.filter((element)=>{
    return element.id != id
})
arrfunc(de);

  }
  const edititem = (id) => {
const sear=arr.find((ele) => {
    return id === ele.id;
})
toggle(false);
call1(sear.name);

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
           <input className="input1" placeholder="enter the value"   value={one} onChange={(e)=>call1(e.target.value)}/>
           {
            tog ?   <button onClick={additem}>add</button> :  <button onClick={additem}>edit</button>
           }
         
        </div>
        <div className="show-items">
            {
                arr.map((element)=>{
                    return(
<div className="event1">
    <h1>{element.name}</h1>
    <button onClick={()=>{
        edititem(element.id)
    }}>edit</button>
    <button onClick={() => deleteitem(element.id)}>delete</button>
</div>)
                })
            }

        </div>
        </div>
    )
}
export default Practice;