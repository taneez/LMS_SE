import { useState } from "react";
import { Link } from "react-router-dom";
import "./navigationBar.css";

const NavigationBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userRole, setUserRole] = useState(""); // 'student' or 'staff'

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole("");
    // Add any additional logout logic here, such as clearing session data
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-custom fixed-top"
        style={{ height: "80px" }}
      >
        <Link className="navbar-brand" to="/">
          <h1 style={{ fontSize: "20px", marginLeft: "25%", marginTop: "5px" }}>
            EvokeEsteem
          </h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
          style={{ marginLeft: "45%" }}
        >
          <ul className="navbar-nav" style={{ fontSize: "17px" }}>
            {!isLoggedIn ? (
              // Show About and Login links if the user is not logged in
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/home">
                    Login
                  </Link>
                </li>
              </>
            ) : (
              // Show different navigation items based on user role
              <>
                {userRole === "student" ? (
                  // Navigation items for student
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/portal">
                        Laundry
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/lostFound">
                        Lost & Found
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/adminAnnouncements">
                        Messages for Students
                      </Link>
                    </li>
                  </>
                ) : (
                  // Navigation items for staff
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/admin">
                        Admin
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/lostFound">
                        Lost & Found
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/studentComplaints">
                        Messages for Admin
                      </Link>
                    </li>
                  </>
                )}
              </>
            )}
          </ul>
          {isLoggedIn && (
            // User icon with logout option on the right side
            <div className="user-icon">
              <div className="dropdown">
                <button
                  className="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="userDropdown"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src="user-icon.png" // Add your user icon image URL here
                    alt="User Icon"
                    className="user-icon-img"
                  />
                </button>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="userDropdown"
                >
                  <button className="dropdown-item" onClick={handleLogout}>
                    Logout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
