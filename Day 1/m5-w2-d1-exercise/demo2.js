class Reservation extends React.Component {
    constructor(props) {
      super(props);
      // add default state for both fields 
      this.state = {
        isGoing: true,
        numberOfGuests: 2
      };
  
      this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    // update 'handle' method for multiple fields
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
        this.setState({
          [name]: value
        });
    }
  
    // form adds multiple fields
    render() {
      return (
        <form>
          <label>
            Is going: 
            <input type="checkbox" name="isGoing" checked={this.state.isGoing} onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Number of guests:
            <input type="number" name="numberOfGuests" value={this.state.numberOfGuests} onChange={this.handleInputChange} />
          </label>
        </form>
      );
    }
  }
  
  ReactDOM.render(
    <Reservation />,
    document.getElementById('root')
  );
  