import React from 'react';
import Icon from '../images/icon2.png';

export interface Navigation {
  name: string;
  link: string;
  active: boolean;
  disabled?: boolean;
}

export interface Props {
  nav: Navigation[];
}

const Header: React.FC<Props> = ({ ...props }) => {
  return (
    <header className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={Icon} alt="WOD Icon" className="d-block my-1" width="30" height="30" role="img" aria-label="WOD" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {props.nav.map((nav) => (
              <li className="nav-item">
                <a className={"nav-link " + nav.active ? 'active' : ''} aria-current={nav.active ? 'page' : 'false'} href={nav.link} tabIndex={nav.disabled ? -1 : undefined} aria-disabled={nav.disabled ? 'true' : 'false'}>{nav.name}</a>
              </li>
            ))}
          </ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
