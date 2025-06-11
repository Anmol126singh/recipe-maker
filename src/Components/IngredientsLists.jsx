import React from 'react'

function IngredientsLists(props) {
     console.log("clicked")
  return (
<section>
    <h1>Ingredients on hand:</h1>
 <ul>
    {props.list}
   </ul>
    {props.list.length>3 && <div className="getrecipe-container">
      <div>
        <h3>Ready for a recipe?</h3>
        <p>Generate a recipe from your list of ingredients</p>

      </div>
      <button onClick={props.click}>Get a Recipe</button>
   

    </div>}
   </section>  )
}

export default IngredientsLists