import "./quote.css"
import { useState, useEffect } from "react"

function RandomQuoteGenerator(){
    const [loading,setLoading]=useState(false);
    const [quote,setQuote]=useState(null);
    
    async function fetchQuote(){
        try{
            setLoading(true);
            const apiResponse=await fetch('https://api.quotable.io/quotes/random',
               { method:'GET'})

            const result=await apiResponse.json();
            console.log(result);

            if(result && result.length >0){
                setLoading(false);
                setQuote(result[0]);
            }

        }catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        fetchQuote();
    },[])
    if(loading){
        return <h3 className="loading">LOading ..... </h3>
    }

    function handleRefresh(){
        fetchQuote()
    }
    return(
        <div className="random-quote-generator">
            <h1>Rnadom Quote Generator</h1>
            <div className="quote-wrapper">
                <p className="author-class">{quote?.author}</p>
                <p className="quote-class">{quote?.content}</p>
            </div>
            <button className="refresh-btn" onClick={handleRefresh}>Refresh</button>
        </div>
    )

    
}

export default RandomQuoteGenerator;