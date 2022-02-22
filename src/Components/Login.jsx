import React from "react";

function Login() {
  return (
    <div>
      <>
        <form>
          <div className="container my-5">
            <div className="form-group">
              <h2
                className="text-primary text-center"
                style={{ fontSize: 44, fontStyle: "italic" }}
              >
                Login
              </h2>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="name@example.com"
                />
                <label>Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
                <label>Password</label>
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary position-absolute bottom-20 start-50 translate-middle-x"
            >
              Login / SignIn
            </button>
          </div>
        </form>
      </>
    </div>
  );
}

export default Login;
