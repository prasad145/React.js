const inputStyle = {
    width : 250,
    margin : 5
};

class CheckUserAge extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userAge : '',
            input : ''
        };
        this.submit = this.submit.bind(this);
        this.handleChange - this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState(
            {
                input : event.target.value,
                userAge : ''
            }
        )
    }

    submit(){
        this.setState((state) => ({
            userAge : state.input
        }));
    }

    render(){
        const buttonOne = <button onClick = {this.handleChange}>Submit</button>
        const buttonTwo = <button onClick = {this.handleChange}>You May Enter</button>
        const buttonThree = <button onClick = {this.handleChange}>Not For You</button>
        
        return (
            <div>
                <h3>Enter Your Age to Continue!!</h3>
                <input type="number" value = {this.state.input} onChange = {this.handleChange}/>
                <br/>
                {
                    this.state.userAge === ''? buttonOne : this.state.userAge >= 18 ? buttonTwo : buttonThree
                }
            </div>
        )
    }
}