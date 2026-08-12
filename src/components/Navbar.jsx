import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar({ searchKeyword, setSearchKeyword, savedCount = 0 }) {
  const [navSearch, setNavSearch] = useState(searchKeyword || "");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (setSearchKeyword) setSearchKeyword(navSearch);
    navigate(`/schemes?search=${encodeURIComponent(navSearch)}`);
  };

  return (
    <header className="navbar navbar-expand-lg navbar-custom sticky-top">
      <div className="container">
        {/* Brand Logo & Name */}
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <div
            className="rounded text-white font-extrabold d-flex align-items-center justify-content-center shadow-sm"
            style={{ width: "34px", height: "34px", backgroundColor: "#1d4ed8", fontSize: "1.2rem" }}
          >
            G
          </div>
          <div className="d-flex align-items-center">
            <span className="fw-bold tracking-tight text-slate-800" style={{ color: "#1e293b", fontSize: "1.15rem" }}>
              GovScheme <span className="text-primary" style={{ color: "#1d4ed8" }}>India</span>
            </span>
            <span className="brand-badge">2026 OFFICIAL</span>
          </div>
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler border-0 p-1"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMain"
          aria-controls="navbarMain"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list fs-2 text-slate-700"></i>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarMain">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-1">
            <li className="nav-item">
              <Link
                className={`nav-link-custom nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link-custom nav-link ${
                  location.pathname.startsWith("/schemes") ? "active" : ""
                }`}
                to="/schemes"
              >
                Schemes
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link-custom nav-link ${
                  location.pathname === "/ai-suggestions" ? "active" : ""
                }`}
                to="/ai-suggestions"
              >
                Eligibility
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link-custom nav-link ${
                  location.pathname === "/dashboard" ? "active" : ""
                }`}
                to="/dashboard"
              >
                Dashboard
                {savedCount > 0 && (
                  <span className="badge bg-primary text-white ms-1 rounded-pill px-2 py-1" style={{ fontSize: "0.7rem", backgroundColor: "#1d4ed8" }}>
                    {savedCount}
                  </span>
                )}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link-custom nav-link ${
                  location.pathname === "/contact" ? "active" : ""
                }`}
                to="/contact"
              >
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Search Bar & User Profile Button */}
          <div className="d-flex align-items-center gap-2 flex-wrap mt-2 mt-lg-0">
            <form onSubmit={handleSearchSubmit} className="position-relative me-1">
              <input
                type="text"
                className="nav-search-input form-control shadow-none"
                placeholder="Search schemes, benefits..."
                value={navSearch}
                onChange={(e) => setNavSearch(e.target.value)}
                style={{ paddingLeft: "2.2rem" }}
              />
              <i
                className="bi bi-search position-absolute text-muted"
                style={{ left: "0.85rem", top: "50%", transform: "translateY(-50%)", fontSize: "0.82rem" }}
              ></i>
            </form>

            <Link
              to="/profile"
              className="btn btn-sm btn-outline-secondary rounded-pill px-3 py-1 d-flex align-items-center gap-1.5 fw-semibold"
              style={{ fontSize: "0.82rem", borderColor: "#cbd5e1", color: "#475569" }}
              title="User Profile Settings"
            >
              <i className="bi bi-person-circle fs-6 text-primary"></i>
              <span className="d-none d-xl-inline">Citizen Profile</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

