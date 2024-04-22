import "./indexCss.css"
function Pagination({currentPage,setCurrentPage,totalPages=10,onPageChange,nextIndex,prevIndex}){
    function generateNoOfPages(){
        const pages=[];
        for(let i=1;i<=totalPages;i++){
            pages.push(i);
        }
        return pages;
    }


   
    
    return(
        <div className="pagination">
            <button className="pagination-btn" disabled={currentPage<=1} onClick={prevIndex }>Prev</button>
           {generateNoOfPages().map((pageNo)=>(
            <button className="pagination-btn" key={pageNo} onClick={()=>onPageChange(pageNo)}>{pageNo}</button>
           ))}
            <button className="pagination-btn" disabled={currentPage>=totalPages} onClick={nextIndex} >next</button>
        </div>
    )
}

export default Pagination; 