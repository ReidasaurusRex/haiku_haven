class App extends React.Component {
  constructor() {
    super();
    this.properPage = this.properPage.bind(this);
    this.handleCreateClick = this.handleCreateClick.bind(this);
    this.handleTitleClick = this.handleTitleClick.bind(this);
    this.handlePost = this.handlePost.bind(this);
    this.handleAccessClick = this.handleAccessClick.bind(this);
    this.state = {
      currentPage: 'index'
    }
  }
  properPage() {
    if (this.state.currentPage === 'index') {
      return (<Haikus url={this.props.url} />);
    } else if (this.state.currentPage === 'create') {
      return (<CreateHaiku url={this.props.url} successfulPost={this.handlePost}/>);
    }
  }
  handleAccessClick() {
    
  }
  handleCreateClick() {
    this.setState({currentPage: 'create'});
  }
  handleTitleClick() {
    this.setState({currentPage: 'index'})
  }
  handlePost() {
    this.setState({currentPage: 'index'});
  }
  render() {
    return (
      <div className="app">
        <NavBar sendTitleClick={this.handleTitleClick} sendCreateClick={this.handleCreateClick} sendAccessClick={this.handleAccessClick}/>
        {this.properPage()}
      </div>
    );
  }
}