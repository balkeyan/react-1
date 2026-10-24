function Header(props) {
  return (
    <header className="header">
      <h1 className="app-title">{props.title}</h1>
      <p className="slogan">{props.slogan}</p>
    </header>
  );
}

export default Header;
