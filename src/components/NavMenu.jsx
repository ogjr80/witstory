// src/components/NavMenu.js
import React from 'react';

const NavMenu = ({ links }) => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#333', padding: '16px' }}>
      <div>
        <strong style={{ color: 'white' }}>Logo</strong>
      </div>
      <div>
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', gap: '16px' }}>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.url} style={{ color: 'white', textDecoration: 'none' }}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavMenu;
