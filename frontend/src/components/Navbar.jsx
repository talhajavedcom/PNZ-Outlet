import React from 'react'
import { useState } from 'react';

import { Link } from "react-router-dom";
import logo from "../assets/Images/logo.png";


const Topbar = () => {
  const [user, setUser] = useState(null);
  const [topbarKey, setTopbarKey] = useState(0);

  const userData = JSON.parse(localStorage.getItem('user'));
  const isAuthenticated = localStorage.getItem('authenticated') === 'true';
  const userRole = userData ? userData.role : 0;
  const handleLogout = () => {



    setTopbarKey((prevKey) => prevKey + 1);

    // Clear user data and authentication status
    setUser(null);

    localStorage.removeItem('authenticated');

    // Remove authentication flag from localStorage
  };
  return (

    <>
      <header className="header navbar-area">
        {/* Start Topbar */}
        <div className="topbar">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-4 col-12">
                <div className="top-left">
                  <ul className="menu-top-link">
                    <li>

                    </li>
                    <li>
                      <div className="select-position">
                        <select id="select5">
                          <option value={0} selected>Free Shipping</option>

                        </select>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <div className="top-middle">
                  <ul className="useful-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <div className="top-end">
                  {isAuthenticated ? (
                    <div className="user">
                      {userRole === 1 ? ( // Check if the user has role 1 (admin)
                        <Link to="/admin">
                          <button className="dashboard-nav-btn">Go to Dashboard</button>&nbsp;&nbsp;
                        </Link>
                      ) : null}
                      <i onClick={handleLogout} className="lni lni-share-alt"></i>
                      <a onClick={handleLogout}> Logout</a>
                    </div>
                  ) : (
                    <ul className="user-login">
                      <li>
                        <Link to="/login">Sign In</Link>
                      </li>
                      <li>
                        <Link to="/signup">Register</Link>
                      </li>
                    </ul>
                  )}


                </div>
              </div>
            </div>
          </div>
        </div>

      </header>
      <header className="header navbar-area">
        <div className="header-middle">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-3 col-7">
                <Link className="navbar-brand" to="/">
                  <img src={logo} alt="Logo" />
                </Link>
              </div>
              <div className="col-lg-5 col-md-7 d-xs-none">
                <div className="main-menu-search">
                  <div className="navbar-search search-style-5">
                    <div className="search-input">
                      <input type="text" placeholder="Search" />
                    </div>
                    <div className="search-btn">
                      <button>
                        <i className="lni lni-search-alt" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-2 col-5">
                <div className="middle-right-area">
                  <div className="nav-hotline">
                    <Link to="/user" >  {isAuthenticated ? (
                  <i><img  className='user-profile-img' src={userData.phone} alt="user-Image"  /></i>
                ) : (
                  <i className="lni lni-user" /> // Show a lock icon for not logged in users
                )}
                    
                      <h3>
                        Hi,
                        {isAuthenticated ? (

                          <span>{userData.name}</span>
                        ) : (
                          <span to="/login" >Login to continue</span>
                        )}

                      </h3></Link>
                  </div>
                  <div className="navbar-cart">
                    <div className="cart-items">
                      <Link to="/cart"> <a href="javascript:void(0)" className="main-btn">
                        <i className="lni lni-cart" />
                        <span className="total-items">2</span>
                      </a></Link>

                      {/* <div className="shopping-item">
                <div className="dropdown-cart-header">
                  <span>2 Items</span>
                </div>

                <div className="bottom">
                  <div className="total">
                    <span>Total</span>
                    <span className="total-amount">$134.00</span>
                  </div>
                  <div className="button">
                    <a href="checkout.html" className="btn animate">
                      View Cart
                    </a>
                  </div>
                  <div className="button">
                    <a href="checkout.html" className="btn animate">
                      Checkout
                    </a>
                  </div>
                </div>
              </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-6 col-12">
              <div className="nav-inner">
                <div className="mega-category-menu">
                  <span className="cat-button">
                    <i className="lni lni-menu" />
                    All Products
                  </span>
                  <ul className="sub-category">
                    <li>
                      <Link to="/men">
                        Men <i className="lni lni-chevron-right" />
                      </Link>
                      <ul className="inner-sub-category">
                        <li>
                          <Link to="/men">T-Shirts</Link>
                        </li>
                        <li>
                          <Link to="/men">Jeans</Link>
                        </li>
                        <li>
                          <Link to="/men">Shose</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/woman">Woman</Link>
                    </li>

                    <li>
                      <Link href="/kids">Kids</Link>
                    </li>
                  </ul>
                </div>

                <nav className="navbar navbar-expand-lg">
                  <button
                    className="navbar-toggler mobile-menu-btn"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="toggler-icon" />
                    <span className="toggler-icon" />
                    <span className="toggler-icon" />
                  </button>
                  <div
                    className="collapse navbar-collapse sub-menu-bar"
                    id="navbarSupportedContent"
                  >
                    <ul id="nav" className="navbar-nav ms-auto">
                      <li className="nav-item">
                        <Link
                          to="/"
                          className="active"
                          aria-label="Toggle navigation"
                        >
                          Home
                        </Link>
                      </li>

                      <li className="nav-item">
                        <a
                          className="dd-menu collapsed"
                          href="javascript:void(0)"
                          data-bs-toggle="collapse"
                          data-bs-target="#submenu-1-4"
                          aria-controls="navbarSupportedContent"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                        >
                          Shop
                        </a>
                        <ul className="sub-menu collapse" id="submenu-1-4">
                          <li className="nav-item">
                            <Link to="/men">Men</Link>
                          </li>
                          <li className="nav-item">
                            <Link to="/woman">Woman</Link>
                          </li>
                          <li className="nav-item">
                            <Link to="/kids">Kids</Link>
                          </li>
                          <li className="nav-item">
                            <Link to="/All-Products">All Products</Link>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <Link to="/about" aria-label="Toggle navigation">
                          About Us
                        </Link>
                      </li>
                      <li className="nav-item">
                        <a href="/contact" aria-label="Toggle navigation">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="nav-social">
                <h5 className="title">Follow Us On Social Media: </h5>
                <ul>
                  <li>
                    <a href="/">
                      <i className="lni lni-facebook-filled" />
                    </a>
                  </li>

                  <li>
                    <a href="/">
                      <i className="lni lni-youtube" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

    </>


  )
}

export default Topbar