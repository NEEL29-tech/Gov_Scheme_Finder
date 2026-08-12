import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Footer({ onOpenPrivacy }) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="footer-custom">
      <div className="container">
        <div className="row g-4 mb-4">
          {/* Column 1: About Portal */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div
                className="rounded text-white font-extrabold d-flex align-items-center justify-content-center shadow-sm"
                style={{ width: "32px", height: "32px", backgroundColor: "#1d4ed8", fontSize: "1.1rem" }}
              >
                G
              </div>
              <h5 className="footer-heading mb-0 fs-5">GovScheme India</h5>
            </div>
            <p className="text-slate-500 small mb-3 opacity-90" style={{ fontSize: "0.83rem", color: "#64748b" }}>
              An integrated, citizen-centric platform providing accurate information on central and state government welfare schemes, eligibility verification, required documents, and direct application pathways.
            </p>
            <div className="d-flex gap-2">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon-btn" title="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon-btn" title="Twitter / X">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-icon-btn" title="YouTube">
                <i className="bi bi-youtube"></i>
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noreferrer" className="social-icon-btn" title="WhatsApp Helpline">
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Sector Links */}
          <div className="col-lg-2 col-md-6">
            <h5 className="footer-heading">Key Sectors</h5>
            <ul className="list-unstyled mb-0">
              <li><Link to="/schemes?sector=Healthcare" className="footer-link">Healthcare</Link></li>
              <li><Link to="/schemes?sector=Education" className="footer-link">Education</Link></li>
              <li><Link to="/schemes?sector=Agriculture" className="footer-link">Agriculture</Link></li>
              <li><Link to="/schemes?sector=Employment" className="footer-link">Employment</Link></li>
              <li><Link to="/ai-suggestions" className="footer-link">Eligibility Helper</Link></li>
            </ul>
          </div>

          {/* Column 3: Emergency Helplines */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-heading">Helplines & Toll-Free</h5>
            <div className="small text-slate-600" style={{ fontSize: "0.82rem" }}>
              <p className="mb-2"><strong className="text-slate-800">National Citizen Toll-Free:</strong><br /><i className="bi bi-telephone me-1 text-primary"></i> 1800-11-2001 (24x7)</p>
              <p className="mb-2"><strong className="text-slate-800">PM-KISAN Helpline:</strong><br /><i className="bi bi-telephone me-1 text-primary"></i> 155261 / 1800-115-526</p>
              <p className="mb-0"><strong className="text-slate-800">Ayushman Bharat PM-JAY:</strong><br /><i className="bi bi-telephone me-1 text-primary"></i> 14555</p>
            </div>
          </div>

          {/* Column 4: Newsletter Sign Up */}
          <div className="col-lg-3 col-md-6">
            <h5 className="footer-heading">Subscribe to Updates</h5>
            <p className="small text-slate-500 mb-2.5" style={{ fontSize: "0.8rem", color: "#64748b" }}>
              Get instant alerts whenever new central or state schemes are launched.
            </p>

            {subscribed ? (
              <div className="alert alert-success py-2 px-3 small border-0 rounded-xl d-flex align-items-center gap-2" style={{ backgroundColor: "#ecfdf5", color: "#047857" }}>
                <i className="bi bi-check-circle-fill fs-6"></i>
                <div style={{ fontSize: "0.8rem" }}>
                  <strong>Subscribed!</strong> You will now receive scheme updates.
                </div>
              </div>
            ) : (
              <form onSubmit={handleNewsletter}>
                <div className="d-flex gap-2">
                  <input
                    type="email"
                    className="form-control form-control-sm rounded-xl border-slate-200 bg-slate-50 text-xs"
                    placeholder="Enter email or phone..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ fontSize: "0.8rem", borderColor: "#e2e8f0" }}
                    required
                  />
                  <button
                    className="btn btn-gov-primary btn-sm rounded-xl font-bold px-3 py-1.5"
                    type="submit"
                    style={{ fontSize: "0.8rem" }}
                  >
                    Join
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        <div className="pt-3 border-top border-slate-200 d-flex flex-wrap justify-content-between align-items-center text-xs text-slate-400" style={{ borderTopColor: "#e2e8f0", fontSize: "0.78rem" }}>
          <div>
            © {new Date().getFullYear()} <strong className="text-slate-700">GovScheme India</strong>. National Citizen Information Portal.
          </div>
          <div className="d-flex gap-3">
            <button
              onClick={onOpenPrivacy}
              className="btn btn-link text-slate-500 text-decoration-none p-0"
              style={{ fontSize: "0.78rem" }}
            >
              Privacy Policy
            </button>
            <Link to="/contact" className="text-slate-500 text-decoration-none">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

