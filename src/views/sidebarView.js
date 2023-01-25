function SidebarView(props) {
    let number = props.number;
    return(
        <div>
            <button disabled={number===1}>-</button>
            {number}
            <button>+</button>
        </div>
    );
}

export default SidebarView;