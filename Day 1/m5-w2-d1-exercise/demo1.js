class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      
      //add handle - to handle both methods [handleChange, handleSubmit]
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
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
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  
  ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
  );