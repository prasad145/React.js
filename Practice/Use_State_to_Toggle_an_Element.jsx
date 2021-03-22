// Sometimes you might need to know the previous state when updating the state. 
// However, state updates may be asynchronous - this means React may batch multiple setState() calls into a single update.
// This means you can't rely on the previous value of this.state or this.props when calculating the next value.
// like :
//   this.setState((state, props) => ({
//     counter: state.counter + props.increment
//   }));
  
//   You can also use a form without props if you need only the state:
  
//   this.setState(state => ({
//     counter: state.counter + 1
//   }));
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        visibility: false
      };
      this.toggleVisibility = this.toggleVisibility.bind(this);
    }
    // Change code below this line
    toggleVisibility(){
      this.setState(state => ({
        visibility : !state.visibility
      }));
    }
    render() {
      if (this.state.visibility) {
        return (
          <div>
            <button onClick={this.toggleVisibility}>Click Me</button>
            <h1>Now you see me!</h1>
          </div>
        );
      } else {
        return (
          <div>
            <button onClick={this.toggleVisibility}>Click Me</button>
          </div>
        );
      }
    }
  }