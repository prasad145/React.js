const ShoppingCart = (props) => {
    return(
        <div>
            <h1>Shopping Cart Component</h1>
        </div>
    );
};

//React assigns default props if props are undefined, but if you pass null as the value for a prop, it will remain null.
ShoppingCart.defaultProps = {items : 0};