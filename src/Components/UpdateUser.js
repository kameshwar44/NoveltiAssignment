import React from "react";

function UpdateUser() {
  return (
    <div className="container">
      <div className="w-50 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Update User</h2>
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mt-3"
              placeholder="Enter Your Name"
              name="name"
              
              // onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mt-3"
              placeholder="Enter Your Salary"
              name="Salary"
             
              // onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mt-3"
              placeholder="Enter Your Username"
              name="username"
             
              // onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg mt-3"
              placeholder="Enter Your E-mail Address"
              name="email"
            
              // onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mt-3"
              placeholder="Enter Your Phone Number"
              name="phone"
            
              // onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg mt-3"
              placeholder="Enter Your Website Name"
              name="website"
             
              // onChange={(e) => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block mt-4">
            Update User
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
