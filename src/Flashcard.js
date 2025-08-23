//use rfc to create a react functional component
//uses the extension ES7+React/Redux/GraphQL/React-Native snippets

import React, {useState} from 'react'
//useState will allow us to use state in a functional component
//it will handle the flipping of the flashcard to show the answer

export default function Flashcard({flashcard}) {
  
  const [flip, setFlip] = useState(false);
    //set to false by default to show the question first

  
  if (!flashcard) {
    return <div>No flashcard provided</div>;

    
  }
  return (
    <div 
    className={`card ${flip ? 'flip' : ''}`}
    onClick={()=> setFlip(!flip)}
      
    >
       {/*Note: cannot put comments inside tags like div or h1 */}
       {/*You need backticks for template literals: `...` */}
       {/*will set the current flip state to the opposite of what it currently is*/}

      
       {/* Clicking flips the card */}

      <div className='front'>
        {flashcard.question}
        <div className='flashcard-options'>
          {flashcard.options.map(option => (
            <div className='flashcard-option' key={option}>
              {option}
            </div>
          ))}
        </div>
      </div>

      <div className='back'>{flashcard.answer}</div>
    </div>
  );
}
      
      
      
      
      

