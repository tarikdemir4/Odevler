import React from 'react';
import './App.css'; // CSS dosyasını içe aktar

export default function Header(props) {
  return (
    <header className="header">
      <div className="header-title">{props.title}</div>
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Ana Sayfa</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Hakkında</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Hizmetler</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">İletişim</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
