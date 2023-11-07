import React from 'react'
import { Link } from 'react-router-dom'

const UserProfile = () => {
    return (

        <div class="page-content page-container" id="page-content">
            <div class="paddingg">
                <div class="row container d-flex justify-content-center">
                    <div class="col-xl-6 col-md-12">
                        <div class="cardg user-card-fullg">
                            <div class="row m-l-0 m-r-0">
                                <div class="col-sm-4 bg-c-lite-green user-profileg">
                                    <div class="card-block text-center text-white">
                                        <div class="m-b-25">
                                            <img src="https://img.icons8.com/bubbles/100/000000/user.png" class="img-radiusg" alt="User-Profile" />
                                        </div>
                                        <p className='text-mutedg'>Name</p>
                                        <h6 class="f-w-600">Hembo Tingor</h6>
                                        <br />
                                        <div class="button">
                                            <Link to="/" class="btn">Update Profile</Link>
                                        </div>
                                        {/* <div class="button">
                          <Link to="/" class="btn">Logout</Link>
                        </div> */}


                                        <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                    </div>
                                </div>
                                <div class="col-sm-8">
                                    <div class="card-blockg">
                                        <h6 class="m-b-20 p-b-5 b-b-defaultg f-w-600">Information</h6>
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <p class="m-b-10 f-w-600">Email</p>
                                                <h6 class="text-mutedg f-w-400">rntng@gmail.com</h6>
                                            </div>
                                            <div class="col-sm-6">
                                                <p class="m-b-10 f-w-600">Phone</p>
                                                <h6 class="text-mutedg f-w-400">98979989898</h6>
                                            </div>
                                        </div>
                                        <h6 class="m-b-20 m-t-40 p-b-5 b-b-defaultg f-w-600">Projects</h6>
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <p class="m-b-10 f-w-600">Recent</p>
                                                <h6 class="text-mutedg f-w-400">Sam Disuja</h6>
                                            </div>
                                            <div class="col-sm-6">
                                                <p class="m-b-10 f-w-600">Most Viewed</p>
                                                <h6 class="text-mutedg f-w-400">Dinoter husainm</h6>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default UserProfile