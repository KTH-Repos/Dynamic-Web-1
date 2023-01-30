import { propsToAttrMap } from "@vue/shared";
import { dishType,sortDishes,menuPrice } from "../utilities";

function SidebarView(props) {
    let number = props.number;
    let dishes = sortDishes(props.dishes);
    let totalPrice = menuPrice(props.dishes);

    function dishTableRowCB(dish){
        const dishTyp = dishType(dish);
        
        function dishOfInterestACB(){
            props.onSeekDishInfo(dish);
        } 
        
        function removeDishACB() {
            props.onDishRemove(dish);
        }

        return <tr key={dish.id}>
                 <td><button onClick={removeDishACB}>x</button></td>
                 <td><a href="#" onClick={dishOfInterestACB}>{dish.title}</a></td>
                 <td>{dishTyp}</td>
                 <td class="qtyAlign">{(dish.pricePerServing*number).toFixed(2)}</td>
               </tr>
    }

    function decreasePeopleACB() {
        props.onNumberChange(number-1);
    }
    
    function increasePeopleACB(){
        props.onNumberChange(number+1);
    }


    return(
        <div>
            <button onClick={decreasePeopleACB}  disabled={number===1}>-</button>
            {number}
            <button onClick={increasePeopleACB} >+</button>
            <table>
                <tbody>
                    {dishes.map(dishTableRowCB)}
                    <tr>
                        <td/>
                        <td class="qtyAlign">Total:</td>
                        <td/>
                        <td>{(totalPrice*number).toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}



export default SidebarView;