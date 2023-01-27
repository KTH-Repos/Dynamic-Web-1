import { dishType,sortDishes,menuPrice } from "../utilities";

function SidebarView(props) {
    let number = props.number;
    let dishes = sortDishes(props.dishes);
    let totalPrice = menuPrice(props.dishes);

    function dishTableRowCB(dish){
        const dishTyp = dishType(dish);
        return <tr>
                 <td><button>x</button></td>
                 <td><a href="#">{dish.title}</a></td>
                 <td>{dishTyp}</td>
                 <td class="qtyAlign">{(dish.pricePerServing*number).toFixed(2)}</td>
               </tr>
    }

    return(
        <div>
            <button disabled={number===1}>-</button>
            {number}
            <button>+</button>
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