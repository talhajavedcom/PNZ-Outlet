import React from 'react'


const AddProduct = () => {
  return (
    <div className="account-login section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">
            <form className="card login-form" >
              <div className="card-body">
                <div className="title">
                  <center><h3>Add New Product</h3></center>
             
                </div>
           
                <label >Title</label>
                <div className="form-group input-group">
                  
                  <input   className="form-control" type="email" required />
                </div>
                <label >Category</label>
                <div className="form-group input-group">
                  
                  <input   className="form-control" type="email" required />
                </div>
                <label >Price</label>
                <div className="form-group input-group">
                  
                  <input   className="form-control" type="email" required />
                </div>
                <label>Description</label>
                <div className="form-group input-group">
                 
                  <input   className="form-control" type="text"  required />
                </div>
               
                <div className="button">
            <center>      <button className="btn" type="submit">Add Now</button></center>
                </div>
                
             
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    
    
    
      )
}

export default AddProduct