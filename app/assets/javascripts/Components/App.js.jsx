class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="app">
        <h1>Haiku Haven</h1>
        <Haikus url={this.props.url} />
      </div>
    );
  }
}