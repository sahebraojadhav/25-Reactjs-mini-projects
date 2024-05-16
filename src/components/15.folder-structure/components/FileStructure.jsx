import React, { useState } from 'react'
import explore from "../jsonForFolder/folder-json/FolderJson"
import FileComp from './FileComp';
import useTraverseTree from '../hooks/use-traverse-tree';
import './style.css';

function FileStructure() {

  const[exploreData,setExploreData]=useState(explore);
 
  const{insertNode}=useTraverseTree();

  const handleInsertNode=(folderId,item,isFolder)=>{
    const finalTree=insertNode(exploreData,folderId,item,isFolder);
    //console.log("explore data=",exploreData,folderId,item,isFolder);
    setExploreData(finalTree);
  }

  //
  //console.log(exploreData);
  //console.log(exploreData);
  return (
    <div className='container-div'>
      <FileComp handleInsertNode={handleInsertNode} exploreData={exploreData}/>
    </div>
  )
}

export default FileStructure
