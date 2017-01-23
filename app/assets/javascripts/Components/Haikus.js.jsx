class Haikus extends React.Component {
  constructor() {
    super();
    this.state = {
      haikus: []
    }
  }
  componentDidMount() {
    $.ajax({
      url: this.props.url,
      dataType: 'json', 
      type: 'GET', 
      cache: false,
      success: function(data) {
        console.log(data);
        this.setState({haikus: data.haikus})
      }.bind(this),
      error: function() {
        console.log(this.props.url, status, err.toString());
      }.bind(this)
    });
  }
  render() {
    var haikus = this.state.haikus.map((haiku) => {
      return (
        <li>
          <p>{haiku.line1}</p>
          <p>{haiku.line2}</p>
          <p>{haiku.line3}</p>
        </li>
      );
    })
    return (
      <ul className="haikus">
        {haikus}
      </ul>
    );
  }
}