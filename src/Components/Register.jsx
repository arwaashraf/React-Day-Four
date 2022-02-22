import React from 'react'

function Register() {
  return (
    <form>
      <div className="container my-5">
        <div className="form-group">
          <h2
            className="text-primary text-center"
            style={{ fontSize: 44, fontStyle: "italic" }}
          >
            Register
          </h2>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="UserName"
              name="name"
            />
            <label>Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="UserName"
              name="username"
            />
            <label>User Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
              name="email"
            />
            <label>Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type={"password"}
              className="form-control"
              placeholder="Password"
              name="password"
            />
            <label>Password</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              name="confirmPassword"
            />
            <label>Confirm Password</label>
          </div>
          <div className="mb-3">
            <input
              className="form-check-input"
              type="checkbox"
            />
            <label className="form-check-label mx-1">Show Password</label>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-lg position-absolute bottom-20 start-50 translate-middle-x"
        >
          Registration
        </button>
        <br></br>
      </div>
    </form>
  )
}

export default Register
