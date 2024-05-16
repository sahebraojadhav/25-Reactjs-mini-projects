const useTraverseTree=()=>{
    function insertNode(tree,folderId,item,isFolder){

        if(!tree.childFolders){
            tree.childFolders=[]
        }
        
        if(tree.id == folderId && tree.isFolder){
            console.log(tree);
            console.log("treechildFolder",tree.childFolders);
            tree.childFolders.unshift({
                id:new Date().getTime(),
                name:item,
                isFolder,
                childFolders:[]
            })
            return tree;
        }
       
        let latestNode=[];
           latestNode=tree.childFolders.map((ob)=>{
            return insertNode(ob,folderId,item,isFolder)
        })
        return {...tree,item:latestNode}
       
       
    }
    return {insertNode};
}

export default useTraverseTree;