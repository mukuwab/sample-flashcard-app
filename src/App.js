
//Need to store the SAMPLE_FLASHCARDS in a state variable
import React, {useState,useEffect} from 'react';

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

}];

function App() {
  //This will be the main component for the flashcard app
  //it will contain all of the other sub-components

  const[flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
  //function is setFlashcards
  //initial value (default value) is SAMPLE_FLASHCARDS
  //flashcards is the current value of the state variable

 


  
  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=10")
      .then(res => {
        res.data.results.map((questionItem, index) => {
          const answer = questionItem.correct_answer//set answer to correct_answer from API
          const options = [...questionItem.incorrect_answers, back]//spread operator to combine incorrect_answers and correct_answer into one array
          //incorrect_answers is an array of incorrect answers from the API
          //back is the correct answer from the API
          //we want to combine them into one array called options
          
          //this will loop through each questionItem in the results array
          //index is the current index of the questionItem in the array
          //questionItem is the current questionItem being processed in the loop
      
          return {
          id: `${index}-${Date.now()}`, //unique id for each flashcard
          question: questionItem.question, //question is the question text
          answer: answer, //correct_answer is the answer to the question
          //make sure to reference the correct key names from the API
          options: options.sort(() => Math.random() - 0.5) //shuffle the options array randomly
          //Math.random() generates a random number between 0 and 1
          //subtracting 0.5 will give us a number between -0.5 and 0.5
          //sort() will sort the array based on the random number generated
          //this will randomize the order of the options in the array
          
        }
      
      })
      console.log(res.data)
     // .catch(err => console.error(err));
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

})       
      
      

  }, []) //empty dependency array means this will only run once when the component mounts

  return (
    <FlashcardList flashcards={flashcards} />//pass flashcards as a prop to Flashcard component
  );
}



export default App;

