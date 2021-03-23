// Your application may have more complex interactions between state and the rendered UI. 
// For example, form control elements for text input, such as input and textarea, maintain their own state in the DOM as the user types. 
// With React, you can move this mutable state into a React component's state. 
// The user's input becomes part of the application state, so React controls the value of that input field. 
// Typically, if you have React components with input fields the user can type into, it will be a controlled input form.
class ControlledInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            input : ''
        };

        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event){
        this.setState({
            input : event.target.value
        });
    }

    render(){
        return (
            <div>
                {/* value will store the changes and updates to state
                onChange is a event here  */}
                <input value = {this.state.input} onChange = {this.handleChange.bind(this)} />
                <h4>Controlled Input :</h4>
                <p>
                    {this.state.input}
                </p>
            </div>
        );
    }
};