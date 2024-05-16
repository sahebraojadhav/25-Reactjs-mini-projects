import React, { useState } from "react";
import "./style.css"

function FileComp({handleInsertNode,exploreData }) {
  //console.log(exploreData);
  const [expand, setExpand] = useState(false);
  const[showInput,setShowInput]=useState({
    visible:false,
    isFolder:null
  })

  const handleNewFolder=(e,isFolder)=>{
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible:true,
      isFolder
    })
  }

   const onAddFolder=(e)=>{
      if(e.keyCode==13 && e.target.value){
       handleInsertNode(exploreData.id,e.target.value,showInput.isFolder)
       console.log("explore data",exploreData.id,e.target.value,showInput.isFolder)
        setShowInput({...showInput,visible:false});
      }
   }

  if (exploreData.isFolder)
    return (
      <div style={{ marginTop: 5 }}>
        <div className="folder" onClick={()=>setExpand(!expand)}>
          <span>📁{exploreData.name}</span>
          <button onClick={(e)=>handleNewFolder(e,true)}>Folder +</button>
          <button onClick={(e)=>handleNewFolder(e,false)}>File +</button>
        </div>
        <div style={{display:expand ? "block":"none", paddingLeft:"25px"}}>
          
          {
            showInput.visible && (
              <div className="inputContainer">
                <span>{showInput.isFolder ? "📁" :"📄"}
                <input 
                type="text"
                onKeyDown={onAddFolder}
                onBlur={()=>setShowInput({...showInput,visible:false})}
                className="inputContainer__input"
                autoFocus
                />
                </span>
              </div>
            )
          }

          {exploreData.childFolders.map((exp) => {
            return <FileComp handleInsertNode={handleInsertNode} exploreData={exp} key={exp.id}/>
          })}
        </div>
      </div>
    );
  else {
    return <span className="file">📄{exploreData.name}</span>;
  }
}

export default FileComp;


//19:04