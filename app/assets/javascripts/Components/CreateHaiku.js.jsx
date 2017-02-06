class CreateHaiku extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      line1: '',
      line2: '', 
      line3: ''
    }
  }
  handleChange(e) {
    var newState = {}
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log("Holla!");
  }
  render() {
    return (
      <div className="c-create-haiku">
        <form onSubmit={this.handleSubmit}>
          <p>
            <input type="text" name="line1" value={this.state.line1} onChange={this.handleChange}/>  
          </p>
          <p>
            <input type="text" name="line2" value={this.state.line2} onChange={this.handleChange}/>
          </p>
          <p>
            <input type="text" name="line3" value={this.state.line3} onChange={this.handleChange}/>
          </p>
            <input type="submit" value="Post"/>
        </form>
      </div>
    );
  }
}