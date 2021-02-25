{/* Pass Props to a Stateless Functional Component
    passing information from parent component ot child component as props
*/}
{/*stateless functional component means it can only recieve the data and render it*/}
const CurrentDate = (props) => {
    return (
      <div>
        { /* props will have Date() Object */ }
        <p>The current date is: {props.date}</p>
        { /* Change code above this line */ }
      </div>
    );
  };
  
  class Calendar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>What date is it?</h3>
          { /* passing Date() js object with date attribute*/ }   
          <CurrentDate date = {Date()}/>
          { /* Change code above this line */ }
        </div>
      );
    }
  };