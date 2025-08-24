
//Need to store the SAMPLE_FLASHCARDS in a state variable
import React, {useState,useEffect, use} from 'react';

import FlashcardList from './FlashcardList'; //import Flashcard component
//retrieve the Flashcard component from the Flashcard.js file
//'./Flashcard' means look in the same directory as this file (App.js)
//if the file was in a different directory, we would need to specify the path

//Note: a component is a way to split the UI into independent, reusable pieces
//and think about each piece in isolation
//Components can be nested within other components to build complex UIs

//sample questions that help render flashcards

import './App.css'; //import the CSS file for styling

/*For the API go to: https://opentdb.com/api_config.php*/
  /*10 questions, any for all others*/
  /*copy the URL and use fetch to get the data from the API*/
  /* you can paste the URL in the browser to see the data*/
  /*to call the API, use library like axios*/
  import axios from "axios";
  /* need to add useEffect to make the API call as soon as the page loads*/
  /* Add it to this: import React, {useState} from 'react'; */
  /*Becomes import React, {useState,useEffect} from 'react';*/ 


function App() {
  //This will be the main component for the flashcard app
  //it will contain all of the other sub-components

  const[flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
  //function is setFlashcards
  //initial value (default value) is SAMPLE_FLASHCARDS
  //flashcards is the current value of the state variable

  useEffect(() => {
    
    axios.get("https://opentdb.com/api.php?amount=10")
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
    //axios
      //.get('https://opentdb.com/api.php?amount=10')
      //make a GET request to the API
      //=10 means we want 10 questions, amount is set to 10
      //.then(res => {
        //console.log(res.data);
        //log the data to the console to see what it looks like
        //res is the response from the API
        //res.data is the data we want
        //we will need to format the data to match our flashcard format
        //the data from the API is in a different format than our flashcard format
        //we will need to map the data to our flashcard format
        //we will use the map function to do this
        //map function will loop through each item in the array and return a new array
        //with the formatted data


      

  }, []); //empty dependency array means this will only run once when the component mounts

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
