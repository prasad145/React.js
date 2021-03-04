// React provides a method for updating component state called setState. 
// You call the setState method within your component class like so: this.setState(), passing in an object with key-value pairs.
// React expects you to never modify state directly, instead always use this.setState() when state changes occur. 
// Also, you should note that React may batch multiple state updates in order to improve performance. 
// What this means is that state updates through the setState method can be asynchronous.
class MyComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name = "Initial State"
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({name : 'React Rocks!'});
    }

    render(){
        return(
            <div>
                <button onclick = {this.handleClick}>Click Me</button>
                <h1>{this.state.name}</h1>
            </div>
        );
    }
};