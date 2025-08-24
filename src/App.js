
//Hello this is monica
//Need to store the SAMPLE_FLASHCARDS in a state variable
import React, {useState,useEffect, useRef} from 'react';

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
  
  const categoryEl = useRef();
  //useRef() will create a reference to the category element in the DOM
  //categoryEl is a variable that will hold the reference to the element
  //we can then use this variable to access the element in the DOM
  //used to have access to any variable you want that persists between renders

  useEffect(() => {
    axios
      .get("https://opentdb.com/api_category.php?")
      //make sure to put a question mark at the end of the URL
      .then(res => {
        console.log(res.data)//log the data to the console to see what it looks like
        //res is the response from the API
      })
    }, []) //empty dependency array means this will only run once when the component mounts
  //this will get the categories from the API
  //will run only once when the component mounts (loads for the first time)
  //will not run again unless the component unmounts and remounts

  useEffect(() => {
    axios
      .get("https://opentdb.com/api.php?amount=10")
      .then(res => {
        setFlashcards(res.data.results.map((questionItem, index) => {
          const answer = decodeString(questionItem.correct_answer)//set answer to correct_answer from API
          const options = [...questionItem.incorrect_answers.map(a => decodeString(a)), 
            answer
          ]
          //spread operator to combine incorrect_answers and correct_answer into one array
          //incorrect_answers is an array of incorrect answers from the API
          //back is the correct answer from the API
          //we want to combine them into one array called options
          
          //this will loop through each questionItem in the results array
          //index is the current index of the questionItem in the array
          //questionItem is the current questionItem being processed in the loop
      
          return {
          id: `${index}-${Date.now()}`, //unique id for each flashcard
          question: decodeString(questionItem.question), //question is the question text
          //call the decodeString function to decode any HTML entities in the question
          answer: answer, //correct_answer is the answer to the question
          //make sure to reference the correct key names from the API
          options: options.sort(() => Math.random() - 0.5) //shuffle the options array randomly
          //Math.random() generates a random number between 0 and 1
          //subtracting 0.5 will give us a number between -0.5 and 0.5
          //sort() will sort the array based on the random number generated
          //this will randomize the order of the options in the array
          
        }
      
      }))
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

  function decodeString(str) {//pass in a string
    const textArea = document.createElement('textarea');//create a textarea element
    textArea.innerHTML = str;//set the innerHTML of the textarea to the string
    return textArea.value;//return the value of the textarea
    //this will decode any HTML entities in the string
    //for example, &amp; will be converted to &
  
  }


  function handleSubmit(e) {
    //e is the event object
    e.preventDefault();
    //prevents the form from submitting the default way and refreshing the page
    //we want to handle the form submission ourselves, forcing it to go through the react code
  }

  return (
  <> {/* React fragment to wrap the components without adding an extra div to the DOM */}
      <form className='header' onSubmit={handleSubmit}>
        {/* onSubmit will call the handleSubmit function when the form is submitted */}
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category" ref={categoryEl}></select>
        </div>
      </form>
      <div className="container">
        <FlashcardList flashcards={flashcards} />
      </div>
      //FlashcardList component to display the list of flashcards
      //pass flashcards as a prop to FlashcardList component
      //div with className container for styling
      //this will prevent the flashcards from touching the edges of the screen
  </>
  );
}

export default App;

