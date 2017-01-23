class Haiku extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="haiku">
        <p>{this.props.line1}</p>
        <p>{this.props.line2}</p>
        <p>{this.props.line3}</p>
      </div>
    );
  }
}