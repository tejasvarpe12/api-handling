import React, { useEffect, useState } from 'react'

function RandomJoke() {

  const [jokes, setJokes] = useState([]);
  const [nextJoke, setNextJoke] = useState([]);
  const [currentJokeIndex, setCurrnetJokeIndex] = useState(0);

  useEffect(() => {
    const fetchJoke = async () => {
     try{
      const response = await fetch('https://api.freeapi.app/api/v1/public/randomjokes');
      if(!response.ok){
        throw new Error("Error....!!!");
      }
      const data = await response.json();
      setJokes(data.data.data)
      console.log("List of all jokes...",jokes);
     }catch(error){
      console.log("Error! while fetching jokes...!")
     }
    }
    fetchJoke();
  },[])

  const renderNextJoke = () =>{
    if(currentJokeIndex < jokes.length - 1){
      setCurrnetJokeIndex(currentJokeIndex + 1);      
    }else{
      setCurrnetJokeIndex(0);
    }
  }

  return (
    <div className='joke-container'>
      <h1>Random Joke Generator...</h1>
      {jokes.length > 0 ? (
        <p key={jokes[currentJokeIndex].id}>
          {jokes[currentJokeIndex].content}
        </p>
      ) : (
        <p>Loading jokes...</p>
      )}
      <button onClick={renderNextJoke}>Next Joke</button>
    </div>
  )
}

export default RandomJoke