import React, { useEffect, useState } from 'react';
import './style.css';
import { Joke } from './components/Joke/joke/joke';

export const HomePage = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const fetchJokes = async () => {
      const response = await fetch('http://localhost:4000/api/jokes');
      const data = await response.json();
      setJokes(data.data);
    };
    fetchJokes();
  }, []);

  return (
    <div className="container">
      <h1>Vtipy</h1>
      {jokes.map((joke) => (
        <Joke
          key={joke.id}
          userAvatar={joke.avatar}
          userName={joke.userName}
          text={joke.text}
          likes={joke.likes}
          dislikes={joke.dislikes}
        />
      ))}
    </div>
  );
};
