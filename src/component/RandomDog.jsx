import React, { useEffect, useState } from 'react'

function RandomDog() {
    const [dog, setDog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchDog = async () => {
        try{
            const response = await fetch('https://api.freeapi.app/api/v1/public/dogs/dog/random');
            if(!response.ok){
                throw new Error("Error occured...!");
            }
            const data = await response.json();
            setDog(data.data)
            setLoading(false)
        }catch(error){
            setError("Error while loading dog's data")
            console.log("Error");            
            setError(false)
        }
    }
    
    useEffect(()=>{
        fetchDog();
    },[])

    if(loading){
        return <div>Loading...</div>
    }
    if(error){
        return <div>{error}</div>
    }

  return (
    <div className='dog-container'>
        <h1>RandomDog</h1>
        { dog && dog.image.url &&
            <>
                <p> Here are requested details for the dog: {dog.name}</p>
                {/* <img src={dog.image.url} alt={dog.name} /> */}
                <table>
                    <thead>
                        <tr>
                            <td>Image</td>
                            <td>Breed for</td>
                            <td>Breed Group</td>
                            <td>Life Span</td>
                            <td>temperament</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img className='dog-img' src={dog.image.url} alt={dog.name} /></td>
                            <td>{dog.bred_for}</td>
                            <td>{dog.breed_group}</td>
                            <td>{dog.life_span}</td>
                            <td>{dog.temperament}</td>
                        </tr>
                    </tbody>
                </table>
            </>
        }
    </div>
  )
}

export default RandomDog