class OnlyEvens extends React.Component{
    constructor(props)
    {
        super(props);
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('Should I Update');

        if((nextProps.value % 2) % 2 === 0)
            return true;
    }

    componentDidUpdate(){
        console.log('Component re-rendered');
    }

    render(){
        return <h1>{this.props.value}</h1>
    }
};

class Controller extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value : 0
        };
        this.addValue = this.addValue.bind(this);
    }

    addValue(){
        this.setState(state => ({
            value : state.value + 1
        }));
    }

    render(){
        return (
            <div>
                <button onclick = {this.addValue}>ADD</button>
                <OnlyEvens value = {this.state.value}/>
            </div>
        );
    }
};