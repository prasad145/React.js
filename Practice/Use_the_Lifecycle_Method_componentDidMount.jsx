// Most web developers, at some point, need to call an API endpoint to retrieve data. 
// If you're working with React, it's important to know where to perform this action.

// The best practice with React is to place API calls or any calls to your server in the lifecycle method componentDidMount(). 
// This method is called after a component is mounted to the DOM. 
// Any calls to setState() here will trigger a re-rendering of your component. 
// When you call an API in this method, and set your state with the data that the API returns, it will automatically trigger an update once you receive the data.

class MyComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            activeUsers : null
        };
    }

    componentDidMount(){
        setTimeout(() =>{
            this.setState(
                {
                    activeUsers : 1273
                }
            )
        }, 2);
    }

    render(){
        return (
            <div>
                <h1>Active Users : {this.state.activeUsers}</h1>
            </div>
        )
    }
}