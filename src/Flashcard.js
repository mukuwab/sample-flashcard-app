//use rfc to create a react functional component
//uses the extension ES7+React/Redux/GraphQL/React-Native snippets

import React from 'react'

export default function Flashcard({flashcard}) {
   if (!flashcard) {
    return <div>No flashcard provided</div>;
  }
  return (
    <div>{flashcard.question}
    
    {/*display the question of the flashcard*/}
    {/* This is how you make a comment in JSX */}
    </div>
  )
}
