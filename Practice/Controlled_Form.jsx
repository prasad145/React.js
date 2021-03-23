// Creating a controlled form is the same process as creating a controlled input, except you need to handle a submit event.
class MyForm extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            input : '',
            submit : ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event){
        this.setState({
            input : event.target.value
        });
    }

    //storing input value in submit state so that whenever user types submit button it will printed on the screen
    handleSubmit(event){
        event.preventDefault(); //because your form is submitting you will have to prevent the page from refreshing.
        this.setState({
            submit : this.state.input 
        });
    }

    render(){
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <input value = {this.state.input} onChange = {this.handleChange}/>
                    <button type = 'submit'>Submit!</button>
                </form>
                <h1>{this.state.submit}</h1>
            </div>
        )
    }
}