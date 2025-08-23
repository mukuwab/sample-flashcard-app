//use rfc to create a react functional component
//uses the extension ES7+React/Redux/GraphQL/React-Native snippets

import React from 'react'

export default function Flashcard({flashcard}) {
  return (
    <div>{flashcard.question}</div>
    //display the question of the flashcard
  )
}
