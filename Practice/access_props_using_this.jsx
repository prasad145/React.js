//if the child component that you're passing a prop to is an ES6 class component,
//rather than a stateless functional component? The ES6 class component uses a 
//slightly different convention to access props.

class ReturnTempPassword extends React.Component{
    constructor(props)
    {
        super(props);
    }

    render(){
        return(
            <div>
                Your Temporary Password is: <strong>{this.props.tempPassword}</strong>
            </div>
        );
    }
}; 

class ResetPassword extends React.Component{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div>
                <h2>Reset Password</h2>
                <h3>We have ganenrated new Password for you!</h3>
                <h3>Please reset this Password from your account settings ASAP</h3>
                <ReturnTempPassword tempPassword = {"randomPass#69"}/>
            </div>
        );
    }
};