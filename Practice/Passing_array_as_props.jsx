const List = (props) => {
    return <p>{props.tasks.join(", ")}</p>
}

class ToDo extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h1>To Do List</h1>
                <h2>Today</h2>
                <List tasks ={["code", "study"]}/>
                <h2>Tomorrow</h2>
                <List tasks = {["practice", "CP", "project"]}/>
            </div>
        );
    }
};