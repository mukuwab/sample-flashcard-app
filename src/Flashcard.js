//use rfc to create a react functional component
//uses the extension ES7+React/Redux/GraphQL/React-Native snippets

import React, {useState, useEffect, useRef, use} from 'react'
//useState will allow us to use state in a functional component
//it will handle the flipping of the flashcard to show the answer

//Need to prevent options from going past the bottom of the card
//will do this by adding "use effect" to "import React, {useState} from 'react'"
//and useRef to get a reference of different elements in the DOM
//for example, to get the "front" element (<div className='front'>...</div>)
//you insert ref={frontEl} in the div tag (below)

export default function Flashcard({flashcard}) {
  
  const [flip, setFlip] = useState(false);
    //set to false by default to show the question first
  const [height, setHeight] = useState('initial');
    //set the initial height to 'initial' so that it will adjust based on the content
  
  const frontEl = useRef();
  const backEl = useRef();
    //useRef() will create a reference to the front and back elements
    //frontEl and backEl are variables that will hold the reference to the elements
    //we can then use these variables to access the elements in the DOM
    //used to have access to any variable you want that persists between renders

    //create a function to calculate the max height of the container
    function setMaxHeight() {
      const frontHeight = frontEl.current.getBoundingClientRect().height;
      const backHeight = backEl.current.getBoundingClientRect().height;
      //getBoundingClientRect() will return the size of an element and its position relative to the viewport
      //.height will return the height of the element specifically
      //we want the height of the front and back elements
      //current is a property of the useRef() hook that will give us access to the DOM element

      //next return the maxium (or max height) of the two heights
      //will set the height of the container to the max height of the two elements
      Math.max(frontHeight, backHeight, 100) //Math is a built-in object that has properties and methods for mathematical constants and functions
      //Math.max() will return the largest of the numbers passed to it
      //set the default minimum height to 100px to prevent the card from being too small


      //to save the max height, create a variable above in the state
      //ex: const [height, setHeight] = useState('initial');
    
    setHeight(Math.max(frontHeight, backHeight, 100) + 25);
    //add 25px to the height to account for padding and prevent scroll bar from appearing
    
    }

  useEffect(() => { setMaxHeight()
  
  }, [flashcard.question, flashcard.answer, flashcard.options]);
  //useEffect will run the function whenever the component renders
  //whenever any of the above change, the useEffect will run the function to set the max height
  //this will ensure that the height of the container is always correct based on the content

  useEffect(() => { window.addEventListener('resize', setMaxHeight);
    //every time the window is resized, run the setMaxHeight function
    return () => window.removeEventListener('resize', setMaxHeight);
    //cleanup function to remove the event listener when the component unmounts
    //returm called when the component unmounts/destroys itself
  }, []); 
  //will cause components to change heigh dynamically when the window is resized based on the content

  return (
    <div 
    className={`card ${flip ? 'flip' : ''}`}
    style = {{height: height}}
   
    onClick={()=> setFlip(!flip)}
      
    >
       {/*set height equal to height variable to apply the setMaxHeight function, add changes to css as well (remove height from .card)*/}
       {/*Note: cannot put comments inside tags like div or h1 */}
       {/*You need backticks for template literals: `...` */}
       {/*will set the current flip state to the opposite of what it currently is*/}

      
       {/* Clicking flips the card */}

      <div className='front' ref={frontEl}>
        {/*frontEl is a variable we will create*/}
        {flashcard.question}
        <div className='flashcard-options'>
          {flashcard.options.map(option => (
            <div className='flashcard-option' key={option}>
              {option}
            </div>
          ))}
        </div>
      </div>

      <div className='back' ref={backEl}>{flashcard.answer}</div>
    </div>
  );
}
      
      
      
      
      

