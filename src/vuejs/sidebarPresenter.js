import SidebarView from "../views/sidebarView";


export default
function Sidebar(props){
    return <SidebarView number={props.model.numberOfGuests} dishes={props.model.dishes} onNumberChange={modifyNumberofGuestsACB} 
            onSeekDishInfo={showDetailedDishInfoACB} onDishRemove={removeDishACB}/>

    function modifyNumberofGuestsACB(num){
        props.model.setNumberOfGuests(num);
    }

    function showDetailedDishInfoACB(dish) {
        props.model.setCurrentDish(dish.id);
    }

    function removeDishACB(dish) {
        props.model.removeFromMenu(dish)
    }
}