import React, { useEffect, useState } from 'react'

function RandomJoke() {

  const [joke, setJoke] = useState('');

  useEffect(() => {
    const fetchJoke = async () => {
     try{
      const response = await fetch('https://api.freeapi.app/api/v1/public/randomjokes');
      if(!response.ok){
        throw new Error("Error....!!!");
      }
      const data = await response.json();
      console.log(data);
     }catch(error){
      console.log("Error! while fetching jokes...!")
     }
    }
    fetchJoke();
  },[])

  return (
    <div>RandomJoke</div>
  )
}

export default RandomJoke