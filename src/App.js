
//Need to store the SAMPLE_FLASHCARDS in a state variable
import React, {useState} from 'react';

import FlashcardList from './Flashcard'; //import Flashcard component
//retrieve the Flashcard component from the Flashcard.js file
//'./Flashcard' means look in the same directory as this file (App.js)
//if the file was in a different directory, we would need to specify the path

//Note: a component is a way to split the UI into independent, reusable pieces
//and think about each piece in isolation
//Components can be nested within other components to build complex UIs

//sample questions that help render flashcards


function App() {
  //This will be the main component for the flashcard app
  //it will contain all of the other sub-components

  const[flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
  //function is setFlashcards
  //initial value (default value) is SAMPLE_FLASHCARDS
  //flashcards is the current value of the state variable

  return (
    <FlashcardList flashcards={flashcards} />//pass flashcards as a prop to Flashcard component
  );
}

const SAMPLE_FLASHCARDS = [
{
  id: 1,
  question: 'What is 2 + 2?',
  answer: '4',
  options: ['2', '3', '4', '5']

},
{
  id: 2,
  question: 'Question 2',
  answer: '4',
  options: [
    'answer1',
    'answer2',
    'answer3',
    'answer4'
  ]

}
]


export default App;
