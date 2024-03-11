class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      
      //add handle
      
    }
    
    // add handleChange here - execute method when something is changed
    handleChange(event) {
      this.setState({ value: event.target.value });
    }
    
    // add handleSubmit here - execute method when a form is submitted
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
    
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          
        </form>
      );
    }
  }
  
  ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
  );