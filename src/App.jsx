import './App.css'
import { useState } from "react";
import UserDetails from "./component/UserDetails";
import RandomJoke from "./component/RandomJoke";
import RandomQuote from './component/RandomQuote';

function App() {
 const [selectedProject, setSelectedProject] = useState(null);

 const renderSelectProject = () => {
    switch(selectedProject){
      case  'userDetails':
        return <UserDetails/>
      case 'randomJoke':
        return <RandomJoke/>
        case "randomQuote" :
          return <RandomQuote/>
      default:
        return <p className='default-label'>Please select any project to display...</p>
    }
  }

  return (
    <>
      <div className="projects">
        <button onClick={() => setSelectedProject("userDetails")}>User Details</button>
        <button onClick={() => setSelectedProject("randomJoke")}>Random Joke</button>
        <button onClick={() => setSelectedProject("randomQuote")}>Random Quote</button>
        <button onClick={() => setSelectedProject("project4")}>project 4</button>
        <button onClick={() => setSelectedProject("project4")}>project 5</button>
      </div>
      {renderSelectProject()}
    </>
  )
  
}

export default App;
