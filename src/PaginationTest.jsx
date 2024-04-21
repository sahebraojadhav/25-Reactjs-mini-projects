import { useState } from "react";
import Pagination from "."



function PaginationTest(){

    const dummyData=Array.from({length:100},(_,index)=>({
        id:index+1,
        name:`Product${index + 1}`
    }))

    const itemsPerPage=10;
    const[currentPage,setCurrentPage]=useState(1);
    
    function handlePageChange(currentPage){
        setCurrentPage(currentPage);
    }

    function prevIndex(){
        setCurrentPage(currentPage-1);
    }

    function nextIndex(){
        setCurrentPage(currentPage+1);
    }

     
    const indexOfLastItem=currentPage*itemsPerPage;
    const indexOfFirstItem=indexOfLastItem-itemsPerPage;
    const currentListOfItem=dummyData.slice(indexOfFirstItem , indexOfLastItem);


    

    return(
        <div>
            <h1>Pagination</h1>
            <ul>
                {currentListOfItem.map((listItem)=>(
                    <li key={listItem.id}>{listItem.name}</li>
                ))}
            </ul>
            <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(dummyData.length / itemsPerPage)}
            onPageChange={handlePageChange}
            nextIndex={nextIndex}
            prevIndex={prevIndex}
            />
        </div>
    )
}

export default PaginationTest;