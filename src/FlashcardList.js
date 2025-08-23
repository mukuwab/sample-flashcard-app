import React from 'react'
import Flashcard from './Flashcard';//import Flashcard component
//retrieve the Flashcard component from the Flashcard.js file


export default function FlashcardList( {flashcards} ) {
    //pass flashcards as a prop to Flashcard component
    //a prop is a way of passing data from a parent component to a child component
    //props are read-only, meaning they cannot be modified by the child component
    
    
    
    return(
        
        <div className='card-grid'>
            //will make the flashcards responsive using CSS grid
            //will adjust based on the screen size

            //loop through all flashcards and return the flashcard component for each flashcard
            {flashcards.map(flashcard => {
                //flashcards.map() will loop through all of the flashcards
                //flashcards.map(flashcard) will return the flashcard component for each flashcard
                //flashcard is the current flashcard being processed in the loop

                return <Flashcard flashcard= {flashcard} key={flashcard.id} />
                //pass flashcard as a prop to Flashcard component
                //key is a special prop that helps React identify which items have changed, are added,
                //key = {flashcard.id} is a unique identifier for each flashcard
                //prevents unnecessary re-renders of the component (flashcard)
            })
            
            
            }



        </div>
    )
}
