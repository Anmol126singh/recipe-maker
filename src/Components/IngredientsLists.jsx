import React from 'react'

function IngredientsLists(props) {

  return (
<section>
    <h1>Ingredients on hand:</h1>
 <ul data-testId="item">
    {props.list}
   </ul>
    {props.list.length>3 && <div ref={props.ref} className="getrecipe-container">
      <div>
        <h3>Ready for a recipe?</h3>
        <p>Generate a recipe from your list of ingredients</p>

      </div >
      <button  onClick={props.click}>Get a Recipe</button>
   

    </div>}
   </section>  )
}

export default IngredientsLists