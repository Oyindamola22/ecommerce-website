import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navBar.css';
import { FaUser, FaSearch, FaTimes } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { IoBagOutline } from "react-icons/io5";

const NavBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleClear = () => {
    setSearchValue('');
    setIsSearching(false);
  };

  const handleSearchFocus = () => {
    setIsSearching(true);
  };

  return (
    <>
      {isSearching && <div className="overlay" onClick={handleClear}></div>}
      
      <div className="container">
        <div className="mini">
          <div className="logo">
            <a href="/">
              <h2>Merchant & Co.</h2>
            </a>
          </div>
          <div className="wear">
            <Link to="/men" className="men">
              <h3>Men</h3>
            </Link>
            <Link to="/women" className="women">
              <h3>Women</h3>
            </Link>
          </div>
        </div>
        
        <div className="search">
          <input
            type="text"
            className="search-input"
            placeholder="Search for items"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={handleSearchFocus}
          />
          {searchValue ? (
            <FaTimes className="clear-icon" onClick={handleClear} />
          ) : (
            <FaSearch className="search-icon" onClick={handleSearchFocus} />
          )}
        </div>
        
        <div className="icon">
          <div className="icn">
            <FaUser />
          </div>
          <div className="icn">
            <MdFavoriteBorder />
          </div>
          <div className="icn">
            <IoBagOutline />
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
