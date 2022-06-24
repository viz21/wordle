import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CustomInput from './components/CustomInput';

const API_URL = 'https://www.algoexpert.io/api/fe/wordle-words';

export const App = () => {
  const [randomWord, setRandomWord] = useState('');
  const guessedWords = new Array(5).fill('');

  useEffect(() => {
    const fetchWord = async () => {
      const response = await fetch(API_URL);
      const words: string[] = await response.json();
      setRandomWord(words[Math.floor(Math.random() * words.length)]);
    };

    fetchWord();
  }, []);

  return (
    <div className="App">
      {guessedWords.map((item) => {
        return <CustomInput correctWord={randomWord.toLowerCase()} />;
      })}
    </div>
  );
};

export default App;
