import React, { useEffect, useState } from 'react'

function RandomQuote() {

    const [quote, setQuote] = useState([]);

   
    const fetchQuote = async () =>{
        try{
            const response = await fetch('https://api.freeapi.app/api/v1/public/quotes/quote/random');
            if(!response.ok){
                throw new Error("Error whie fetching data...")
            }
            const data = await response.json();
            setQuote(data.data)
        }catch(error){
            console.log(error,"Error occured...!")
        } 
    }
    
    
    useEffect(() => {        
        fetchQuote();
    }, []); 

  return (
    <div className='joke-container'>
        <h1>Random Quote Generator</h1>
        { 
            <>
                <p>Author: {quote.author}</p>
                <p> {quote.content} </p>
            </>
        }
        <button onClick={fetchQuote}>Next Quote</button>
    </div>
  )
}

export default RandomQuote