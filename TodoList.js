import React, { useState } from 'react'

function TodoList() {
    const [Activity , setActivity]= useState("");
    const [listData, setlistData]= useState([]);
    function addActivity (){
        // setlistData([...listData, Activity])
        // console.log(listData)
        setlistData((listData) => {
            const updateList= [...listData , Activity]
            console.log(updateList)
            setActivity('');
            return updateList

        })

    }

    function removeActivity(i){
        const updatedListData = listData.filter((elem , id)=>{
            return i!=id;
        })
         setlistData(updatedListData);

    }

    function removeAll(){
        setlistData([])

    }
  return (
      <>
      <div className ='container'> 
      <div className='header'>TODO LIST</div>
      <input type= 'text' placeholder='Add Activity' value={Activity} onChange={(e)=> setActivity(e.target.value)} />
       <button onClick={addActivity}>ADD</button>
       <p className='list-heading'>HERE IS YOUR LIST</p>
       {listData!=[] && listData.map((data, i)=> {
           return(
               <>
               <p key= {i}>
                   <div className='listData'>{data}</div>
                   <div className='btn-position'><button onClick={()=> removeActivity(i)}>REMOVE</button></div>

               </p>
               </>
           )
       })}
       {listData.length>=1 &&  <button onClick={removeAll}>REMOVE  ALL</button>}
       

      </div>
     
      </>
    
  )
}

export default TodoList 