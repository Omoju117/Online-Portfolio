import { VFC } from 'react';
import { Link } from 'react-router-dom';

const SiteHeader: VFC = () => (
  <>
    <header className="site-header">
      <div className="wrapper">
        <div className="site-header-inner">
          <nav className="site-header-navigation">
            <ul className="nav">
              <li className="nav-item">
                <Link to="/">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/skill">Skill</Link>
              </li>
              <li className="nav-item">
                <Link to="/work">Work</Link>
              </li>
              <li className="nav-item">
                <Link to="/books">Books</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  </>
);

export default SiteHeader;
