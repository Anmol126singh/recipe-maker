import React, { useEffect, useRef, useState } from 'react'
import ClaudeRecipe from './ClaudeRecipe';
import IngredientsLists from './IngredientsLists';
import { HfInference } from '@huggingface/inference';
import { getRecipeFromMistral } from './ai';
function Main() {

    const [indgredients,setindgredients]= useState([]);
    const[recipe,setrecipe]=useState("");
  
    const indgredientlist= indgredients.map((item)=>(
         <li key={item }>{item}</li>
    ))
    const RecipeSection = useRef(null);
    function handleonSubmit(formdata){
      
        const item = formdata.get("ingredient");
      
        setindgredients(previndgredients => [...previndgredients,item]);
    };
    async function  getrecipe(){
     const recipeMarkdown= await getRecipeFromMistral(indgredients)
     setrecipe(recipeMarkdown);
    }
    useEffect(()=>{
        if(recipe !== "" && RecipeSection.current!==null){
            const ycord= RecipeSection.current.getBoundingClientRect().top;
            window.scroll({
                top:ycord,
                behavior:"smooth"
            })

        }
   
    },[recipe])
  
  return (
    <>
<div className="wrapper">


   <form action={handleonSubmit} >
    <input type="text" aria-label="add indgredient" placeholder="Oregaon etc" name="ingredient" />
    <button>+ Add ingredient</button>
   </form>
   <div data-testId = "indgredients">
   {indgredientlist.length>0 && <IngredientsLists ref={RecipeSection} list = {indgredientlist} click={getrecipe} /> }

   </div>
{ recipe  &&  <ClaudeRecipe recipe={recipe} />
}  
   </div>
    </>
  )
}


export default Main