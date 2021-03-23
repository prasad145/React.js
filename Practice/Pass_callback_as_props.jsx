// You can pass state as props to child components, but you're not limited to passing data. 
// You can also pass handler functions or any method that's defined on a React component to a child component. 
// This is how you allow child components to interact with their parent components. 
// You pass methods to a child just like a regular prop. 
// It's assigned a name and you have access to that method name under this.props in the child component.
class MyApp extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            inputValue : ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({
            inputValue : event.target.value
        })
    }

    render(){
        return(
            <div>
                <GetInput input = {this.state.inputValue} handleChange = {this.handleChange}/>
                <RenderInput input = {this.state.inputValue}/>
            </div>
        )
    }
}

class GetInput extends React.Component{
    constructor(props)
    {
        super(props);
    }

    render(){
        return(
            <div>
                <h3>Get Input: </h3>
                <input value = {this.state.inputValue} onChange = {this.handleChange}/>
            </div>
        );
    }
}

class RenderInput extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h3>Input Render</h3>
                <p>{this.props.input}</p>
            </div>
        )
    }
}