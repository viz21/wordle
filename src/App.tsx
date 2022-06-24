import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CustomInput from './component/CustomInput';

const API_URL = 'https://www.algoexpert.io/api/fe/wordle-words';

export const App = () => {
  const [randomWord, setRandomWord] = useState('');
  const [guessedWords, setGuessedWords] = useState(new Array(5).fill(''));

  useEffect(() => {
    const fetchWords = async () => {
      const response = await fetch(API_URL);
      const words: string[] = await response.json();
      setRandomWord(words[Math.floor(Math.random() * words.length)]);
    };

    fetchWords();
  }, []);

  return (
    <div className="App">
      Random Word is: {randomWord}
      {guessedWords.map((item) => {
        return <CustomInput />;
      })}
    </div>
  );
};

export default App;
