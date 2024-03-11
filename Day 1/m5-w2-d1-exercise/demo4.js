class FileInput extends React.Component {
    constructor(props) {
      super(props);
      // using uncontrolled component
      this.handleSubmit = this.handleSubmit.bind(this);
      this.fileInput = React.createRef();
    }

    // file uploads 
    handleSubmit(event) {
      event.preventDefault();
        alert(
          `Selected file - ${this.fileInput.current.files[0].name}`
        );
    }
  
    render() {
   
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Upload file: 
            <input type="file" ref={this.fileInput} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      );
    }
  }
  
  ReactDOM.render(
    <FileInput />,
    document.getElementById('root')
  );