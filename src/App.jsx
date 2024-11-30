import './App.css'
import { useState } from "react";
import UserDetails from "./component/UserDetails";
import RandomJoke from "./component/RandomJoke";
import RandomQuote from './component/RandomQuote';
import RandomDog from './component/RandomDog';
import YoutubeVideos from './component/YoutubeVideos';

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
        case "randomDog":
          return <RandomDog/>
        case "youtubeVideos":
          return <YoutubeVideos/>
      default:
        return <p className='default-label'>Please select any project to display...</p>
    }
  }

  return (
    <>
      <div className="projects">
        <button onClick={() => setSelectedProject("userDetails")} className={selectedProject === "userDetails" ? "selected-project" : "" }>User Details</button>
        <button onClick={() => setSelectedProject("randomJoke")} className={selectedProject === "randomJoke" ? "selected-project" : ""} >Random Joke</button>
        <button onClick={() => setSelectedProject("randomQuote")} className={selectedProject === "randomQuote" ? "selected-project" : ""}>Random Quote</button>
        <button onClick={() => setSelectedProject("randomDog")} className={selectedProject === "randomDog" ? "selected-project" : ""}> Random Dog</button>
        <button onClick={() => setSelectedProject("youtubeVideos")} className={selectedProject === "youtubeVideos" ? "selected-project" : ""} >Youtube Videos</button>
      </div>
      {renderSelectProject()}
    </>
  )
  
}

export default App;
