class Reservation extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
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
  
    render() {
      return (
        <form>
          
        </form>
      );
    }
  }
  
  ReactDOM.render(
    <Reservation />,
    document.getElementById('root')
  );
  