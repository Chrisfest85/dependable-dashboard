import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-brand">
          <h1 className="header-title">
            <span className="brand-name">Dependable Renovations</span>
            <span className="header-divider">|</span>
            <span className="header-subtitle">toolbox</span>
          </h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
