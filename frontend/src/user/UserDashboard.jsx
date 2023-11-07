import React from 'react'
import {  Link, Outlet } from 'react-router-dom';
const UserDashboard = () => {
  return (
    <>
    
    <section className="product-grids section">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-12">
            <div className="product-sidebar">
              <div className="single-widget search">
                <h3>Dashboard</h3>
                <div class=""><button class="btn"><Link to="profile"><button className='btn'>Profile</button></Link><span class="dir-part"></span></button></div>
                <div class=""><button class="btn"><Link to="orders"><button className='btn'>UpdateProfile</button></Link><span class="dir-part"></span></button></div>
                <div class=""><button class="btn"> <Link to="update"><button className='btn'>orders</button></Link><span class="dir-part"></span></button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    
        
       


    <Outlet />
    </>
  )
}

export default UserDashboard