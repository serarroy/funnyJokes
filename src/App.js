import React, {useEffect, useState} from 'react';
import RotateLoader from 'react-spinners/RotateLoader';
import './App.css';

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [jokeAnswer, setJokeAnswer] = useState('');
  const [jokeQuestion, setJokeQuestion] = useState('');

  
  const getJoke = async() =>{
    setTimeout(() => {
      setIsLoading(false);
      fetch('https://official-joke-api.appspot.com/jokes/random')
      .then(res => res.json()).then(data => {
        setJokeQuestion(data.setup);
        setJokeAnswer(data.punchline);
      })
    }, 3000);
  }

  useEffect(() => {
    getJoke()
  }, [])
  
  
  return (
    <div className="App">
      <h1 className='title'>Funny Jokes</h1>
      {
        isLoading ? <RotateLoader size={15} className='rotate-loader'/>: null
      }
      <div className='jokes-container'>
        <div className='jokes'>
          <div className='joke'>{jokeQuestion}</div>
          <div className='joke'>{jokeAnswer}</div>
        </div>
        <div>
          <button className='joke-button' onClick={getJoke}>Tell me a joke</button>
        </div>
      </div>
    </div>
  );
}

export default App;