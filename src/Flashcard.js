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
    <div onClick={()=> setFlip(!flip)}>
      {/*will set the current flip state to the opposite of what it currently is*/}
  

      {flip ? flashcard.answer : flashcard.question}
      {/*if flip is true, show the answer, else show the question*/}
    
    {/*display the question of the flashcard*/}
    {/* This is how you make a comment in JSX */}
    </div>
  )
}
