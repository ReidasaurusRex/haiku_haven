class App extends React.Component {
  constructor() {
    super();
    this.properPage = this.properPage.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      currentPage: 'index'
    }
  }
  properPage() {
    if (this.state.currentPage === 'index') {
      return (<Haikus url={this.props.url} />);
    } else if (this.state.currentPage === 'create') {
      return (<CreateHaiku url={this.props.url} />);
    }
  }
  handleClick() {
    this.setState({currentPage: 'create'})
  }
  render() {
    return (
      <div className="app">
        <button onClick={this.handleClick}>Create</button>
        <h1>Haiku Haven</h1>
        {this.properPage()}
      </div>
    );
  }
}