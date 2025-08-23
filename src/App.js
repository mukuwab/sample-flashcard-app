import React, {useState} from 'react';
import Flashcard from './Flashcard';

//Need to store the SAMPLE_FLASHCARDS in a state variable

function App() {
  //This will be the main component for the flashcard app
  //it will contain all of the other sub-components

  const[flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
  //function is setFlashcards
  //initial value (default value) is SAMPLE_FLASHCARDS
  //flashcards is the current value of the state variable

  return (
    <Flashcard flashcards={flashcards} />
  );
}

//sample questions that help render flashcards
const SAMPLE_FLASHCARDS = [
{
  id: 1,
  question: "What is 2 + 2?",
  answer: "4",
  options: ["2", "3", "4", "5"]

},
{
  id: 2,
  question: 'Question 2',
  answer: "4",
  options: [
    'answer1',
    'answer2',
    'answer3',
    'answer4'
  ]

}
]

export default App;
