class NavBar extends React.Component {
  constructor() {
    super();
    this.signInOrOut = this.signInOrOut.bind(this);
  }
  signInOrOut() {
    if (this.props.signedIn) {
      return <li className="c-nav__list__li" onClick={this.props.sendSignOut}>Sign Out</li>;
    } else {
      return <li className="c-nav__list__li" onClick={this.props.sendSignIn}>Sign In</li>;
    }
  }
  render() {
    return (
      <nav className="c-nav">
        <h3 className="c-nav__title" onClick={this.props.sendTitleClick}>
          Haiku Haven
        </h3>
        <ul className="c-nav__list">
          <li className="c-nav__list__li" onClick={this.props.sendCreateClick}>Create</li>
          {this.signInOrOut()}
        </ul>
      </nav>
    );
  }
}