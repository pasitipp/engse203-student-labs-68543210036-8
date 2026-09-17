import { NavLink } from 'react-router-dom';

function AppHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div>
          <p className="eyebrow">ENGSE203 • LAB 05</p>
          <p className="brand">Campus Service Request</p>
        </div>
        <nav style={{ display: 'flex', gap: '1rem' }}>
          <NavLink to="/" end className="nav-link">Dashboard</NavLink>
          <NavLink to="/new" className="nav-link">New Request</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default AppHeader;