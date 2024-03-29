// un-comment when needed:
import {sortIngredients} from "../utilities.js";

/* Functional JSX component. Name must start with capital letter */
function SummaryView(props){

    const ingredients = sortIngredients(props.ingredients);
    return (
            <div class="debug">
              Summary for <span title="nr guests">{props.people}</span> persons:

            
              
              <table>
                  {  //  <---- in JSX/HTML, with this curly brace, we go back to JavaScript, and make a comment
                  /*  The rest of the file is for TW1.5. If you are at TW1.2, wait!  */

                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Aisle</th>
                    <th>Quantity</th>
                    <th>unit</th>
                  </tr>
                </thead>

                  }
                
                <tbody>
                  {  //  <---- in JSX/HTML, with this curly brace, we go back to JavaScript expressions
                      // TODO: un-comment and pass the CB below for array rendering!
                      // TODO once the table rendering works, sort ingredients before mapping. Import the needed function from utilities.js  
                      ingredients.map(ingredientTableRowCB)
                  }
                </tbody>
              </table>
            </div>
    );
    /* for TW1.5 
      Note also that the callback can be defined after it is used! 
      This JS feature is called "function hoisting".
    */
    function ingredientTableRowCB(ingr){
        return <tr key={ingr.id} >
                 <td>{ingr.name}</td>
                 <td>{ingr.aisle}</td>
                 <td class="qtyAlign">{(ingr.amount*3).toFixed(2)}</td>
                 <td>{ingr.unit}</td>
               </tr>;
    }
}

export default SummaryView;
