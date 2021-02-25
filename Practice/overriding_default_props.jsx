const Items = (props) => {
    return (
        <h1>Current quantity of items in cart is: {props.quantity}</h1>
    );
};

Items.defaultProps = { quantity : 0};

class ShoppingCart extends React.Component{
    constructor(props){
        super(props);
    };

    render(){
        return (
            <Items quantity = {10}/>
        );
    };
};