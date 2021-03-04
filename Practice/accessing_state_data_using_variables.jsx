/*
we can also access state data using variables before return statement inside
the render() method
*/

class MyComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name : "Prasad"
        }
    }

    render(){
        //using name variable before return 
        const name = this.state.name;
        return(
            <div>
                <h1>{name}</h1>
            </div>
        );
    }
};